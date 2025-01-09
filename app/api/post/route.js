import connectDB from "@/lib/connectDB";
import Blog from "@/lib/model/blog.model";

export async function POST(req) {
    const { title, description, content, author, category, rating } = await req.json();
    const link = author + "-" + title.split(" ").join("-");

    console.log(link);
    const existingBlog = await Blog.findOne({ link });
    console.log(existingBlog);
    if (existingBlog) {
        return new Response(JSON.stringify({ status: 400, message: "Blog with this title already exists" }), { status: 400 });
    }

    try {
        await connectDB();
        const blog = new Blog({ title, description, content, author, category, rating, link });
        await blog.save();
        return new Response(JSON.stringify(link), { status: 201 });
    } catch (error) {
        return new Response("Failed to create a new blog", { status: 500 });
    }
}

export async function GET(req) {

    const isTrending = req.nextUrl.searchParams.get('query')
    const isCategory = req.nextUrl.searchParams.get('category')

    if (isTrending && isCategory) {
        try {
            await connectDB();
            const blog = await Blog.find({ category: isCategory }, 'title description author category views link createdAt').sort({ views: -1 });
            return new Response(JSON.stringify(blog), { status: 200 });
        } catch (error) {
            return new Response("Failed to fetch blog", { status: 500 });
        }
    }

    if (isCategory) {
        try {
            await connectDB();
            const blog = await Blog.find({ category: isCategory }, 'title description author category views link createdAt').sort({ createdAt: -1 });
            return new Response(JSON.stringify(blog), { status: 200 });
        } catch (error) {
            return new Response({ message: "Failed to fetch blog" , status: 500}, { status: 500 });
        }
    }

    if (isTrending) {
        try {
            await connectDB();
            const blog = await Blog.find({}, 'title description author category views link createdAt').sort({ views: -1 });
            return new Response(JSON.stringify(blog), { status: 200 });
        } catch (error) {
            return new Response("Failed to fetch blog", { status: 500 });
        }
    }

    try {
        await connectDB();
        const blog = await Blog.find({}, 'title description author category views link createdAt').sort({ createdAt: -1 });
        return new Response(JSON.stringify(blog), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch blog", { status: 500 });
    }
}
import connectDB from "@/lib/connectDB";
import Blog from "@/lib/model/blog.model";

export async function POST(req) {
    try {
        // Ensure database connection
        console.log("Starting database connection...");
        await connectDB();
        console.log("Database connection successful");

        // Parse request JSON
        const { title, description, content, author, category, rating } = await req.json();

        // Generate unique link
        const link = `${author}-${title.split(" ").join("-")}`.toLowerCase();

        // Check if blog already exists
        const existingBlog = await Blog.findOne({ link });
        if (existingBlog) {
            return new Response(
                JSON.stringify({ status: 400, message: "Blog with this title already exists" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // Create and save new blog
        const blog = new Blog({
            title,
            description,
            content,
            author,
            category,
            rating,
            link,
        });
        await blog.save();

        // Return success response
        return new Response(
            JSON.stringify({ status: 201, link }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error:", error);

        // Return error response
        return new Response(
            JSON.stringify({ status: 500, error: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
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
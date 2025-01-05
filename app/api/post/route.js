import connectDB from "@/lib/connectDB";
import Blog from "@/lib/model/blog.model";

export async function POST(req) {
    const { title, description, content, author, category, rating } = await req.json();
    const link = author+ "-" + title.split(" ").join("-");
    try {
        await connectDB();
        const blog = new Blog({ title, description, content, author, category, rating, link });
        await blog.save();
        return new Response(JSON.stringify(link), { status: 201 });
    } catch (error) {
        return new Response("Failed to create a new blog", { status: 500 });
    }
}
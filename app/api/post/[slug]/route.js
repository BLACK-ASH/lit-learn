import connectDB from "@/lib/connectDB";
import Blog from "@/lib/model/blog.model";

export async function GET(req, params) {

    const { slug } = await params.params;
    
    try {
        await connectDB();
        const blog = await Blog.findOne({ link: slug });
        blog.views += 1;
        await blog.save();
        return new Response(JSON.stringify(blog), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch blog", { status: 500 });
    }
}

export async function DELETE(req, params) {

    const { slug } = await params.params;
    
    try {
        await connectDB();
        const blog = await Blog.findOneAndDelete({ link: slug });
        return new Response(JSON.stringify(blog), { status: 200 });
    } catch (error) {
        return new Response("Failed to delete blog", { status: 500 });
    }
}
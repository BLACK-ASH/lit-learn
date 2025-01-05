import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    author: String,
    category: String,
    views:{
        type: Number,
        default: 0
    },
    link: {
        type: String,
        unique: true
    }
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
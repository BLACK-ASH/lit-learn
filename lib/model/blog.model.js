import mongoose from "mongoose";

// Define the schema for the blog
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Ensure title is required
    },
    description: {
      type: String,
      required: true, // Ensure description is required
    },
    content: {
      type: String,
      required: true, // Ensure content is required
    },
    author: {
      type: String,
      required: true, // Ensure author is required
    },
    category: {
      type: String,
      required: true, // Ensure category is required
    },
    views: {
      type: Number,
      default: 0, // Default views to 0
    },
    link: {
      type: String,
      unique: true, // Ensure link is unique
      required: true, // Ensure link is required
    },
  },
  { timestamps: true }
);

// Ensure that the Blog model is created or used if already exists
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;

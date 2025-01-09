import BlogCard from "./BlogCard";
import { notFound } from "next/navigation";


const  TrendingBlog = async () => {

  let blogs;

  try {
    const res = await fetch(`${process.env.BASE_URL}/api/post/?query=trending`);
    if (res.status === 500) {
      return ;
    }
    blogs = await res.json();
  } catch (error) {
    console.log(error);
    return ;
  }

  return (
    <div className="py-16">
      <h1 className="text-4xl text-primary font-semibold mb-8">Trending Blogs</h1>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            blog={blog}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default TrendingBlog
import BlogCard from "./BlogCard";


const TrendingBlog = () => {

  const blogs = [
    {
      title: "Exploring the World of English Literature",
      description:
        "Dive into the fascinating world of English literature, from classic works to modern masterpieces. Discover the stories behind the pages and the authors who changed the literary landscape.",
      author: "John Doe",
      publishedDate: "January 1, 2025",
      readTime: "8 min read",
      rating: 5,
      link: "/blog/exploring-world-of-english-literature",
    },
    {
      title: "The Importance of Language Skills in Communication",
      description:
        "Effective communication is key in every area of life. This blog post explores the importance of mastering language skills and how they can elevate your career and personal relationships.",
      author: "Jane Smith",
      publishedDate: "December 20, 2024",
      readTime: "6 min read",
      rating: 4,
      link: "/blog/importance-of-language-skills",
    },
    {
      title: "A Guide to Mastering English Grammar",
      description:
        "Learn the ins and outs of English grammar with this comprehensive guide. From tenses to punctuation, we cover everything you need to know to write with confidence and clarity.",
      author: "Samuel Lee",
      publishedDate: "December 10, 2024",
      readTime: "10 min read",
      rating: 4,
      link: "/blog/mastering-english-grammar",
    },
    {
      title: "Exploring the World of English Literature",
      description:
        "Dive into the fascinating world of English literature, from classic works to modern masterpieces. Discover the stories behind the pages and the authors who changed the literary landscape.",
      author: "John Doe",
      publishedDate: "January 1, 2025",
      readTime: "8 min read",
      rating: 5,
      link: "/blog/exploring-world-of-english-literature",
    },
    {
      title: "The Importance of Language Skills in Communication",
      description:
        "Effective communication is key in every area of life. This blog post explores the importance of mastering language skills and how they can elevate your career and personal relationships.",
      author: "Jane Smith",
      publishedDate: "December 20, 2024",
      readTime: "6 min read",
      rating: 4,
      link: "/blog/importance-of-language-skills",
    },
    {
      title: "A Guide to Mastering English Grammar",
      description:
        "Learn the ins and outs of English grammar with this comprehensive guide. From tenses to punctuation, we cover everything you need to know to write with confidence and clarity.",
      author: "Samuel Lee",
      publishedDate: "December 10, 2024",
      readTime: "10 min read",
      rating: 4,
      link: "/blog/mastering-english-grammar",
    },
  ];

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
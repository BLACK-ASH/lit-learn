import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

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
          <Card key={index} className="w-full shadow-md shadow-primary border rounded-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{blog.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{blog.description}</p>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{blog.author} | {blog.publishedDate}</span>
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center mt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(blog.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500" />
                  ))}
                </div>
                <Button
                  variant="link"
                  className="ml-2 text-blue-600 hover:text-blue-800"
                  href={blog.link}
                >
                  Read more
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TrendingBlog
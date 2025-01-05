import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Badge } from "../ui/badge";

const BlogCard = ({ blog, index }) => {
    return (
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
                <div className="flex items-center  justify-between mt-4">
                    <Badge variant={"secondary"} className="ml-2">category</Badge>
                    <div className="flex items-center">
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
    )
}

export default BlogCard
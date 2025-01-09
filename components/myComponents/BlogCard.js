import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";

const BlogCard = ({ blog, index }) => {
    return (
        <Card key={index} className="w-full shadow-md shadow-primary border rounded-md">
            <CardHeader>
                <CardTitle className="text-xl font-semibold">{blog.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{blog.description}</p>
                <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{blog.author} | {blog.createdAt}</span>
                </div>
                <div className="flex items-center  justify-between mt-4">
                    <Badge variant={"secondary"} className="ml-2">{blog.category}</Badge>
                    <div className="flex items-center">
                        <Eye className="mr-1" />
                        <p>
                            {blog.views}
                        </p>
                    </div>
                    <Button variant="link" className="text-primary">
                        <Link href={`${process.env.BASE_URL}/blogs/${blog.link}`}> Read More</Link>
                    </Button>


                </div>
            </CardContent>
        </Card>
    )
}

export default BlogCard
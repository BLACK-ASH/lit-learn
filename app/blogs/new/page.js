"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast"
import CategoryInput from "@/components/myComponents/Category";
import ContentEditor from "@/components/myComponents/ContentEditor";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


const page = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [description, setdescription] = useState("");
    const [category, setCategory] = useState("");
    const { toast } = useToast();
    const user = useUser();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for empty fields
        if (!title || !description) {
            toast({
                title: "Error",
                description: "Please fill out all required fields.",
                variant: "destructive",
            });
            return;
        }

        // Post Data (Example of an API call)
        const newPost = {
            author: user?.user?.username,
            title,
            description,
            category: category,
            content: content,
        };

        // Mock API call (replace with actual API endpoint)
        try {
            await fetch("/api/post", {
                method: "POST",
                headers: {
                    "description-Type": "application/json",
                },
                body: JSON.stringify(newPost),
            })
                .then(async (res) => {
                    return await res.json();
                })
                .then((data) => {
                    if (data?.status == 400) {
                        toast({
                            title: "Error",
                            description: JSON.stringify(data.message),
                            variant: "destructive",
                        });
                        return;
                    }
                    // Success toast and reset fields
                    toast({
                        title: "Success",
                        description: "Your post has been created.",
                    });
                    router.push(`/blogs/${data}`);
                    setTitle("");
                    setdescription("");
                    setCategory("");
                    setContent("");
                })



        } catch (error) {
            toast({
                title: "Error",
                description: "There was an error creating your post.",
                variant: "destructive",
            });
            console.log("Error creating post:", error);
            console.error("Error creating post:", error);
        }
    };

    return (
        <div className="max-w-3xl m-2 sm:mx-auto py-8">
            <Card>
                <CardHeader>
                    <CardTitle>Create a New Post</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title */}
                        <div>
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                placeholder="Enter the post title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="mt-2"
                            />
                        </div>

                        {/* description */}
                        <div>
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                placeholder="Write your post description here..."
                                value={description}
                                onChange={(e) => setdescription(e.target.value)}
                                className="mt-2"
                            />
                        </div>

                        {/* content */}
                        <ContentEditor
                            content={content}
                            onChange={setContent}
                        />

                        {/* category */}
                        <CategoryInput
                            selectedCategory={category}
                            onChange={(value) => setCategory(value)}
                        />

                        {/* Submit Button */}
                        <Button type="submit" className="w-full">
                            Publish Post
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default page;

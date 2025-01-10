import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notFound } from "next/navigation";
const page = async ({ params }) => {
  const { slug } = await params

  let blog;
  try {

    const res = await fetch(`${process.env.BASE_URL}/api/post/${slug}`);
    if (res.status != 200) {
      return notFound();
    }
    blog = await res.json();

  }
  catch (error) {
    return notFound();
  }

  if (!blog) {
    return notFound();
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <Card className="shadow-lg rounded-xl bg-white">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold text-gray-900">{blog?.title}</CardTitle>
          <div className="p-6 rounded-lg border ">
            <div className="text-gray-600 space-y-2">
              <p>
                <span className="font-semibold ">Author:</span> {blog?.author}
              </p>
              <p>
                <span className="font-semibold ">Category:</span> {blog?.category}
              </p>
              <p>
                <span className="font-semibold ">Views:</span> {blog?.views}
              </p>
              <p>
                <span className="font-semibold ">Created At:</span>{" "}
                {new Date(blog?.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Description */}
            <div className="text-lg text-gray-600">
              <h2 className="font-semibold text-xl ">Description</h2>
              <p>{blog?.description}</p>
            </div>

            {/* Content */}
            <div className="text-lg ">
              <h2 className="font-semibold text-xl ">Content</h2>
              <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            </div>




          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default page
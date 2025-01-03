import {
  BookOpen,
  Search,
  Edit,
  CheckCircle,
  User,
  Download,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
const Feature = () => {

  const features = [
    {
      icon: BookOpen,
      title: "Organized Resources",
      description:
        "Access PYQs, solved papers, and handwritten notes categorized by year, topic, and difficulty.",
    },
    {
      icon: Search,
      title: "Advanced Search",
      description:
        "Quickly find what you need with powerful search and filters by subject, topic, or year.",
    },
    {
      icon: Edit,
      title: "Interactive Blogs",
      description:
        "Explore tips, strategies, and insights to excel in your exams and understand key concepts.",
    },
    {
      icon: CheckCircle,
      title: "Test Your Skills",
      description:
        "Create custom tests or attempt pre-made quizzes to analyze your preparation level.",
    },
    {
      icon: User,
      title: "Personalized Study",
      description:
        "Bookmark resources, track progress, and create your own study lists for focused learning.",
    },
    {
      icon: Download,
      title: "Downloadable Content",
      description:
        "Download notes and papers in PDF format for offline access anytime, anywhere.",
    },
  ];

  return (
    <div className="container py-16 mx-auto px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          Key Features
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Discover tools designed to make learning easier, faster, and more
          effective.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex items-center gap-4">
              <feature.icon className="h-10 w-10 text-purple-600" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Feature
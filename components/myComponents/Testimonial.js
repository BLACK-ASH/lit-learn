import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonial = () => {

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Student",
      feedback:
        "This website has been a lifesaver! The PYQs and solved papers are incredibly well-organized and helped me prepare efficiently.",
      rating: 5,
    },
    {
      name: "Rahul Mehta",
      role: "Student",
      feedback:
        "The handwritten notes are a game-changer. They're concise, clear, and super easy to understand.",
      rating: 4,
    },
    {
      name: "Ananya Singh",
      role: "Teacher",
      feedback:
        "The blogs section provides valuable insights for both students and teachers. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Student",
      feedback:
        "This website has been a lifesaver! The PYQs and solved papers are incredibly well-organized and helped me prepare efficiently.",
      rating: 5,
    },
    {
      name: "Rahul Mehta",
      role: "Student",
      feedback:
        "The handwritten notes are a game-changer. They're concise, clear, and super easy to understand.",
      rating: 4,
    },
    {
      name: "Ananya Singh",
      role: "Teacher",
      feedback:
        "The blogs section provides valuable insights for both students and teachers. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <div className="container py-16 mx-auto px-10 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary tracking-tight">
          What Our Users Say
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Hear from students, teachers, and aspirants who’ve benefited from our resources.
        </p>
      </div>

      <Carousel className="w-full max-w-3xl space-y-6 mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="p-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{testimonial.name}</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} fill="yellow" className="h-4 w-4 text-yellow-500" />
                      ))}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.feedback}"
                  </p>
                  <span className="mt-2 block text-xs text-muted-foreground">
                    - {testimonial.role}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-between mt-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  )
}

export default Testimonial
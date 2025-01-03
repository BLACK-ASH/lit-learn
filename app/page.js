
import Feature from "@/components/myComponents/Feature";
import Hero from "@/components/myComponents/Hero";
import Testimonial from "@/components/myComponents/Testimonial";
import TrendingBlog from "@/components/myComponents/TrendingBlog";


export default function Home() {
  return (
    <div className="h-screen w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
      <section>
        <Hero />
      </section>
      <section>
        <Feature />
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <TrendingBlog />
      </section>
    </div>
  );
}

// This Page will Contain the Content that we need to show on the Web Site

import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicAcademyTestimonial from "@/components/TestimonialCards";

// It is similar like the React Functional Component
export default function Home() {
    return (
        <main className="min-h-screen bg-black antialiased bg-grid-white/[0.0]">

            {/* <h1 className="text-4xl font-bold m-3 text-center">Music Academy - Chai Aur Code</h1> */}
            <HeroSection />

            {/* Adding the Featured Courses */}
            <FeaturedCourses />

            {/* Adding the Sticky Scroll */}
            <WhyChooseUs />

            {/* Adding the Testimonial Cards */}
            <MusicAcademyTestimonial />
        </main>
    );
}

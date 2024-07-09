"use client";
import React from "react";

import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        title: "Expert Instructors",
        description:
            "Learn from the best in the industry. Our instructors are experienced musicians and educators dedicated to helping you achieve your musical goals. Whether you're a beginner or an advanced student, you'll receive personalized guidance and support.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
                <Image
                    src="https://plus.unsplash.com/premium_photo-1682089460958-197625f994af"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                    alt="Guitar class"
                />
            </div>
        ),
    },
    {
        title: "Comprehensive Curriculum",
        description:
            "Our courses are designed to cover all aspects of music education, from theory and technique to performance and production. With a wide range of classes available, you can find the perfect fit for your interests and skill level.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="https://images.unsplash.com/photo-1507838153414-b4b713384a76"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                    alt="Guitar class"
                />
            </div>
        ),
    },
    {
        title: "State of the Art Facilities",
        description:
            "Practice and perform in our modern, fully equipped studios. Our facilities are designed to provide the best environment for learning and creativity. Access high-quality instruments, recording equipment, and performance spaces.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] flex items-center justify-center text-white">
                <Image
                    src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                    alt="Guitar class"
                />
            </div>
        ),
    },
    {
        title: "Community Engagement",
        description:
            "Join a vibrant community of musicians. Participate in workshops, masterclasses, and performance opportunities. Collaborate with fellow students and professionals to enhance your learning experience and build lasting connections.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))] flex items-center justify-center text-white">
                <Image
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                    alt="Guitar class"
                />
            </div>
        ),
    },
];

export default function WhyChooseUs() {
    return (
        <div className="py-10">
            <div className="text-center">
                <p className="my-4 text-xl leading-8 font-semibold tracking-tight text-white sm:text-4xl">Why Choose Us ?</p>
            </div>
            <div className="p-5">
                <StickyScroll content={content} />
            </div>
        </div>
    );
}

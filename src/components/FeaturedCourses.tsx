'use client';

import Image from "next/image"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"
import courseData from "../data/music_courses.json";

// Creating an Interface for Creating the Custom Datatype for the course
interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string,
}

function FeaturedCourses() {

    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)

    return (
        <div className="py-12 bg-gray-800">
            <div>
                <div className="text-center">
                    <h2 className="mt-2 text-2xl text-teal-600 font-bold tracking-wide uppercase">Featured Courses</h2>
                    <p className="mt-2 text-xl leading-8 font-semibold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                </div>

                <div className="mt-10 mx-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {
                            featuredCourses && featuredCourses.map((course:Course)=>{
                                return (
                                    <div key={course.id}>
                                        <BackgroundGradient className="rounded-[22px] p-10   bg-white dark:bg-black">

                                            <Image
                                                src={course.image}
                                                alt="jordans"
                                                width="500"
                                                height="500"
                                                className="mx-auto rounded-md border-[1px] border-white/55"
                                            />

                                            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                                {course.title}
                                            </p>

                                            <p className="text-base text-neutral-600 antialiased dark:text-neutral-400">
                                               {course.description}
                                            </p>
                                            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-md font-bold dark:bg-zinc-800">
                                                <span>Buy now </span>
                                                <span className="bg-zinc-700 rounded-full text-md px-2 mx-2 py-0 text-white">
                                                    ₹ {course.price}
                                                </span>
                                            </button>
                                        </BackgroundGradient>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <Link
                        href={"/courses"}
                        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                    >View All Courses</Link>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourses

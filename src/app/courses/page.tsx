"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import courseData from "@/data/music_courses.json";
import { Meteors } from "@/components/ui/meteors";

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
    localImage: string,
}

function CoursesPage() {

    const courses = courseData.courses.map((course: Course) => course.localImage !== "" ? { ...course, image: course.localImage } : course);

    return (
        <div className="relative py-20 m-20 max-w-full md:m-16 sm:md-20">
            {/* Meteors in the background */}
            <Meteors number={20} className="-z-10" />

            <h1 className="text-white text-center text-3xl font-bold py-5">All Courses ({courses.length})</h1>
            <div className="flex flex-wrap justify-center gap-10 relative z-20">
                {courses.map((course: Course) => (
                    <CardContainer key={course.id} className="basis-1/3 relative z-20">
                        <CardBody className="p-10 bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-white/[0.4] dark:hover:border-2 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl border">
                            {!course.isFeatured ? <CardItem translateZ="50" className="ribbon z-10 bg-black text-white dark:bg-white dark:text-black">Coming Soon</CardItem> : <></>}
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {course.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {course.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={course.image}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full top-0 left-0 object-cover rounded-xl brightness-75 group-hover/card:brightness-100 group-hover/card:shadow-xl"
                                    alt={course.title}
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-10">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
                                    className="py-2 rounded-xl text-md font-normal group-hover/card:font-bold dark:text-white"
                                >
                                    Fees: ₹ {course.price}
                                </CardItem>
                                {course.isFeatured ?
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-md font-bold"
                                    >
                                        Enroll Now
                                    </CardItem>
                                    :
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-md font-bold"
                                    >
                                        Join Waitlist
                                    </CardItem>
                                }
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    )
}

export default CoursesPage

"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Textarea } from "@/components/ui/textarea";
import { IconSend } from "@tabler/icons-react";

export default function SignupFormDemo() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className="h-screen w-full rounded-md bg-black relative flex flex-col pt-40 items-center justify-start antialiased">
            <div className="w-full mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl text-center font-sans font-bold">
                    Contact Us
                </h1>
                <p></p>
                <p className="text-gray-300 max-w-lg mx-auto my-2 text-md text-center relative z-10">
                    We are here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.
                </p>

                <form className="my-8 relative z-10 xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-1/2  mx-auto mt-20" onSubmit={handleSubmit}>
                    <div className="flex flex-col relative z-10 space-y-2 md:space-y-4 mb-4">
                        <LabelInputContainer>
                            <Input id="emailAddress" placeholder="Email Address" type="email" className="py-7 px-5 text-lg" />
                        </LabelInputContainer>


                        <LabelInputContainer>
                            <Textarea id="feedback" placeholder="Your Message" className="py-4 px-5 text-lg resize-none" />
                        </LabelInputContainer>
                    </div>

                    <button
                        className="mx-auto xs:w-4/12 sm:w-4/12 md:w-4/12 lg:w-1/2 px-10 py-4 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 text-white rounded-md font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                    >
                        <IconSend className="inline" /> Send Message
                        <BottomGradient />
                    </button>

                </form>
            </div>
            <BackgroundBeams />
        </div>
    );
}


const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};



const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

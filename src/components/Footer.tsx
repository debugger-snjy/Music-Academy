"use client";

import Link from "next/link";

function Footer() {
    return (
        <div className="bg-black text-gray-300 p-20 pb-10 pt-30">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10">

                {/* About Us Section */}
                <div className="aboutus text-left">
                    <h1 className="text-white text-xl font-bold">About Us</h1>
                    <p className="my-5 leading-6">Music School is a premier institution dedicated to teaching the art
                        and science of music. We nurture talent from the ground up,
                        fostering a vibrant community of musicians.</p>
                </div>

                {/* Links Section */}
                <div className="links text-left">
                    <h1 className="text-white text-xl font-bold">Quick Links</h1>
                    <p className="my-5">
                        <Link className="block leading-8" href="/">Home</Link>
                        <Link className="block leading-8" href="/about">About</Link>
                        <Link className="block leading-8" href="/contact">Contact</Link>
                        <Link className="block leading-8" href="/courses">Courses</Link>
                    </p>

                </div>

                {/* Follow Us Section */}
                <div className="followus text-left">
                    <h1 className="text-white text-xl font-bold">Follow Us</h1>
                    <p className="my-5">
                        <Link className="block leading-8" href="https://www.facebook.com">Facebook</Link>
                        <Link className="block leading-8" href="https://www.twitter.com">Twitter</Link>
                        <Link className="block leading-8" href="https://www.instagram.com">Instagram</Link>
                    </p>
                </div>

                {/* Contact Us Section */}
                <div className="contactus text-left">
                    <h1 className="text-white text-xl font-bold">Contact Us</h1>
                    <div className="my-5 leading-6">
                        <div>Gujarat, India</div>
                        <div>Ahmedabad</div>
                        <div>Email : sanjayasukhwani@gmail.com</div>
                        <div>Phone : (123) 456-7890</div>
                    </div>

                </div>
                
            </div>

            {/* Copyright Text */}
            <p className="text-center py-10">© 2024 Music Academy | Sanjay Sukhwani | All Rights Reserved</p>
        </div>
    )
}

export default Footer

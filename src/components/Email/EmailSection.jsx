"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
                "Content-Type": "application/json",
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
    };

    return (
        <div className="bg-white">
            <section
                id="contact"
                className="grid md:grid-cols-2 mx-10  py-10 pb-10 gap-4 scroll-mt-28 relative"
            >
                {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
                <div data-aos="fade-right" className="lg:w-[70%] flex lg:justify-end justify-center items-center">
                    <img
                        src="/Message.png"
                        alt="Ommniverse Gem"
                        className="w-3/4 lg:w-full object-cover rounded-lg"
                    />
                </div>

                <div data-aos="fade-left">
                    <div className="z-0">
                        <h5 className=" text-2xl font-semibold mb-3 bg-custom-text bg-clip-text text-transparent">
                            Let&apos;s Connect
                        </h5>
                        <p className="text-black font-inter mb-4 max-w-md">
                            {" "}
                            I&apos;m currently looking for new opportunities, my inbox is always
                            open. Whether you have a question or just want to say hi, I&apos;ll
                            try my best to get back to you!
                        </p>
                        {/* <div className="socials flex flex-row gap-2">
                        <Link href="github.com">
                            <Image src={GithubIcon} alt="Github Icon" />
                        </Link>
                        <Link href="linkedin.com">
                            <Image src={LinkedinIcon} alt="Linkedin Icon" />
                        </Link>
                    </div> */}
                    </div>
                    {emailSubmitted ? (
                        <p className="text-green-500 text-sm mt-2">
                            Email sent successfully!
                        </p>
                    ) : (

                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="text-gray-800 block mb-2 text-sm font-medium"
                                >
                                    Your email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    required
                                    className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 shadow-md focus:outline-none transition-all duration-150"
                                    placeholder="jacob@google.com"
                                />

                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="subject"
                                    className="text-gray-800 block mb-2 text-sm font-medium"
                                >
                                    Subject
                                </label>
                                <input
                                    name="subject"
                                    type="text"
                                    id="subject"
                                    required
                                    className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 shadow-md focus:outline-none transition-all duration-150"
                                    placeholder="Just saying hi"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="text-gray-800 block mb-2 text-sm font-medium"
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 shadow-md focus:outline-none transition-all duration-150"
                                    placeholder="Let's talk about..."
                                />
                            </div>
                            <button
                                type="submit"
                                className=" bg-custom-gradient text-white hover:bg-custom-text rounded-full font-medium py-2.5 px-5 w-full"
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
};

export default EmailSection;

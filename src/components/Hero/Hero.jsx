import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const TypewriterEffect = () => {
  const sequences = ["Wen Ming Lee", "Full stack Developer"]; // Words to display
  const typingSpeed = 100; // Speed of typing (ms per character)
  const delayBetweenWords = 1000; // Delay between words (ms)

  const [text, setText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const type = () => {
      const currentWord = sequences[currentWordIndex];
      const updatedText = isDeleting
        ? currentWord.slice(0, text.length - 1)
        : currentWord.slice(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % sequences.length);
      } else {
        timeout = setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
      }
    };

    timeout = setTimeout(type, typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentWordIndex]);

  return (
    <span
      className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-600"
      style={{ display: "inline-block", minHeight: "1.2em" }}
    >
      {text}
    </span>
  );
};

const HeroSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/sur.pdf"; // URL or path to the file
    link.download = "CV.pdf"; // Specify the filename for the download
    link.click(); // Trigger the download
  };

  return (
    <div id="home" className="bg-custom-gradient scroll-smooth">
      <section className="relative top-32 lg:left-48 lg:top-32">
        <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
          <div data-aos="fade-right" className="col-span-1 sm:col-span-7">
            <h1
              className="text-white mb-4 text-3xl text-center lg:text-left sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold"
              style={{ minHeight: "3.5em" }} // Adjust the height as needed
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-600">
                Hello, I&apos;m{" "}
              </span>
              <br />
              <TypewriterEffect />
            </h1>
            <p className="text-white text-base text-center lg:text-left sm:text-lg mb-6 lg:text-xl">
              Hi, I&apos;m  Wen Ming Lee. I am currently a full Stack Developer, <br />
              {/* and I’m now focusing on becoming a Full Stack Developer. */}
            </p>
            <div className="flex flex-col gap-2 sm:flex-row items-center sm:ml-10">
              <Link
                href="#contact"
                className="px-6 py-2 w-full border-1 border-white-transparent sm:w-auto rounded-full mr-0 sm:mr-4 bg-[#FFF] text-black text-lg font-medium hover:bg-custom-text text-center"
              >
                Hire Me
              </Link>
              <button
                onClick={handleDownload}
                className="px-6 py-2 w-full border-1 border-white-transparent sm:w-auto rounded-full mr-0 sm:mr-4 bg-[#FFF] text-black text-lg font-medium hover:bg-custom-text text-center"
              >
                Download CV
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="col-span-1 sm:col-span-5 lg:col-span-3 mt-8 sm:mt-0 flex justify-center sm:justify-center"
          >
            <div className="rounded-full bg-black/40 w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] relative">
              <Image
                src="/images/canva13.png"
                alt="Surendar, Frontend Developer"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={230}
                height={230}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="mt-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290">
          <path
            fill="#fff"
            fillOpacity="1"
            stroke="none"
            d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;

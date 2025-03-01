import Image from "next/image";
import React from "react";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="footer bg-[#151414] border-t-[#33353F] text-white z-10">
      <div data-aos="fade-up" className="container mx-auto p-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/canva13.png"
            style={{ borderRadius: 100 }}
            alt="Wenming Lee, Frontend Developer"
            width={100}
            height={100}
          />
          {/* <span className="text-lg font-semibold">Wenming Lee, Frontend Developer</span> */}
        </div>

        {/* Footer Text */}
        <p className="text-slate-600 text-center md:text-left">
          All rights reserved.
        </p>

        {/* Social Icons Section */}
        <div className="socials flex flex-row gap-4">
          <Link
            href="https://github.com/wenminglee17160"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-all duration-150"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          {/* <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-all duration-150"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link> */}
        </div>
      </div>
    </footer>

  );
};

export default Footer;

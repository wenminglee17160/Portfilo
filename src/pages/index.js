import Image from "next/image";
import localFont from "next/font/local";
import HeroSection from "@/components/Hero/Hero";
import AboutSection from "@/components/About/About";
import ProjectsSection from "@/components/Projects/ProjectSection";
import EmailSection from "@/components/Email/EmailSection";
import Footer from "@/components/Footer/Footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="relative w-full  overflow-x-hidden">
    {/* <video
      alt="Hero Video"
      className="absolute top-0 left-0 w-full h-screen object-cover z-0"
      autoPlay
      loop
      muted
      playsInline
      style={{ filter: 'hue-rotate(160deg)' }}
    >
      <source src={'/hero_bg.mp4'} type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection />
      <EmailSection/>
      <Footer/>
    </div>
  );
}

import { FaNodeJs, FaReact, FaDatabase, FaGitAlt, FaCss3Alt, FaCode } from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
  SiMaterialui,
  SiGraphql
} from "react-icons/si";

const AboutSection = () => {
  return (
    <div className="">
      <section id="about" className="py-16 pb-0 lg:pt-0 relative bg-white scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="lg:w-5/12 text-white space-y-6 mb-8 lg:mb-0">
              <div data-aos="fade-up">
                <div>
                  <h4 className="text-transparent bg-custom-text bg-clip-text font-poppins text-lg font-bold uppercase">
                    About Me
                  </h4>
                </div>
                <p className="text-[#333] font-poppins font-medium lg:text-base text-sm">
                  I am a full-stack web developer with a passion for creating interactive and responsive web applications.
                  I have experience working with JavaScript, React,Next.js,Redux, Node.js, Express,sql,Mongodb,HTML,CSS,and Git.
                  I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and
                  I am excited to work with others to create amazing applications.
                </p>
              </div>

              <div data-aos="fade-up" className="mt-6">
                <h5 data-aos="fade-up" className="text-custom-color-secondary text-lg font-semibold">Skills</h5>
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                  <li data-aos="flip-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="flex flex-col items-center text-white">
                    <FaNodeJs className="text-green-600 text-3xl" />
                    <span className="mt-2 font-medium bg-custom-text bg-clip-text text-transparent">Node.js</span>
                  </li>
                  <li data-aos="flip-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="flex flex-col items-center text-white">
                    <FaReact className="text-blue-500 text-3xl" />
                    <span className="mt-2 font-medium bg-custom-text bg-clip-text text-transparent">React</span>
                  </li>
                  <li data-aos="flip-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="flex flex-col items-center text-white">
                    <SiPostgresql className="text-blue-700 text-3xl" />
                    <span className="mt-2 font-medium bg-custom-text bg-clip-text text-transparent">PostgreSQL</span>
                  </li>
                  <li data-aos="flip-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="flex flex-col items-center text-white">
                    <SiExpress className="text-gray-500 text-3xl" />
                    <span className="mt-2 font-medium bg-custom-text bg-clip-text text-transparent">Express</span>
                  </li>
                  <li data-aos="flip-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="flex flex-col items-center text-white">
                    <SiTailwindcss className="text-teal-400 text-3xl" />
                    <span className="mt-2 font-medium bg-custom-text bg-clip-text text-transparent">Tailwind CSS</span>
                  </li>
                  <li data-aos="flip-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="flex flex-col items-center text-white">
                    <FaDatabase className="text-yellow-500 text-3xl" />
                    <span className="mt-2 font-medium bg-custom-text bg-clip-text text-transparent">SQL</span>
                  </li>
                  <li data-aos="flip-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="flex flex-col items-center text-white">
                    <FaGitAlt className="text-red-600 text-3xl" />
                    <span className="mt-2 font-medium bg-custom-text bg-clip-text text-transparent">Git</span>
                  </li>
                  <li data-aos="flip-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="flex flex-col items-center text-white">
                    <SiNextdotjs className="text-gray-900 text-3xl" />
                    <span className="mt-2 font-medium bg-custom-text bg-clip-text text-transparent">Next.js</span>
                  </li>
                  <li data-aos="flip-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="flex flex-col items-center text-white">
                    <FaCss3Alt className="text-blue-600 text-3xl" />
                    <span className="mt-2 font-medium bg-custom-text bg-clip-text text-transparent">CSS</span>
                  </li>
                  <li data-aos="flip-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="flex flex-col items-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#673AB7"
                      className="text-3xl"
                      width="36px"
                      height="36px"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M1 7l11-7 11 7-11 7zM1 15v5l11 6v-5zM23 15v5l-11 6v-5zM23 9v4l-11 7-11-7V9l11 7z"
                        fill="#673AB7"
                      />
                    </svg>
                    <span className="mt-2 font-medium bg-custom-text bg-clip-text text-transparent">Material UI</span>
                  </li>

                  <li data-aos="flip-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="flex flex-col items-center text-white">
                    <FaCode className="text-purple-600 text-3xl" />
                    <span className="mt-2 font-medium bg-custom-text bg-clip-text text-transparent">API Handling</span>
                  </li>
                  <li data-aos="flip-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="flex flex-col items-center text-white">
                    <SiGraphql className="text-pink-600 text-3xl" />
                    <span className="mt-2 font-medium bg-custom-text bg-clip-text text-transparent">GraphQL</span>
                  </li>
                  <li data-aos="flip-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="flex flex-col items-center text-white">
                    <FaDatabase className="text-orange-600 text-3xl" />
                    <span className="mt-2 font-medium bg-custom-text bg-clip-text text-transparent">Mutations</span>
                  </li>
                </ul>
              </div>
            </div>

            <div data-aos="zoom-in" className="lg:w-6/12 flex lg:justify-end justify-center items-center">
              <img
                src="/about2.png"
                alt="Ommniverse Gem"
                className="w-3/4 lg:w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        {/* <img
          src="/about.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-top opacity-60"
          style={{ filter: "hue-rotate(270deg)" }}
        /> */}
      </section>
    </div>
  );
};

export default AboutSection;

import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import ProfilePicture from "../assets/profile-picture.png";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 64;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative pt-20 pb-30 md:pt-30 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      {/* Left Social Links Floating Stack */}
      <div className="hidden md:flex md:col-span-1 flex-col items-center space-y-6 text-purple-400 text-lg">
        <a
          href="https://github.com/askarihriz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="hover:text-purple-500 transition-colors"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/askari-hassan/"
          target="_blank"
          aria-label="LinkedIn Profile"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-colors"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="mailto:askarihriz@gmail.com"
          target="_blank"
          aria-label="Email"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-colors"
        >
          <IoIosMail size={32} />
        </a>
      </div>

      {/* Main Text Content */}
      <div className="md:col-span-7 space-y-6">
        <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight text-white">
          Hi, I'm Askari
        </h1>
        <p className="text-2xl font-medium text-purple-400">
          <Typewriter
            options={{
              strings: ["Software Engineer", "Full Stack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <p className="text-gray-400 max-w-xl leading-relaxed text-sm sm:text-lg">
          High level experience in web design and development knowledge,
          producing quality work.
        </p>
        <a
          onClick={() => scrollToSection("contact")}
          className="hover:cursor-pointer font-bold inline-flex items-center justify-center px-6 py-3 border-none text-sm rounded-xl text-white bg-[linear-gradient(to_right,#f9ce34,#ee2a7b,#6228d7)] hover:bg-purple-700 shadow-lg shadow-purple-600/20 transition-all transform hover:-translate-y-0.5"
        >
          Contact Me
        </a>
      </div>

      {/* Profile Image Column */}
      <div className="md:col-span-4 flex justify-center relative">
        <div className="relative w-75 h-75 sm:w-72 sm:h-72 rounded-[40%_60%_70%_40%_/_40%_50%_60%_60%] bg-purple-600 overflow-hidden shadow-2xl shadow-purple-500/10 border-none">
          <img
            src={ProfilePicture}
            alt="Askari's Picture"
            className="w-full h-full object-scale-down scale-140 mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

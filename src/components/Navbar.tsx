import React from "react";

const Navbar: React.FC = () => {
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
    <nav className="sticky top-0 z-50 bg-[#0d0c15]/80 backdrop-blur-md border-b border-gray-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold tracking-tight hover:text-purple-400 transition-colors hover:cursor-pointer hover:scale-115 transition-transform duration-300"
        >
          Askari.
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm text-gray-400">
          <a
            onClick={() => scrollToSection("home")}
            className="font-bold hover:text-white transition-colors hover:cursor-pointer hover:scale-115 transition-transform duration-300"
          >
            Home
          </a>
          <a
            onClick={() => scrollToSection("about")}
            className="font-bold hover:text-white transition-colors hover:cursor-pointer hover:scale-115 transition-transform duration-300"
          >
            About
          </a>
          <a
            onClick={() => scrollToSection("qualifications")}
            className="font-bold hover:text-white transition-colors hover:cursor-pointer hover:scale-115 transition-transform duration-300"
          >
            Qualifications
          </a>
          <a
            onClick={() => scrollToSection("portfolio")}
            className="font-bold hover:text-white transition-colors hover:cursor-pointer hover:scale-115 transition-transform duration-300"
          >
            Portfolio
          </a>
          <a
            onClick={() => scrollToSection("contact")}
            className="font-bold hover:text-white transition-colors hover:cursor-pointer hover:scale-115 transition-transform duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

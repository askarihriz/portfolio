import React from "react";

const Footer: React.FC = () => {
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
    <footer className="mt-20 bg-purple-600/10 border-t border-purple-500/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 space-y-4 sm:space-y-0">
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-white font-semibold text-sm">Askari.</p>
          <p>Software Engineer</p>
        </div>

        <div className="flex space-x-6">
          <a
            onClick={() => scrollToSection("about")}
            className="hover:cursor-pointer hover:text-white transition-colors"
          >
            About
          </a>
          <a
            onClick={() => scrollToSection("portfolio")}
            className="hover:cursor-pointer hover:text-white transition-colors"
          >
            Portfolio
          </a>
          <a
            onClick={() => scrollToSection("contact")}
            className="hover:cursor-pointer hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="text-center sm:text-right">
          <p>© {new Date().getFullYear()} Askari. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

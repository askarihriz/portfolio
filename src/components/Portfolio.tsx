import React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "TaaS - Transport as a Service",
    description:
      "Bosch's TaaS, a logistics solution for managing and optimizing transportation services, providing real-time tracking and analytics.",
    image: "src/assets/portfolio-images/TaaS.png",
    link: "https://www.bosch.de/unternehmen/bosch-in-deutschland/bamberg/",
  },
  {
    title: "Driver App",
    description:
      "Bosch's Driver App, a solution for managing and tracking deliveries, providing real-time updates and navigation assistance for drivers.",
    image: "src/assets/portfolio-images/driver-app.png",
    link: "https://www.bosch.de/unternehmen/bosch-in-deutschland/bamberg/",
  },
  {
    title: "Pritchard Sales Portal",
    description:
      "ByteCorp's Pritchard Sales Portal, a platform for managing sales operations, tracking leads, and analyzing performance metrics.",
    image: "src/assets/portfolio-images/pritchard-sales-portal.png",
    link: "https://www.bytecorp.io/en",
  },
  {
    title: "Commercial EVs Platform",
    description:
      "ByteCorp's Commercial EVs platform, a solution for managing and monitoring electric vehicles in a commercial fleet.",
    image: "src/assets/portfolio-images/commercial-ev.png",
    link: "https://www.bytecorp.io/en",
  },
  {
    title: "Alef Digital",
    description:
      "Fully responsive, smooth-scrolling architectural dashboard optimized heavily for enterprise metrics layout.",
    image: "src/assets/portfolio-images/alef-digital.png",
    link: "https://www.bytecorp.io/en",
  },
  {
    title: "Dolla - Virtual Bank",
    description:
      "React Website with smooth scroll, adaptable to all devices with ui components and animated interactions.",
    image: "src/assets/portfolio-images/virtual-banking-app.png",
    link: "https://github.com/askarihriz/virtual-banking-app",
  },
  {
    title: "Duck Shooter in C++",
    description:
      "First person duck shooting game inspired by old retro graphics from PlayStation 1, created using my own 2D GameEngine.",
    image: "src/assets/portfolio-images/duck-shooter.png",
    link: "https://github.com/askarihriz/duck-shooter",
  },
  {
    title: "Flappy Bird in C++",
    description:
      "Good old Flappy Bird recreated using SDL2 Framework and C++, revised with an AI such that the game play by itself infinitly.",
    image: "src/assets/portfolio-images/flappy-bird.png",
    link: "https://github.com/askarihriz/2d-game-engine-with-flappy-bird",
  },
  {
    title: "Dart Mania in C++",
    description:
      "Fun arcade game, recreation of real life carnival dart game. Simple, straight forward, 2D made using SDL2 library and C++.",
    image: "src/assets/portfolio-images/dart-game.png",
    link: "https://github.com/askarihriz/carnival-dart-game",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="space-y-10 py-20">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
        <p className="text-xs text-purple-400 tracking-widest uppercase">
          Most recent work
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            onClick={() => window.open(project.link, "_blank")}
            className="hover:cursor-pointer bg-[#151421] rounded-2xl overflow-hidden border border-gray-800/40 transition-all flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10"
          >
            <div className="aspect-video bg-gray-900 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-fit group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <h3 className="font-bold text-lg text-white tracking-wide">
                {project.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-400 line-clamp-3">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

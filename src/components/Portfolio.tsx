import React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Carnival Dart Game",
    description:
      "Interactive canvas carnival shooting experience simulation utilizing optimized canvas loop frameworks.",
    image: "/placeholder-dart.jpg",
  },
  {
    title: "Modern Website",
    description:
      "Fully responsive, smooth-scrolling architectural dashboard optimized heavily for enterprise metrics layout.",
    image: "/placeholder-web.jpg",
  },
  {
    title: "AI Flappy Bird",
    description:
      "Neuroevolution genetic AI controller modeling reinforcement learning behaviors within arcade bounds.",
    image: "/placeholder-bird.jpg",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="space-y-10 py-6">
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
            className="bg-[#151421] rounded-2xl overflow-hidden border border-gray-800/40 hover:border-purple-500/30 transition-all flex flex-col group"
          >
            <div className="aspect-video bg-gray-900 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

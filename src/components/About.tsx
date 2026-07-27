import React from "react";

const About: React.FC = () => {
  return (
    <div className="py-8 text-center space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
        <p className="text-xs text-purple-400 tracking-widest uppercase">
          My Introduction
        </p>
      </div>
      <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm">
        High level experience in web design and development knowledge, producing
        quality work.
      </p>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto py-4">
        <div className="bg-[#151421] p-4 rounded-xl border border-gray-800/40">
          <span className="block text-xl font-bold text-white">08+</span>
          <span className="text-xs text-gray-400">Years Exp</span>
        </div>
        <div className="bg-[#151421] p-4 rounded-xl border border-gray-800/40">
          <span className="block text-xl font-bold text-white">12+</span>
          <span className="text-xs text-gray-400">Projects</span>
        </div>
        <div className="bg-[#151421] p-4 rounded-xl border border-gray-800/40">
          <span className="block text-xl font-bold text-white">05+</span>
          <span className="text-xs text-gray-400">Clients</span>
        </div>
      </div>

      {/* Mockup Frame Container */}
      <div className="max-w-xs mx-auto border border-gray-800/60 rounded-2xl overflow-hidden shadow-xl bg-[#151421] p-2">
        <img
          src="/placeholder-resume-ui.jpg"
          alt="Resume Showcase Mockup"
          className="w-full h-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default About;

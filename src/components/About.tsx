import React from "react";
import { IoMdDownload } from "react-icons/io";

const About: React.FC = () => {
  const viewResume = async () => {
    const targetUrl =
      "https://docs.google.com/document/d/1xb-YUsuQW18Peoui1IhnerzYLPmvyN_oIRNYnfzFssw/edit?usp=sharing";

    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="py-8 text-center space-y-8 pb-30">
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
      <div className="grid grid-cols-2 gap-4 max-w-[225px] mx-auto py-4">
        <div className="bg-[#151421] p-4 rounded-xl border border-gray-800/40">
          <span className="block text-xl font-bold text-white">04+</span>
          <span className="text-xs text-gray-400">Years Exp</span>
        </div>
        <div className="bg-[#151421] p-4 rounded-xl border border-gray-800/40">
          <span className="block text-xl font-bold text-white">09+</span>
          <span className="text-xs text-gray-400">Projects</span>
        </div>
      </div>

      {/* Mockup Frame Container */}
      <div
        onClick={viewResume}
        className="hover:cursor-pointer max-w-[225px] mx-auto border border-gray-800/60 rounded-2xl overflow-hidden shadow-xl bg-[#151421] p-2 space-y-4 hover:border-purple-500/30 shadow-2xl shadow-purple-500/10 hover:-translate-y-0.5 transition-all"
      >
        <img
          src="src/assets/resume-mock.jpg"
          alt="Resume Showcase Mockup"
          className="w-full h-auto rounded-xl"
        />
        <div className="w-full hover:cursor-pointer font-bold inline-flex items-center justify-center px-6 py-3 border-none text-sm rounded-xl text-white bg-[linear-gradient(to_right,#f9ce34,#ee2a7b,#6228d7)] hover:bg-purple-700 transition-all transform">
          Download Resume <IoMdDownload size={20} className="ml-1" />
        </div>
      </div>
    </div>
  );
};

export default About;

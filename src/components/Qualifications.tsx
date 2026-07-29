import React, { useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

const Qualifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState("education");

  const education = [
    {
      title: "Master of International Software Systems Science",
      organization: "University of Bamberg",
      duration: "2024 - 2026",
      description:
        "Specialized in Software Systems, AI, Distributed Systems and Cloud Computing.",
    },
    {
      title: "Bachelor of Computer Science",
      organization: "FAST NUCES",
      duration: "2019 - 2023",
      description:
        "Focused on Software Engineering, Algorithms, Databases and Web Development.",
    },
  ];

  const work = [
    {
      title: "Software Engineer",
      organization: "Bosch",
      duration: "2025 - Present",
      description:
        "Developing logistics optimization software, Angular applications, route planning, and real-time tracking systems.",
    },
    {
      title: "Software Engineer",
      organization: "ByteCorp",
      duration: "2022 - 2024",
      description:
        "Built scalable React and Node.js applications with REST APIs and SQL databases.",
    },
    {
      title: "Frontend Developer",
      organization: "MarketPlug",
      duration: "2021",
      description:
        "Developed responsive React interfaces and reusable UI components.",
    },
  ];

  const timeline = activeTab === "education" ? education : work;

  return (
    <section className="py-20">
      {/* Heading */}

      <div className="text-center mb-12 space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Qualifications</h2>

        <p className="text-xs text-purple-400 tracking-widest uppercase">
          My Personal Journey
        </p>
      </div>

      {/* Tabs */}

      <div className="flex justify-center gap-4 mb-14">
        <button
          onClick={() => setActiveTab("education")}
          className={`flex items-center gap-2 rounded-full px-6 py-3 transition-all duration-300 ${
            activeTab === "education"
              ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
              : "bg-[#151421] text-zinc-400 hover:bg-zinc-800"
          }`}
        >
          <FaGraduationCap size={22} />
          Education
        </button>

        <button
          onClick={() => setActiveTab("work")}
          className={`flex items-center gap-2 rounded-full px-6 py-3 transition-all duration-300 ${
            activeTab === "work"
              ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
              : "bg-[#151421] text-zinc-400 hover:bg-zinc-800"
          }`}
        >
          <FaBriefcase size={18} />
          Work
        </button>
      </div>

      {/* Timeline */}

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}

        <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 via-purple-600 to-purple-800 opacity-50" />

        <div className="space-y-10">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-16">
              {/* Timeline Dot */}

              <div className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 ring-4 ring-zinc-950 shadow-lg shadow-purple-500/40">
                {activeTab === "education" ? (
                  <FaGraduationCap size={22} />
                ) : (
                  <FaBriefcase size={18} />
                )}
              </div>

              {/* Card */}

              <div className="rounded-2xl border border-purple-500/20 bg-[#151421]/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10">
                <p className="text-sm uppercase tracking-widest text-purple-400">
                  {item.duration}
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-zinc-400">{item.organization}</p>

                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;

import React, { useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

type QualificationItem = {
  title: string;
  organization: string;
  duration: string;
  description?: string;
  bulletPoints?: string[];
};

const Qualifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState("work");

  const education: QualificationItem[] = [
    {
      title: "Masters in International Software Systems Science",
      organization: "University of Bamberg",
      duration: "April 2024 - May 2026",
      description:
        "Specialized in Software Systems, AI, Distributed Systems and Cloud Computing.",
    },
    {
      title: "Bachelors in Computer Science",
      organization: "FAST NUCES",
      duration: "August 2019 - June 2023",
      description:
        "Focused on Software Engineering, Algorithms, Databases and Web Development.",
    },
  ];

  const work: QualificationItem[] = [
    {
      title: "Working Student Software Engineer",
      organization: "Bosch",
      duration: "October 2025 - March 2026",
      bulletPoints: [
        `Shipped a real-time order tracking application(Angular + Mapbox) enabling live navigation and delivery visibility within a logistics application used in an operational environment with ~5000 internal users.`,
        `Created and shipped a distance matrix calculation microservice using(Python + FastAPI + Dijkstra + Google OR-Tools) for internal delivery routing application, extensively used applied AI(Copilot).`,
        `Implemented a robust Axios Interceptor with retry logic, to handle different classes of errors for entire codebase.`,
        `Migrated CI/CD pipelines from Azure DevOps to GitHub Actions and integrated automated testing.`,
      ],
    },
    {
      title: "Software Engineer Intern",
      organization: "Bosch",
      duration: "April 2025 - October 2025",
      bulletPoints: [
        `Shipped a Driver App(Angular 19 + Node.js/TypeScript) by implementing login, delivery tracking, and assignment features in collaboration with UX designers.`,
        `Supported the OR-Tools Task Force in debugging route optimization logic and documenting fixes.`,
        `Explored Playwright for automated testing and developed Cypress E2E cases to ensure Driver App stability before production releases.`,
      ],
    },
    {
      title: "Software Engineer",
      organization: "ByteCorp",
      duration: "February 2022 - May 2024",
      bulletPoints: [
        `Shipped a (React.js + Node.js) Stock Inventory module using ag-grid-react library for SHAED Digital App and maintained it in production.`,
        `Created and shipped Alef Digital app using applied ML(OCR) for Arabic to English legal documents conversion.`,
        `Standardized and documented Axios REST APIs to improve maintainability of the codebase.`,
      ],
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

                <h3 className="mt-2 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-zinc-400">{item.organization}</p>
                {item.bulletPoints ? (
                  <ul className="mt-4 list-disc list-outside pl-5 space-y-3 text-sm leading-6 text-zinc-400">
                    {item.bulletPoints.map((point, idx) => (
                      <li key={idx} className="pl-1">
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;

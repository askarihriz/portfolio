import React from "react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  isLeft,
}) => {
  return (
    <div className="flex w-full my-4 items-center justify-center">
      {/* Left Box Container */}
      <div
        className={`w-5/12 px-4 ${isLeft ? "text-right" : "text-left order-last"}`}
      >
        {isLeft && (
          <div>
            <h4 className="font-semibold text-sm sm:text-base text-white">
              {title}
            </h4>
            <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
          </div>
        )}
      </div>

      {/* Center Bullet Tracker Node */}
      <div className="w-2/12 flex justify-center relative">
        <div className="w-3 h-3 bg-purple-600 rounded-full z-10 border-2 border-[#0d0c15]" />
      </div>

      {/* Right Box Container */}
      <div className={`w-5/12 px-4 ${!isLeft ? "text-left" : "text-right"}`}>
        {!isLeft && (
          <div>
            <h4 className="font-semibold text-sm sm:text-base text-white">
              {title}
            </h4>
            <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Qualifications: React.FC = () => {
  return (
    <div className="py-4 space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Qualifications</h2>
        <p className="text-xs text-purple-400 tracking-widest uppercase">
          My personal journey
        </p>
      </div>

      {/* Centralized Timeline Tree */}
      <div className="relative max-w-2xl mx-auto">
        {/* Core Vertical Timeline Strip Bar Accent */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-purple-600/40 top-2" />

        <div className="space-y-8">
          <TimelineItem
            title="Computer Science"
            subtitle="University / 2021 - Present"
            isLeft={true}
          />
          <TimelineItem
            title="High School"
            subtitle="Academy City / 2018 - 2021"
            isLeft={false}
          />
          <TimelineItem
            title="Matriculation"
            subtitle="School Institute / 2016 - 2018"
            isLeft={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Qualifications;

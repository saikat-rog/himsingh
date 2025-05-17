import { ChevronRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Module {
  title: string;
  description: string[];
}

interface Part {
  parts: Module[];
}

interface Module {
  title: string;
  description: string[];
}


const parts: Part[] = [
  {
    parts: [
      {
        title: "Title of Part 1",
        description: [
          "Building the psychological mindset for freelancing success",
        ],
      },
      {
        title: "Title of Part 2",
        description: [
          "Is freelancing worth it?",
          "Limiting belief about money",
          "Overcoming comparison traps",
          "Developing patience and self-discipline",
          "Setting realistic expectations for success timeline",
        ],
      },
      {
        title: "Title of Part 3",
        description: [
          "Is freelancing worth it?",
          "Limiting belief about money",
          "Overcoming comparison traps",
          "Developing patience and self-discipline",
          "Setting realistic expectations for success timeline",
        ],
      },
      {
        title: "Title of Part 4",
        description: [
          "Is freelancing worth it?",
          "Limiting belief about money",
          "Overcoming comparison traps",
          "Developing patience and self-discipline",
          "Setting realistic expectations for success timeline",
        ],
      },
      {
        title: "Title of Part 5",
        description: [
          "Is freelancing worth it?",
          "Limiting belief about money",
          "Overcoming comparison traps",
          "Developing patience and self-discipline",
          "Setting realistic expectations for success timeline",
        ],
      },
      {
        title: "Title of Part 6",
        description: [
          "Is freelancing worth it?",
          "Limiting belief about money",
          "Overcoming comparison traps",
          "Developing patience and self-discipline",
          "Setting realistic expectations for success timeline",
        ],
      },
    ],
  },
];

function Modules() {
  const [openModules, setOpenModules] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleModule = (partIndex: number, moduleIndex: number) => {
    const key = `${partIndex}-${moduleIndex}`;
    setOpenModules((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex flex-col items-center w-full gap-10 px-5 md:px-20">
      {parts.map((part, partIndex) => (
        <div
          key={partIndex}
          className="flex flex-col md:flex-row w-full max-w-3xl gap-10 mt-10 md:mt-20"
        >
          {/* Left Section (Modules) */}
          <div className="w-full">
            <div className="flex flex-col gap-3">
              {part.parts.map((module, moduleIndex) => {
                const isOpen = openModules[`${partIndex}-${moduleIndex}`];
                return (
                  <div key={moduleIndex} className="w-full">
                    <div
                      className="flex flex-col w-full bg-gray outline-1 outline-white/20 rounded-xl p-4 shadow-md cursor-pointer"
                      onClick={() => toggleModule(partIndex, moduleIndex)}
                    >
                      <div className="flex w-full justify-between items-center">
                        {/* Title takes the available space */}
                        <p className="text-white flex items-center gap-2 flex-grow">
                          {isOpen ? <ChevronDown /> : <ChevronRight />}{" "}
                          {module.title}
                        </p>

                        {/* Module number takes only required space */}
                        <span className="text-secondary flex items-center border border-secondary px-3 py-1 rounded-xl text-sm flex-shrink-0">
                          Part {moduleIndex + 1}
                        </span>
                      </div>

                      {/* Expanded Description with Smooth Transition */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "max-h-[500px] opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="p-4 text-white text-sm">
                          {module.description.length > 0 ? (
                            <ul className="list-disc pl-5">
                              {module.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>No details available.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Section (Static Content) */}
          {/* <div className="w-full md:w-1/2 flex flex-col items-center justify-start">
            <div className="bg-purple-600 w-3/4 md:w-2/3 h-[200px] md:h-[300px] rounded-xl mt-10"></div>
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default Modules;

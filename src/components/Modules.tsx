import { ChevronRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Module {
  title: string;
  description: string[];
}

interface Part {
  title: string;
  modules: Module[];
}

interface Module {
  title: string;
  description: string[];
}

interface Part {
  title: string;
  modules: Module[];
}

const parts: Part[] = [
  {
    title: "Part 1: Finding Clients",
    modules: [
      {
        title: "Million Dollar Mindset",
        description: [
          "Building the psychological mindset for freelancing success",
        ],
      },
      {
        title: "Mindset Mastery Matrix",
        description: [
          "Is freelancing worth it?",
          "Limiting belief about money",
          "Overcoming comparison traps",
          "Developing patience and self-discipline",
          "Setting realistic expectations for success timeline",
        ],
      },
      {
        title: "Business Brain Activation",
        description: [
          "Transitioning from a job to a business owner mindset.",
          "Marketing-first approach to freelancing",
          "Understanding the freelancer vs. agency model",
          "Importance of English and communication skills in freelancing",
        ],
      },
      {
        title: "Success Scaling Blueprint",
        description: [
          "Setting realistic income goals and growth targets.",
          "Work-life boundaries and sustainable growth",
          "Identifying and avoiding burnout - travel, tour, experiences",
        ],
      },
      {
        title: "Freelancing Fundamentals",
        description: [
          "Creating a solid foundation for sustainable client growth",
        ],
      },
      {
        title: "Niche & Offer Architecture",
        description: [
          "Niche selection and validation - how to research",
          "A/B testing methodology for offers - 1-month outreach vs response ratio",
          "Making Killer offers & services",
        ],
      },
      {
        title: "Client Acquisition Systems",
        description: [
          "Inbound vs. outbound marketing strategies",
          "Building effective content funnels - social media funnel, website funnel.",
          "Prospect qualification framework - money, work, etc.",
          "Social media channels to get clients - LinkedIn, X, Instagram, YouTube, email.",
        ],
      },
      {
        title: "Social Media Optimization",
        description: [],
      },
      {
        title: "Freelancing Terms You Should Know",
        description: [],
      },
      {
        title: "Building Killer Portfolio",
        description: [],
      },
      {
        title: "Why Portfolio Matters",
        description: [],
      },
      {
        title: "Examples of the Best Portfolio",
        description: [],
      },
      {
        title: "How to Build - Tutorial to Create an Online Portfolio",
        description: [],
      },
      {
        title: "Free Tools",
        description: [],
      },
      {
        title: "Paid Tools",
        description: [],
      },
      {
        title: "Indian vs International Clients",
        description: [
          "Expand your reach globally while managing time zones and cultural differences",
        ],
      },
      {
        title: "Why Target International Markets",
        description: [],
      },
      {
        title: "Indian vs International Clients Pricing",
        description: [],
      },
      {
        title: "Managing Cross-Cultural Communication and Behaviors",
        description: [],
      },
      {
        title: "Working Western Timezones",
        description: [],
      },
      {
        title: "Managing International Client Expectations",
        description: [],
      },
    ],
  },
  {
    title: "Part 2: Closing Clients",
    modules: [
      {
        title: "High-Ticket Client Psychology",
        description: [
          "Master the art of understanding high-ticket client’s mind",
          "Clients buy experiences",
          "Clients want to pay you only if...",
          "Premium Client persona",
          "What High-Ticket (HT) clients want",
          "Building authority in high-value niches",
          "Creating premium service packages",
        ],
      },
      {
        title: "Talking to Clients on Zoom Call",
        description: [
          "How to make clients beg to work with you",
          "Meeting Preparation",
          "Research",
          "Rehearsal",
          "Confidence",
          "Setup",
          "Notes",
          "Listening",
        ],
      },
      {
        title: "Sales Psychology",
        description: ["Becoming Jordan Belfort on your sales call"],
      },
      {
        title: "Negotiation Mastery",
        description: [
          "How to negotiate and charge more than the client’s budget",
        ],
      },
    ],
  },
  {
    title: "Part 3: Scaling Business",
    modules: [
      {
        title: "Non-Negotiable Success Habits",
        description: [
          "Core practices that separate PRO freelancers from the average",
        ],
      },
      {
        title: "Team Building & Outsourcing",
        description: [
          "Scale your freelance business with the right team and systems",
        ],
      },
      {
        title: "Freelancing on Steroids with AI",
        description: [
          "Leverage AI to 10x your productivity and service delivery",
        ],
      },
      {
        title: "Transitioning from Freelancer to Agency",
        description: ["Interviews with agency founders"],
      },
    ],
  },
  {
    title: "Part 4: Bonus Resources",
    modules: [
      {
        title: "Templates, Scripts & Coupon Codes",
        description: [
          "Cold outreach templates and scripts",
          "AI prompts for content creation",
          "Sales call frameworks and scripts",
          "Recommended tools and software",
          "Leads list",
          "Cold Email scripts",
          "Messaging templates",
          "Content templates (Video editors/YouTube managers) - copy-paste",
          "Discount coupon codes for premium tools",
          "Never Split the Difference notes",
          "Other skills to learn",
        ],
      },
      {
        title: "FAQ: Your Burning Questions Answered",
        description: [
          "Share a form and ask questions and then make a video replying to them.",
        ],
      },
    ],
  },
  {
    title: "Part 5: Agency Owner Interviews",
    modules: [
      { title: "VATASAL", description: ["From Freelancer to 7-Figure Agency"] },
      {
        title: "Numan M.",
        description: ["Building Sustainable Agency Growth"],
      },
      { title: "Devratt", description: ["Agency Systems Mastery"] },
      { title: "James K.", description: ["Global Agency Expansion"] },
      { title: "Sarah Chen", description: ["Digital Agency Innovation"] },
    ],
  },
  {
    title: "Part 6: Freelancer Success Stories",
    modules: [
      { title: "Mark Thompson", description: ["Solo Freelancer"] },
      { title: "Lisa Rodriguez", description: ["Content Empire Builder"] },
      { title: "Alex Kumar", description: ["Tech Freelance Master"] },
      {
        title: "Michelle Zhang",
        description: ["International Freelance Success"],
      },
      { title: "David Foster", description: ["AI-Enhanced Freelancing"] },
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
    <div className="flex flex-wrap w-full gap-10 p-5">

      {parts.map((part, partIndex) => (
        <div key={partIndex} className="w-full md:w-1/2">
          <p className="text-white text-xl font-bold mb-4">{part.title}</p>
          <div className="flex flex-col gap-3">
            {part.modules.map((module, moduleIndex) => {
              const isOpen = openModules[`${partIndex}-${moduleIndex}`];
              return (
                <div key={moduleIndex} className="w-full">
                  <div
                    className="flex flex-col w-full bg-gray outline-1 outline-white/20 rounded-xl p-4 shadow-md cursor-pointer"
                    onClick={() => toggleModule(partIndex, moduleIndex)}
                  >
                    <div className="flex w-full items-center justify-between">
                      <p className="text-white flex items-center gap-2">
                        {isOpen ? <ChevronDown /> : <ChevronRight />}{" "}
                        {module.title}
                      </p>
                      <span className="text-secondary border border-secondary px-3 py-1 rounded-xl text-sm">
                        Module {moduleIndex + 1}
                      </span>
                    </div>

                    {/* Expanded Description */}
                    {isOpen && (
                      <div className="p-4 mt-2 text-white text-sm">
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
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Modules;

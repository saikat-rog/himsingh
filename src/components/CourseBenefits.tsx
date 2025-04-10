import { ArrowRightIcon } from "@heroicons/react/20/solid";

const CourseBenefits = () => {

  const benefitsData: Benefit[] = [
    {
      title: "😔 Stuck working with low-paying, soul-sucking, always-complaining clients?",
      description: "",
    },
    {
      title: "You want to find, manage and work with high paying foreign clients",
      description: "",
    },
    {
      title: "You want to gain time, location and financial independence",
      description: "",
    },
    {
      title: "You are from lower middle class and want to support your family",
      description: "",
    },
    {
      title: "You want to make money online with or without having a skill",
      description: "",
    },
    {
      title: "You are tired of low paying, soul sucking clients",
      description: "",
    },
    {
      title: "You can't afford a college education or don't want to go to college",
      description: "",
    },
    {
      title: "You want to travel, enjoy and work from anywhere in the world",
      description: "",
    },
    {
      title: "😫 Earning only ₹10,000-₹20,000 per month when you deserve ₹1-5 lakh monthly?",
      description: "",
    },
    {
      title: "👀 Watching others succeed with international clients while you're still figuring out where to start?",
      description: "",
    },
    {
      title: "🤔 Confused about how to approach international clients who pay in dollars?",
      description: "",
    },
    {
      title: "🤝 Nervous about speaking English with foreign clients on calls?",
      description: "",
    },
    {
      title: "📱 Sending messages to potential clients but getting ignored or rejected?",
      description: "",
    },
    {
      title: "💸 Unsure how much to charge for your services?",
      description: "",
    },
    {
      title: "🇮🇳 Unsure how to stand out when clients think \"Indian = cheap\"?",
      description: "",
    },
    {
      title: "🔎 Constantly searching for \"genuine\" online income methods but finding only scams and false promises?",
      description: "",
    },
    {
      title: "👨‍👩‍👧‍👦 Unable to provide the lifestyle your family dreams of despite your hard work?",
      description: "",
    },
    {
      title: "🏖 Ready to break free from local jobs and work from anywhere?",
      description: "",
    },
    {
      title: "🤯 Overwhelmed by cold messaging, portfolios, and setting rates?",
      description: "",
    },
    {
      title: "🗂️ In need of a step-by-step plan to land international clients?",
      description: "",
    },
  ];

  return (
    <div className="flex flex-col items-center p-3 bg-[url('.\assets\bg-grid.png')] bg-cover bg-center h-full bg-primary">
      {/* heading */}
      <h1 className="text-white my-15 text-center"><span className="text-secondary">Is This You? </span>Are You...</h1>

      {/* benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-10 lg:px-40">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            className="bg-gray2 rounded-xl p-6 outline-[1px] outline-white/20 text-white" style={{ outlineOffset: '-1px' }}
          >
            <div className="flex flex-col items-start">
              <div className="p-2 rounded-xl mb-4 outline-[1px] outline-white/20 bg-gray" style={{ outlineOffset: '-1px' }}>
                <img src="\assets\benifits.png" alt="" />
              </div>
              <p className="text-lg font-semibold">{benefit.title}</p>
            </div>
            <p className="">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="flex flex-row justify-center items-center bg-white rounded-full p-1.5 lg:p-2 mb-5 mt-15">
        <span className="text-primary bg-secondary px-2 py-2 rounded-full font-bold">
          <ArrowRightIcon className="w-5 lg:w-8 h-5 lg:h-8 text-primary font-bold" />
        </span>
        <div className="px-3 lg:px-6 text-xl font-semibold">Enroll Now</div>
      </button>
    </div>
  );
};

interface Benefit {
  title: string;
  description: string;
}



export default CourseBenefits;

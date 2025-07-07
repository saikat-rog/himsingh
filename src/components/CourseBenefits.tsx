import CTAButton from "@/utils/CTAButton";

const CourseBenefits = () => {

  const benefitsData: Benefit[] = [
    {
      title: "🔎 You've tried Fiverr or Upwork and didn't get results?",
      description: "",
    },
    {
      title: "😔 Stuck working with low-paying, soul-sucking, always-complaining clients?",
      description: "",
    },
    {
      title: "😟 Have no portfolio or experience and think that’s stopping you?",
      description: "",
    },
    {
      title: "🤑 Want to earn in USD but don’t know how to start?",
      description: "",
    },
    {
      title: "😫 Earning only ₹10K - ₹20K per month when you deserve ₹1-5 lakhs monthly?",
      description: "",
    },
    {
      title: "🤔 Unsure about how to approach international clients who pay in dollars?",
      description: "",
    },
    {
      title: "🤝 Nervous about speaking English with foreign clients on calls?",
      description: "",
    },
    {
      title: `🎓 Can't afford college or don’t want to go?`,
      description: "",
    },
    {
      title: `👨‍👩‍👧‍👦 Unable to live the lifestyle you always dreamt despite your hard work?`,
      description: "",
    },
    {
      title: "🏖 Ready to live a life of freedom and work from anywhere like me?",
      description: "",
    },
    {
      title: "🗂️ In need of a step-by-step plan to find international clients?",
      description: "",
    },
    {
      title: "🤷‍♂️ Watched others succeed but don’t know what you’re missing?",
      description: "",
    },
  ];

  return (
    <div className="flex flex-col items-center p-3 bg-[url('.\assets\bg-grid.png')] bg-cover bg-center h-full bg-primary">
      {/* heading */}
      <h1 className="text-white my-15 text-center"><span className="text-secondary">My courses </span>are for you, if...</h1>

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

      <p className="text-white text-center mt-10 mb-4">
        If you said YES to any of these, this course is made for YOU!
      </p>

      {/* Button */}
      <CTAButton text="Enroll Now"/>
      <p className="text-white">⚡Get Full Access</p>
    </div>
  );
};

interface Benefit {
  title: string;
  description: string;
}



export default CourseBenefits;

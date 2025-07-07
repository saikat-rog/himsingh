const PrivateCommunity = () => {
  interface Benefit {
    title: string;
    description: string;
  }

  const benefitsData: Benefit[] = [
    {
      title: "Feedback Sessions",
      description:
        "Weekly peer-to-peer reviews where you can get honest input on your portfolio, outreach, and pricing",
    },
    {
      title: "Collaboration Chats",
      description:
        "Channels to find accountability partners, offer services together, or subcontract to each other",
    },
    {
      title: "Weekly Check-ins",
      description:
        "Stay consistent with weekly goals, progress tracking, and support calls hosted by experienced members.",
    },
    {
      title: "24/7 Support & Ask-Me-Anything Zone",
      description:
        "Stuck at 2 AM? Drop your question in the chat and get help from mentors and students who've been there.",
    },
  ];

  return (
    <div className="flex flex-col items-center py-20 h-full bg-primary">
      {/* Heading */}
      <h1 className="text-secondary">Private Community</h1>
      <p className="w-4/5 lg:w-3/5 justify-center text-center text-white">
        Join a vibrant, members-only community of like-minded Freelancers. Share
        your progress, get feedback, and stay motivated with the support of
        others on the same journey.
      </p>
      <img src="\assets\privatecommunity.png" alt="" className="my-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-5 text-white max-w-7xl">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            className="bg-gray2 rounded-xl outline-1 outline-white/20 p-6 space-y-5"
          >
            <div className="flex flex-row gap-2 items-center">
              <div className="p-2 rounded-xl border-1 border-gray-700">
                <img src="\assets\benifits.png" alt="" />
              </div>
              <p className="text-lg font-semibold">{benefit.title}</p>
            </div>
            <p className="">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PrivateCommunity;

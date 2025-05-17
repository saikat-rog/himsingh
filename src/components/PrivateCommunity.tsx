const PrivateCommunity = () => {

  interface Benefit {
    title: string;
    description: string;
  }

  const benefitsData: Benefit[] = [
    {
      title: "You want to make money online with or without having a skill",
      description: "",
    },
    {
      title: "You are tired of low paying, soul sucking clients",
      description: "",
    },
    {
      title:
        "You can't afford a college education or don't want to go to college",
      description: "",
    },
    {
      title: "You want to travel, enjoy and work from anywhere in the world",
      description: "",
    },
  ];

  return (
    <div className="flex flex-col items-center py-20 h-full bg-primary">

      {/* Heading */}
      <h1 className="text-secondary">Private Community</h1>
      <p className="w-4/5 lg:w-3/5 justify-center text-center text-white">
        Join a vibrant, members-only community of like-minded designers. Share
        your progress, get feedback, and stay motivated with the support of
        others on the same journey.
      </p>
      <img src="\assets\privatecommunity.png" alt="" className="my-10"/>

      <h1 className="text-secondary pb-10 md:pb-20 text-center">Features: Gigs | Collaboration | Feedback | Accountability Partners</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-5 text-white">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            className="bg-gray2 rounded-xl outline-1 outline-white/20 p-6"
          >
            <div className="flex flex-col items-start">
              <div className="p-2 rounded-xl border-1 border-gray-700 mb-4">
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

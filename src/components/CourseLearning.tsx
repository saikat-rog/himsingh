const learning = [
  {
    img: "/assets/pay.svg",
    text: "Find International Clients Consistently: Master proven outreach strategies on LinkedIn, Instagram, and Facebook to land high-paying clients who value your work.",
    align: "start",
  },
  {
    img: "/assets/scholar.svg",
    text: "Get paid in Dollars: Implement psychological pricing strategies that position you for $1000-$5000 monthly income instead of ₹10-20K.",
    align: "end",
  },
  {
    img: "/assets/headset.svg",
    text: "Build a Personal Brand: Build an impressive online presence that attracts clients even if you have zero experience and following right now.",
    align: "start",
  },
  {
    img: "/assets/headset.svg",
    text: "Close Deals on Zoom Calls: Master the exact sales psychology that turns nervous conversations into confident client acquisitions.",
    align: "start",
  },
  {
    img: "/assets/headset.svg",
    text: "Handle Any Client Objection: Respond effectively to \"you're too expensive,\" \"I'll think about it,\" or \"why should I hire someone from India?\"",
    align: "start",
  },
  {
    img: "/assets/headset.svg",
    text: "Scale Beyond Freelancing: Learn the exact timeline and strategy to transition from solo freelancer to agency owner within 2 years.",
    align: "end",
  },
];


const CourseLearning = () => {
  return (
    <div className="flex flex-col items-center w-full py-10 lg:py-20 bg-primary">
      {/* Heading */}
      <h3 className="bg-secondary p-2 my-5">Course Learning</h3>
      <p className="text-white">
        No Fluff. All Action: By The End of This Course, You'll Be Able To…
      </p>
      <div className="lg:block w-6/7 my-10 space-y-10">
        {learning.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:items-start" : "md:items-end"
            } justify-center items-center`}
          >
            <div className="flex flex-row rounded-xl shadow-lg sm:px-5 sm:py-5 w-full p-5 md:w-2/3 items-center space-x-5 bg-white">
              <img src={item.img} alt="" />
              <div className="text-[15px] lg:text-[20px] font-bold">
                {item.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CourseLearning;

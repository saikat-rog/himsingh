import { ArrowRightIcon } from "@heroicons/react/20/solid";

const achievements = [
  {
    content: "Got into Delhi University and then dropped out at 20",
  },
  {
    content: "Built a successful freelancing business at 22",
  },
  {
    content: "Worked with 40+ international and 15+ Indian clients",
  },
  {
    content: "Made over 60 Lakhs in last 4 years of freelancing",
  },
  {
    content: "Bought my first home in New Delhi at 25",
  },
  {
    content: "Taught freelancing at multiple NGOs, institutes & online",
  },
  {
    content: "Built a personal brand & multiple Income streams at 26",
  },
];

const Achievements = () => {
  return (
    <div className="bg-secondary h-full py-10">
      <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 items-center">

        {/* Left part */}
        <div className="w-4/5 lg:w-1/2 flex justify-center mx-auto">
          <div className="bg-primary rounded-xl w-[600px] h-[500px]"></div>
        </div>

        {/* Right part */}
        <div className="w-6/7 lg:w-1/2 mx-auto space-y-10">
          <h1>
            This is what I have achieved <br />
            so far:
          </h1>
          {/* List */}
          <div className="flex flex-col items-start space-y-1">
            <ul className="space-y-5">
              {achievements.map((item, index) => (
                <li key={index} className="flex items-center space-x-5">

                  <div className="bg-primary rounded-full px-3 py-2 lg:p-2">
                    <img
                      src="src\assets\tick2.png"
                      alt="Check"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="text-black text-[20px] font-semibold">{item.content}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <button className="flex flex-row justify-center items-center bg-primary rounded-full p-2">
            <span className="text-primary bg-white px-2 py-2 rounded-full font-bold">
              <ArrowRightIcon className="w-5 h-5 text-primary font-bold" />
            </span>
            <span className="px-5 text-white">Enroll Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Achievements;

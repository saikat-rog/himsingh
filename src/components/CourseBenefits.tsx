import { ArrowRightIcon } from "@heroicons/react/20/solid";

const CourseBenefits = () => {
  return (
    <div className="flex flex-col items-center p-3 bg-[url('.\assets\bg-grid.png')] bg-cover bg-center h-full bg-primary">
      {/* heading */}
      <div className="flex flex-row items-center justify-center my-15 gap-2">
        <h1 className="text-secondary">My courses</h1>
        <h1 className="text-white">are for you, if…</h1>
      </div>

      {/* benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            className="bg-gray2 rounded-xl outline-1 outline-gray-700 p-6"
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

const benefitsData: Benefit[] = [
  {
    title: "You hate working for someone and want to be your own boss",
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
    title:
      "You can't afford a college education or don't want to go to college",
    description: "",
  },
  {
    title: "You want to travel, enjoy and work from anywhere in the world",
    description: "",
  },
];

export default CourseBenefits;

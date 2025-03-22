import { ArrowRightIcon } from "@heroicons/react/20/solid";

const features = [
    {
      content: "Beginners who don't know anything about freelancing",
    },
    {
      content: "Freelancers who want to land high paying clients.",
    },
    {
      content: "Students who want to earn money while in school or college.",
    },
    {
      content: "People with no skills and want to start drop servicing business.",
    },
    {
      content: "Freelancers who want to transition from freelancing to agency.",
    },
    {
      content: "Anyone wanting to make extra money working 2-3 hours everyday.",
    },
  ];
  
const Students  = () => {
    return <div>
        {/* Heading2 */}
      <div className="my-20 flex flex-col items-center">
        <h1 className="text-secondary">197+ Students</h1>
        <h1 className="text-white">Have gone from Zero to Pro</h1>
      </div>

      <div className="flex flex-row items-center space-x-4">
        {/* Left part */}
        <div className="w-1/2 mx-auto">
          <img src="src\assets\specialfeature.png" alt="" />
        </div>

        {/* Right part */}
        <div className="w-1/2 mx-auto space-y-15">

          {/* List */}
          <div className="flex flex-col items-start space-y-1">
            <ul className="space-y-5">
              {features.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <img
                    src="src\assets\tick.png" // Replace with your image path
                    alt="Check"
                    className="w-5 h-5"
                  />
                  <span>{item.content}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <button className="flex flex-row justify-center items-center bg-white rounded-full p-2 space-x-3">
            <span className="text-primary bg-secondary px-2 py-2 rounded-full font-bold">
              <ArrowRightIcon className="w-6 h-6 text-primary font-bold" />
            </span>
            <span className="px-2">Enroll Now</span>
          </button>
        </div>
      </div>
    </div>
};
export default Students;
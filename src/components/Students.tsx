import CTAButton from "@/utils/CTAButton";

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
    return <div className="flex flex-col justify-center text-center items-center h-full">
        {/* Heading2 */}
      <div className="my-10 lg:my-20 flex flex-col items-center">
        <img src="/assets/students.png" alt="" className="w-100 lg:w-150" />
        <h2 className="text-secondary">197+ Students</h2>
        <h2 className="text-white">Have gone from Zero to Pro</h2>
        <p className="text-gray-100 mt-10">Who can enroll in my courses?</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center space-y-5 lg:space-x-4">
        {/* Left part */}
        <div className="w-2/3 lg:w-1/2 mx-auto">
          <img src="\assets\specialfeature.png" alt="" />
        </div>

        {/* Right part */}
        <div className="w-full px-6 lg:w-1/2 mx-auto space-y-15">

          {/* List */}
          <div className="flex flex-col items-start text-start space-y-1">
            <ul className="space-y-5">
              {features.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <img
                    src="\assets\tick.png" // Replace with your image path
                    alt="Check"
                    className="w-5 h-5"
                  />
                  <span>{item.content}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <CTAButton />
          <p className="text-white">⚡Get Full Access</p>
        </div>
      </div>
    </div>
};
export default Students;
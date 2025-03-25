import { ArrowRightIcon } from "@heroicons/react/20/solid";

const Welcome = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full px-4 lg:px-16 py-5 lg:py-20 space-y-10 lg:space-y-0">
      {/* Left part */}
      <div className="w-full lg:w-2/3 flex justify-center items-center">
        <div className="relative w-full max-w-lg h-72 lg:h-96 rounded-lg overflow-hidden">
          {/* Top Purple Box (Overlay) */}
          <div className="bg-purple-700 absolute top-1 w-full h-[90%] rounded-xl shadow-lg"></div>
          {/* Bottom White Box */}
          <div className="bg-white w-[95%] h-[88%] m-auto absolute inset-0 rounded-xl"></div>
        </div>
      </div>

      {/* Right part */}
      <div className="w-full lg:w-1/2 flex flex-col text-center items-center space-y-5 px-4">
        <div className="text-secondary text-4xl font-extrabold">
          Become a world-class freelancer with Lancrr
        </div>
        <p className="text-lg lg:text-base md:text-lg text-gray-700">
          I will teach you how pro freelancers find and close high-ticket
          clients that pay $1000-$5000 per month consistently, all through
          social media without using paid ads, Upwork, or Fiverr.
        </p>

        {/* Button */}
      <button className="flex flex-row justify-center items-center bg-white rounded-full p-1.5 lg:p-2 mb-5">
            <span className="text-primary bg-secondary px-2 py-2 rounded-full font-bold">
              <ArrowRightIcon className="w-5 lg:w-8 h-5 lg:h-8 text-primary font-bold" />
            </span>
            <div className="px-3 lg:px-6 text-xl font-semibold">Enroll Now</div>
          </button>
      </div>
    </div>
  );
};

export default Welcome;

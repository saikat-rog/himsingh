import { ArrowRightIcon } from "@heroicons/react/20/solid";

const Welcome = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full px-4 lg:px-16 py-5 space-y-10 lg:space-y-0 relative">
      {/* Left part */}
      <div className="w-full lg:w-2/3 flex justify-center items-center p-3">
        <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden">
          {/* Top Purple Box (Overlay) */}
          <div className="bg-purple-700 absolute top-1 w-full h-[90%] rounded-xl shadow-lg"></div>
          {/* Bottom White Box */}
          <div className="bg-white w-[95%] h-[88%] m-auto absolute inset-0 rounded-xl"></div>
        </div>
      </div>

      {/* Right part */}
      <div className="w-full lg:w-1/3 flex flex-col text-center items-center space-y-5 px-4">
        <h1 className="text-secondary text-4xl">
          Master International Freelancing
        </h1>
        <p className="text-lg lg:text-base md:text-lg text-white">
          Join 197+ Indians Who've Escaped ₹20K Local Jobs and Built Up to ₹5
          Lakh/Month International Success
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

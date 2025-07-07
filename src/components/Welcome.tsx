import CTAButton from "@/utils/CTAButton";

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
          Become a world-class freelancer with Lancrr
        </h1>
        <p className="text-lg lg:text-base md:text-lg text-white">
          I will teach you how pro freelancers find and close high-ticket clients that pay $1000-$5000 per month consistently, all through social media without using paid ads, Upwork, or Fiverr.
        </p>

        {/* Button */}
        <CTAButton text="Enroll Now" />
        <p className="text-white">⚡Get Full Access</p>
      </div>
    </div>
  );
};

export default Welcome;

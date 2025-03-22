import { ArrowRightIcon } from "@heroicons/react/20/solid";

const Welcome = () => {
    return <div>
        <div className="flex flex-row justify-center w-full pt-20">
        {/* Left part */}
        <div className="w-2/3 flex flex-col justify-center items-center">
          <div className="relative w-4/5 h-[400px] rounded-lg overflow-hidden">
            {/* Top White Box (Overlay) */}
            <div className="bg-purple-700 absolute top-1 w-[790px] h-[360px] rounded-xl shadow-lg"></div>
            {/* Bottom Purple Box */}
            <div className="bg-white w-[780px] h-[353px] m-5 rounded-xl"></div>
          </div>
        </div>

        {/* Right part */}
        <div className="w-1/3 flex flex-col justify-center text-center items-center space-y-5">
          <h1 className="text-secondary">
            Become a world class freelancer with Lancrr
          </h1>
          <p>
            I will teach you how pro freelancers find and close high ticket
            clients that pay $1000-$5000 per month consistently all through
            social media without using paid ads, upwork or fiverr.
          </p>
          <button className="flex flex-row justify-center items-center bg-white rounded-full p-2 space-x-3">
            <span className="text-primary bg-secondary px-2 py-2 rounded-full font-bold">
              <ArrowRightIcon className="w-6 h-6 text-primary font-bold" />
            </span>
            <span className="px-2">Learn More</span>
          </button>
        </div>
      </div>
    </div>
};
export default Welcome;
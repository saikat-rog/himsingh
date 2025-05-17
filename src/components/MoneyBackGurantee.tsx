import { ArrowRightIcon } from "@heroicons/react/20/solid";

const MoneyBackGurantee = () => {
    return (
      <div className="flex flex-col justify-center items-center h-full bg-primary px-6">
        
        {/* Money Back Gurantee */}
        <div className="flex flex-col md:flex-row text-center md:text-left justify-center items-center space-y-6 md:space-y-0 md:space-x-10 py-16 w-full max-w-lg md:max-w-2xl lg:max-w-4xl">
          <img
            src="/assets/moneybackgurantee.png"
            alt="Money Back Guarantee"
            className="w-24 md:w-32 lg:w-40"
          />
          <h3 className="text-lg md:text-xl font-semibold text-white">
            If you don't find any value in the course content, I will return your
            money.
          </h3>
        </div>

        {/* Still have questions */}
        <div
          className="text-center text-white flex flex-col gap-5 items-center w-full lg:w-3/5 shadow rounded-xl p-10 m-auto"
          style={{ outlineOffset: "-1px" }}
        >
          <img src="/assets/havequestions.png" alt="Still have questions?" />
          <h1 className="text-2xl font-bold">Still have questions?</h1>
          <p className="text-neutral-400">
            Can&apos;t find the answer you&apos;re looking for? Please chat to our
            friendly team.
          </p>
          {/* Button */}
          <button className="flex flex-row justify-center items-center bg-white rounded-full p-1.5 lg:p-2 mb-5">
            <span className="text-primary bg-secondary px-2 py-2 rounded-full font-bold">
              <ArrowRightIcon className="w-5 lg:w-8 h-5 lg:h-8 text-primary font-bold" />
            </span>
            <div className=" text-black px-3 lg:px-6 text-xl font-semibold">
              Get in touch
            </div>
          </button>
        </div>
      </div>
    );
  };
  
  export default MoneyBackGurantee;
  
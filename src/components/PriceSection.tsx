const PricingSection = () => {
  return (
    <div
      id="courses"
      className="w-full flex flex-col items-center gap-5 bg-primary py-10"
    >
      <div className="w-full flex flex-col justify-center text-center px-5 items-center gap-2">
        <h3 className="text-secondary">Invest in your future</h3>
        <h1 className="text-white text-center mt-5">
          Ready to Master Freelancing?
        </h1>
        <p className="text-neutral-400 text-center mt-2">
          Start with our Freelance course or dive into the Lancrr All Access
          program.
        </p>
      </div>

      {/* Price boxes */}
      <div className="w-[500px] lg:w-[800px] justify-center items-center ">
        <div className="relative lg:w-full h-140 lg:h-170 rounded-lg ">
          <img
            src="/assets/soldout.png"
            alt=""
            className="absolute top-15 right-10 w-70"
          />
          {/* Top Purple Box (Overlay) */}
          <div className="bg-gray flex flex-col items-center justify-between p-5 absolute w-[300px] md:w[250px] lg:w-[350px] h-[90%] top-7 lg:top-12 left-60 lg:left-105  rounded-xl shadow-lg outline outlien-1 outline-secondary text-white opacity-30">
            {/* Title */}
            <h3 className="text-secondary">Web Career Ignite</h3>

            {/* Price */}
            <h1 className="text-3xl font-bold mt-2">$930</h1>

            {/* Description */}
            <p className="text-center text-sm mt-2 text-neutral-400">
              Master Figma, create stunning & responsive websites, and
              collaborate like a pro.
            </p>

            {/* Includes Section */}
            <div className="w-full flex flex-col items-start justify-start gap-2 mt-4">
              <p>Includes:</p>

              <p className="flex items-center gap-2">
                <span>
                  <img src="/assets/tick.svg" alt="" className="h-5" />
                </span>
                12-month mentoring & support
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <img src="/assets/tick.svg" alt="" className="h-5" />
                </span>
                12-month office hours with Ran Segall
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <img src="/assets/tick.svg" alt="" className="h-5" />
                </span>
                4 private 30-min calls with our mentors
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <img src="/assets/tick.svg" alt="" className="h-5" />
                </span>
                Access to private Flux Community
              </p>
            </div>

            {/* CTA Button */}
            <button className="mt-5 w-full bg-secondary text-gray px-5 py-2 rounded-lg font-semibold hover:bg-opacity-80 transition">
              Enroll Now
            </button>
          </div>

          {/* Bottom White Box */}
          <div className="bg-gray flex flex-col items-center text-white justify-between p-4 w-[250px] sm:w-[350px] md:w[250px] lg:w-[350px] h-[98%] bottom-0 right-25 sm:right-40 lg:right-70 m-auto absolute inset-0 rounded-xl outline outlien-1 outline-secondary hover:scale-108 transition-transform duration-600 ease-in-out shadow-2xl hover:shadow-secondary">
            {/* Title */}
            <h3 className="text-secondary text-center">
              Figma for Web Designers 2.0
            </h3>

            {/* Price */}
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold mt-2">$24</h1>
              <div className="w-full border-t border-gray-200 my-2" />
              <h1 className="text-3xl font-bold">₹1990</h1>
            </div>

            {/* Description */}
            <p className="text-center text-sm mt-2 text-neutral-400">
              Master Figma, create stunning & responsive websites, and
              collaborate like a pro.
            </p>

            {/* Includes Section */}
            <div className="w-full flex flex-col items-start justify-start gap-2 mt-4">
              <p>Includes:</p>
              <p className="flex items-center gap-2">
                <span>
                  <img src="/assets/tick.svg" alt="" className="h-5" />
                </span>
                12-month mentoring & support
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <img src="/assets/tick.svg" alt="" className="h-5" />
                </span>
                12-month office hours with Ran Segall
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <img src="/assets/tick.svg" alt="" className="h-5" />
                </span>
                4 private 30-min calls with our mentors
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <img src="/assets/tick.svg" alt="" className="h-5" />
                </span>
                Access to private Flux Community
              </p>
            </div>

            {/* CTA Button */}
            <button className="mt-5 w-full bg-secondary text-gray px-5 py-2 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_20px_4px_rgba(255,59,48,0.6)]">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

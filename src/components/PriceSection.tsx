const PricingSection = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 bg-primary py-10">
      <div className="w-full flex flex-col justify-center text-center px-5 items-center gap-2">
        <h3 className="text-secondary">
          Invest in your future
        </h3>
        <h1 className="text-white text-center mt-5">
          Ready to Master Freelance?
        </h1>
        <p>Start with our Freelance course or dive into the Lancrr All Access program.</p>
      </div>
      <div className="w-full justify-center items-center">
        <div className="relative lg:w-full h-90 lg:h-130 rounded-lg overflow-hidden">
          {/* Top Purple Box (Overlay) */}
          <div className="bg-gray absolute w-[50%] lg:w-[25%] h-[85%] top-7 lg:top-12 left-45 lg:left-180  rounded-xl shadow-lg outline outlien-1 outline-secondary"></div>
          {/* Bottom White Box */}
          <div className="bg-gray w-[50%] lg:w-[25%] h-[95%] bottom-0 right-40 lg:right-70 m-auto absolute inset-0 rounded-xl outline outlien-1 outline-secondary"></div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

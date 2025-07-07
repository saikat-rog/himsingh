import CTAButton from "@/utils/CTAButton";

const MoneyBackGurantee = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-primary px-6">
      {/* Money Back Gurantee */}
      <div className="flex flex-col md:flex-row text-center md:text-left justify-center items-center space-y-6 md:space-y-0 md:space-x-10 py-16 w-full max-w-lg md:max-w-2xl lg:max-w-5xl">
        <img
          src="/assets/moneybackgurantee.png"
          alt="Money Back Guarantee"
          className="w-24 md:w-32 lg:w-40"
        />
        <h3 className="text-lg md:text-xl text-start text-white">
          You&apos;re 100% protected by our <span className="text-secondary">14-Day Money-Back Guarantee. </span>If you
          join and don&apos;t find value — I&apos;ll refund you. No hard feelings, no
          questions asked.
        </h3>
      </div>

      {/* Still have questions */}
      <div
        className="text-center text-white flex flex-col gap-5 items-center w-full lg:w-3/5 shadow rounded-xl p-10 m-auto"
        style={{ outlineOffset: "-1px" }}
      >
        <img src="/assets/havequestions.png" alt="Still have questions?" />
        <h1 className="text-2xl font-bold">This Isn&apos;t Just Another Course — It&apos;s a Blueprint That Works.</h1>
        <p className="text-neutral-400">
          Join 2500+ Students who&apos;ve escaped ₹20K/month tiresome job and now earn up to ₹5 Lakh/month internationally.
        </p>

        {/* Button */}
        <CTAButton text="Enroll Now" />
        <p>⚡Get Full Access</p>
      </div>
    </div>
  );
};

export default MoneyBackGurantee;

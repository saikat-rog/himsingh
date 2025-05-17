const MeetYourInstructor = () => {
  return (
    <div className="flex flex-col items-center py-5 bg-gray px-6">
      {/* Heading */}
      <h1 className="text-white text-3xl font-bold my-10 lg:my-20">
        Meet Your Instructor 👋
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
        {/* Left part */}
        <div className="w-full md:w-1/2 text-left">
          {/* <div className="text-secondary text-[20px] font-semibold">
            Freelancing coach
          </div> */}
          <h1 className="text-secondary mt-2">Him Singh</h1>
          <p className="mt-4 leading-relaxed text-white">
            Hi, I'm Himanshu. I've been freelancing for 5 years, transforming
            from living in someone else's garage to owning my home in New Delhi.
            I built a business that earned over 60 Lakhs working with 40+
            international clients. My YouTube channel (49K subscribers) and
            courses have helped 1,500+ students launch successful freelancing
            careers—many starting with just a phone. Through my authentic,
            Hindi-language teaching, I've proven that anyone can access
            international opportunities regardless of their background. My
            mission is simple: to help you transform your life through
            freelancing, just like I did.
          </p>
        </div>

        {/* Right part Him's Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-secondary px-4 pt-4 rounded-xl shadow-lg">
            <img
              src="/assets/himbhaie.png"
              alt="Him Singh"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetYourInstructor;

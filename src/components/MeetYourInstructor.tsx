const MeetYourInstructor = () => {
  return (
    <div className="flex flex-col items-center py-5 bg-gray px-6">

      {/* Heading */}
      <h1 className="text-white text-3xl font-bold my-10 lg:my-20">
        Meet Your Instructor
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">

        {/* Left part */}
        <div className="w-full md:w-1/2 text-left">
          <div className="text-secondary text-[20px] font-semibold">
            Freelancing coach
          </div>
          <h1 className="text-white mt-2">Him Singh</h1>
          <p className="text-gray mt-4 leading-relaxed text-white">
            I have been freelancing for the past 5 years, and teaching is my
            passion. I love transforming lives more than making money. I have
            helped myself come out of poverty, supported my family, and now my
            mission is to help you do the same through freelancing.
            <br />
            <br />
            From living in someone else’s garage to owning my own 2BHK home,
            from getting my school fees paid by an NGO to donating Rs. 1 lakh to
            the same NGO — all within 4 years of starting freelancing.
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

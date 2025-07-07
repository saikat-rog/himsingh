const MeetYourInstructor = () => {
  return (
    <div className="flex flex-col items-center py-20 bg-gray px-6">
      {/* Heading */}
      <h1 className="text-white text-3xl font-bold mb-10 lg:mb-20 flex items-center gap-3 flex-wrap">
        Why I built
        <img
          src="/assets/logo.png"
          alt=""
          className="w-50 inline-block"
        />
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-10 max-w-7xl w-full">
        {/* Left part */}
        <div className="w-full md:w-3/4 text-left">
          {/* <div className="text-secondary text-[20px] font-semibold">
            Freelancing coach
          </div> */}
          <h1 className="text-secondary font-bold mt-2">
            A Message from Him Singh:
          </h1>
          <p className="mt-4 leading-relaxed text-white text-justify">
            I didn&apos;t come from a rich background. I didn&apos;t go to a top
            college. I didn&apos;t even have a laptop when I started. Just a
            phone, shaky English, and a burning desire to make money online. I
            failed a lot. Most courses were full of fluff, and I had no mentor.
            I lived in a garage, watched my parents stress over bills, and knew
            something had to change. I tried everything. YouTube videos. Free
            webinars. Courses that promised the world but gave no real answers.
            I wasted time, energy, and belief. Fast forward to today, In just 5
            years. I built a ₹60 Lakh business, worked with 40+ international
            clients with the help of freelancing. I created a YouTube channel
            that now has 50K+ subscribers. And more importantly — In the past 2
            years, I&apos;ve helped 2,500+ students from small towns and big
            dreams get started, many with just their phones. I created this
            course because I know what it feels like to be stuck — knowing
            you're capable of more but not having a clear path and mentor. I
            built Lancrr to give you the exact blueprint I wish I had — one that
            cuts through the noise and shows real, practical steps you can
            follow even if you're starting from zero. This course is not a
            theory. It&apos;s a battle-tested blueprint. It's built on failures
            I turned into lessons, and systems that actually work — even if you
            are starting from zero.
            <br />
            <br />
            <span className="text-secondary">
              You don&apos;t need expensive mentorships, perfect English, or
              spend Lakhs on a fancy degree.{" "}
            </span>
            <br />
            <span className="text-secondary">
              You just need a laptop, Internet, bulletproof plan, and the right
              mentor.
            </span>
            <br />
            <br />
            My philosophy is simple:{" "}
            <span className="text-secondary">
              “Education is cheap. Degrees are expensive.”
            </span>
            <br />
            <br />
            Lancrr is not just another course. It&apos;s a step-by-step system
            built from real struggles. No fluff. No BS. Just what works — even
            if you don&apos;t speak fluent English or own a laptop. Lancrr gives
            you the real education — the kind that changes your life, income,
            confidence, and future.
            <br />
            <br />
            <span className="font-semibold">
              I don&apos;t just teach theory. I will show you what actually
              works — the mindset, the same systems I used to go from
              ₹15,000/month to building a freelancing business with 40+ global
              clients and 2 lakh+ monthly income all from the comfort of your
              home.
            </span>
            <br />
            <br />
            <span className="text-secondary">
              If you're ready, I&apos;ll walk with you — every step of the way.
            </span>
          </p>
        </div>

        {/* Right part Him's Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
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

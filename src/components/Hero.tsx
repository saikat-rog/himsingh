import Cards from "./Card";
import Welcome from "./Welcome";
import Companies from "./Companies";

const cardData = [
  {
    image: "/assets/welcome1.svg",
    content:
      "Think ₹20K is good money? I'll break your limiting beliefs and show you how to earn 5-10X more with international clients who value your work.",
  },
  {
    image: "/assets/welcome2.svg",
    content:
      "No time to learn new skills? Use my strategies to find clients, outsource the work, and still make profit.",
  },
  {
    image: "/assets/welcome3.svg",
    content:
      "Can't afford expensive courses? This blueprint costs less than what your first international client will pay you for a single day's work.",
  },
];

const Hero = () => {
  return (
    <div className="flex flex-col space-y-[10px] items-center relative">
      <div className=" p-3 pb-15 bg-[url('/assets/bg-grid.png')] bg-center bg-primary bg-cover relative w-full">
        
        {/* Branding */}
        <div className="flex flex-row justify-item-start">
          <img src="/assets/logo.png" alt="" className="w-50" />
        </div>

        {/* Welcome */}
        <Welcome />
      </div>

      {/* Cards */}
      <div className="w-full">
        <Cards cardData={cardData} />
      </div>

      {/* Companies */}
      <Companies />
    </div>
  );
};

export default Hero;

import Cards from "./Card";
import Welcome from "./Welcome";
import Companies from "./Companies";

const cardData = [
  {
    image: "/assets/welcome1.svg",
    content:
      "Don’t have skills? I will teach you how to find clients and outsource your work to someone and chill",
  },
  {
    image: "/assets/welcome2.svg",
    content:
      "You are 14? No problem, your age doesn't matter, your work and dedication is the only thing that matters",
  },
  {
    image: "/assets/welcome3.svg",
    content:
      "Hate to study? F#@k college, no client ever asked me about my qualifications or degree",
  },
];

const Hero = () => {
  return (
    <div className="flex flex-col space-y-[700px] lg:space-y-30 items-center">
      <div className=" p-3 pb- 15 lg:pb-30 bg-[url('/assets/bg-grid.png')] bg-center bg-primary bg-cover">
        
        {/* Branding */}
        <div className="flex flex-row justify-start w-full">
          <img src="/assets/logo.png" alt="" className="w-30 lg:w-50" />
        </div>

        {/* Welcome */}
        <Welcome />
        
      </div>

      {/* Cards */}
      <div className="hidden lg:block absolute top-180 w-full">
        <Cards cardData={cardData} />
      </div>

      <div className="absolute top-180 lg:hidden w-full justify-center">
        <div className="w-full max-w-5xl px-5">
          <Cards cardData={cardData} />
        </div>
      </div>

      {/* Companies */}
      <Companies />
    </div>
  );
};

export default Hero;

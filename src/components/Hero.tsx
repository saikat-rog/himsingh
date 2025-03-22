import Cards from "./Card";
import Welcome from "./Welcome";
import Companies from "./Companies";

const cardData = [
  {
    image: "src/assets/fiftyinfive.png",
    content:
      "Don’t have skills? I will teach you how to find clients and outsource your work to someone and chill",
  },
  {
    image: "src/assets/growthplaybook.png",
    content:
      "You are 14? No problem, your age doesn't matter, your work and dedication is the only thing that matters",
  },
  {
    image: "src/assets/creatorstartup.png",
    content:
      "Hate to study? F#@k college, no client ever asked me about my qualifications or degree",
  },
];

const   Hero = () => {
  return (
    <div className="flex flex-col items-center h-full">
      <div className=" p-3 bg-[url('.\assets\bg-grid.png')] bg-center h-screen bg-primary bg-cover">
        {/* Branding */}
        <div className="flex flex-row justify-start w-full">
          <div className="text-secondary text-[30px] font-bold">him singh</div>
        </div>

        {/* Welcome */}
        <Welcome />

        {/* Cards */}
        <Cards cardData={cardData}/>
      </div>

      {/* Companies */}
      <Companies />
    </div>
  );
};

export default Hero;

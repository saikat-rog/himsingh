import Cards from "./Card";
import Welcome from "./Welcome";
import Companies from "./Companies";

const cardData = [
  {
    image: "/assets/welcome1.svg",
    content:
      "Not confident in English? No problem! I'll give you the exact scripts and templates to impress international clients even with basic English skills.",
  },
  {
    image: "/assets/welcome2.svg",
    content:
      "No portfolio? No experience? I'll show you how to build an impressive portfolio and position yourself as an expert from day one.",
  },
  {
    image: "/assets/welcome3.svg",
    content:
      "Only have a phone, no laptop? You can start implementing these strategies right away—no expensive equipment needed.",
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

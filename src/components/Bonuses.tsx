import Card2 from "./Card2";

const cardData = [
  {
    title: "Templates",
    content:
      "You will have lifetime access to the course so that even if you enrol now at discounted prices you can still learn later at your own pace. Even if the course prices increases in the future.",
  },
  {
    title: "Scripts",
    content:
      "You get a private community of other course members and top freelancers to learn from. Become friends, learn, earn and grow together. On demand monthly live QnA calls with me.",
  },
  {
    title: "Live",
    content:
      "You get lifetime future updates at no extra cost, even if masterclass prices are raised. I update the course every 6-8 months and add new useful resources for you.",
  },
  {
    title: "Templates",
    content:
      "You will have lifetime access to the course so that even if you enrol now at discounted prices you can still learn later at your own pace. Even if the course prices increases in the future.",
  },
  {
    title: "Scripts",
    content:
      "You get a private community of other course members and top freelancers to learn from. Become friends, learn, earn and grow together. On demand monthly live QnA calls with me.",
  },
  {
    title: "Live",
    content:
      "You get lifetime future updates at no extra cost, even if masterclass prices are raised. I update the course every 6-8 months and add new useful resources for you.",
  },
];

const Bonuses = () => {
  return (
    <div className="flex flex-col items-center p-3 bg-[url('.\assets\bg-grid.png')] bg-cover bg-center h-full bg-primary">
      
      {/* Heading */}
      <div className="flex flex-col text-center items-center space-y-6 py-8">
        <div className="bg-secondary px-4 py-1">
          <h3>Bonuses</h3>
        </div>
        <p className="text-white">
          That makes “PRO FREELANCER BUNDLE” a must have toolkit for freelancers
        </p>
      </div>

      {/* Cards */}
      <Card2 cardData={cardData} price={true} />
    </div>
  );
};
export default Bonuses;

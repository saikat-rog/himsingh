import Card2 from "./Card2";
import Students from "./Students";

const cardData = [
  {
    title: "Lifetime access",
    content:
      "You will have lifetime access to the course so that even if you enrol now at discounted prices you can still learn later at your own pace. Even if the course prices increases in the future.",
  },
  {
    title: "Support group",
    content:
      "You get a private community of other course members and top freelancers to learn from. Become friends, learn, earn and grow together. On demand monthly live QnA calls with me.",
  },
  {
    title: "Future updates",
    content:
      "You get lifetime future updates at no extra cost, even if masterclass prices are raised. I update the course every 6-8 months and add new useful resources for you.",
  },
];

const SpecialFeatures = () => {
  return (
    <div className="flex flex-col items-center p-3 bg-[url('.\assets\bg-grid.png')] bg-cover bg-center h-full bg-primary">
      
      {/* Heading */}
      <div className="flex flex-col items-start space-y-1">
        <div className="flex flex-row items-center space-x-4 mt-10 mb-5">
          <div className="bg-secondary px-4 py-1">
            <h3>Special</h3>
          </div>
          <h3 className="text-white">Features</h3>
        </div>
        <p className="w-[250px] lg:w-[300px]">
          That makes “PRO FREELANCER BUNDLE” a must have toolkit for freelancers
        </p>
      </div>

      {/* Cards */}
      <Card2 cardData={cardData} />

      {/* Students */}
      <Students />
    </div>
  );
};
export default SpecialFeatures;

import Card2 from "./Card2";

const cardData = [
  {
    title: "Community",
    content:
      "Lifetime access to a private student group. Network, learn, and grow with other freelancers and experts. Monthly live Q&As included.\nWorth: ₹14,000 - FREE",
    price_amount: "14000",
  },
  {
    title: "Templates",
    content:
      "Get all the templates you need to succeed — outreach messages, proposals, pricing formats, and more.\nWorth: ₹16,000 - FREE",
    price_amount: "16000",
  },
  {
    title: "Scripts",
    content:
      "Use proven sales scripts to confidently talk to international clients and close high-ticket deals.\nWorth: ₹8,000 - FREE",
    price_amount: "8000",
  },
  {
    title: "Updates",
    content:
      "Get all future updates and new resources added to the course for free, forever.\nWorth: ₹10,000 - FREE",
    price_amount: "10000",
  },
  {
    title: "Coupons",
    content:
      "Get access to exclusive coupons and deals from the collaboration and course partners.\nWorth: ₹95,000 - FREE",
    price_amount: "95000",
  },
  {
    title: "Interviews",
    content:
      "Get insider information from successful freelancers, ex course students, agency owners and other industry experts exclusively within the course.",
    price_amount: "0",
  },
];

const Bonuses = () => {
  return (
    <div className="flex flex-col items-center p-3 bg-[url('.\assets\bg-grid.png')] bg-cover bg-center h-full bg-primary">
      {/* Heading */}
      <div className="flex flex-col text-center items-center space-y-6 py-8">
        <div className="flex flex-row items-center space-x-2">
          <h3 className="text-white">
            If you enroll now you also get this{" "}
            <span className="bg-secondary px-4 py-1 text-primary">BONUSES</span>
          </h3>
          {/* <div className="bg-secondary px-4 py-1">
          <h3>BONUSES </h3>
        </div> */}
        </div>
        <p className="text-white">
          Unlock ₹36,000 Worth of Bonuses — Free When You Enroll Today
        </p>
      </div>

      {/* Cards */}
      <Card2 cardData={cardData} price={true} />
    </div>
  );
};
export default Bonuses;

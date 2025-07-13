import CTAButton from "@/utils/CTAButton";
import Card2 from "./Card2";

const cardData = [
  {
    title: "50+ In-depth Video Lessons",
    content: "Master the complete freelancing journey from finding clients to scaling your business, explained in simple language anyone can understand.",
  },
  {
    title: "Complete Client Acquisition System",
    content: "Discover the exact process to find, approach, and close international clients who happily pay $1000-$5000 monthly for your services.",
  },
  {
    title: "Real Client Interaction Scripts",
    content: "Learn from actual conversations, including word-for-word templates for cold messages, sales calls, and negotiation that have closed $1000+ deals.",
  },
  {
    title: "Templates & Resources Bundle",
    content: "Access a comprehensive collection of outreach templates, proposal frameworks, portfolio examples, and pricing calculators worth ₹80,000.",
  },
  {
    title: "Private Community Access",
    content: "Join a supportive group of like-minded freelancers from tier-two cities who are implementing the same strategies and achieving success.",
  },
  {
    title: "The Complete AI Toolbox",
    content: "Learn how to leverage AI tools to deliver higher quality work faster, even if you're still developing your skills.",
  },
];

const CourseHighlight = () => {
  return (
    <div className="flex flex-col items-center p-3 bg-[url('/assets/bg-grid.png')] bg-cover bg-center text-white h-full bg-primary">
      {/* Heading */}
      <div className="flex flex-col text-center space-y-4">
          <h3 className="text-white">
            Course
            <span className="bg-secondary text-black mx-3 px-4 py-1">Features</span>{" "}
          </h3>
        <p className="w-[250px] lg:w-[300px]">
          Get access to all of these instantly when you enroll now
        </p>
      </div>

      {/* Cards */}
      <Card2 cardData={cardData} price={false} />

      {/* CTA Button */}
      <CTAButton text="Enroll Now" />
      <p>⚡Get Instant Access</p>
    </div>
  );
};
export default CourseHighlight;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const faqData = [
  {
    question: "I don’t speak English fluently. Can I still succeed?",
    answer: "Yes. Scripts are provided. Lessons are in Hindi + simple English.",
  },
  {
    question: "I don’t have a laptop. Can I do it on my phone?",
    answer: "Yes. Many students started with just a phone.",
  },
  {
    question: "Will I get lifetime access?",
    answer: "Yes. Lifetime access + all updates.",
  },
  {
    question: "How soon will I get clients?",
    answer: "Most students land clients in 40–60 days. It depends on implementation.",
  },
  {
    question: "Can I do this while in college or job?",
    answer: "Yes. Just 2-3 hours/day is enough.",
  },
  {
    question: "What if I don’t have any skills or experience?",
    answer: "You’ll learn everything from scratch, including how to outsource and still earn profit.",
  },
  {
    question: "What if I’m scared of talking to clients?",
    answer: "You’ll get scripts for DMs, calls, and objections — plus mock sessions inside the community.",
  },
  {
    question: "Is there any live support?",
    answer: "Yes. We host monthly live Q&A sessions and provide community support.",
  },
  {
    question: "Can I get a refund if it doesn’t work for me?",
    answer: "Absolutely. There’s a 14-day no-questions-asked refund guarantee.",
  },
  {
    question: "Do I need a college degree?",
    answer: "No. All you need is a willingness to learn and a phone to get started.",
  },
];


const stats = [
  {
    title: "60 Lakh +",
    desc: "Top Freelancers earn annually in India",
  },
  {
    title: "15 Million +",
    desc: "Total number of freelancers in India",
  },
  {
    title: "30 Billion +",
    desc: "Freelance Industry to grow by 2025",
  },
];

const FAQS = () => {
  return (
    <div className="bg-primary py-12 text-white">
      <div className="container mx-auto space-y-20 px-4">
        {/* Top Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Be a part of the future</h2>
          <h2 className="text-2xl font-bold">of work...</h2>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index < 2 ? "md:border-r md:border-gray-600 md:pr-8" : "md:pl-8"
              }`}
            >
              <h3 className="text-orange-500 text-3xl font-bold">
                {stat.title}
              </h3>
              <p className="text-sm text-white">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Let me kill your doubts</h1>
        </div>

        {/* Accordion Section */}
        <div className="max-w-3xl px-2 mx-auto">
          <Accordion type="single" collapsible>
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  <p>{faq.question}</p>
                </AccordionTrigger>
                <AccordionContent>
                  <h3>{faq.answer}</h3>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQS;

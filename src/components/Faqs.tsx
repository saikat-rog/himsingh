import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const faqData = [
  {
    question: "What is the course language?",
    answer: "The course is primarily in Hindi, with some English terminology.",
  },
  {
    question:
      "I am a newbie / experienced freelancer. Will this course help me?",
    answer:
      "Yes, the course is designed for both beginners and experienced freelancers looking to scale their business.",
  },
  {
    question:
      "Will I receive a certificate of completion after finishing the course?",
    answer:
      "Yes, upon successful completion of the course, you will receive a certificate.",
  },
  {
    question:
      "If I have any doubts or questions, will I be able to talk to Him for solutions and feedback?",
    answer: "Yes, there will be opportunities for Q&A and interaction.",
  },
  {
    question: "How is this course different from your YouTube videos?",
    answer:
      "This course provides a more structured and in-depth learning experience compared to the free content on YouTube.",
  },
  {
    question: "What is the refund policy for Pro Freelancer Bundle?",
    answer: "We offer a 7-day no-questions-asked refund policy.",
  },
  {
    question: "Can I take this course even if I'm not very good at English?",
    answer:
      "Yes, as the course is primarily in Hindi, a strong command of English is not necessary.",
  },
  {
    question: "What is the course validity?",
    answer: "You will have lifetime access to the course materials.",
  },
];

const FAQS = () => {
  return (
    <div className="bg-primary py-12 text-white">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">Be a part of the future</h2>
          <h2 className="text-2xl font-bold">of work...</h2>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
          {[
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
          ].map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index < 2 ? "md:border-r md:border-gray-600 md:pr-8" : "md:pl-8"
              }`}
            >
              <h3 className="text-orange-500 text-3xl font-bold">
                {stat.title}
              </h3>
              <p className="text-sm text-gray-400">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Let me kill your doubts</h1>
        </div>

        {/* Accordion Section */}
        <div className="max-w-3xl px-2">
          <Accordion type="single" collapsible>
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger><p>{faq.question}</p></AccordionTrigger>
                <AccordionContent><h3>{faq.answer}</h3></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12 flex flex-col gap-5 items-center w-full lg:w-3/5 shadow rounded-xl p-10 m-auto outline-[1px] outline-white/20 bg-gray" style={{ outlineOffset: '-1px' }}>
          <img src="/assets/havequestions.png" alt="Still have questions?" />
          <h1 className="text-2xl font-bold">Still have questions?</h1>
          <p className="text-neutral-400">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
          {/* Button */}
          <button className="flex flex-row justify-center items-center bg-white rounded-full p-1.5 lg:p-2 mb-5">
            <span className="text-primary bg-secondary px-2 py-2 rounded-full font-bold">
              <ArrowRightIcon className="w-5 lg:w-8 h-5 lg:h-8 text-primary font-bold" />
            </span>
            <div className=" text-black px-3 lg:px-6 text-xl font-semibold">Get in touch</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQS;

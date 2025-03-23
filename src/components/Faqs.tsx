import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion";
  
  const FAQS = () => {
    const faqData = [
      {
        question: "What is the course language?",
        answer: "The course is primarily in Hindi, with some English terminology.",
      },
      {
        question: "I am a newbie / experienced freelancer. Will this course help me?",
        answer: "Yes, the course is designed for both beginners and experienced freelancers looking to scale their business.",
      },
      {
        question: "Will I receive a certificate of completion after finishing the course?",
        answer: "Yes, upon successful completion of the course, you will receive a certificate.",
      },
      {
        question: "If I have any doubts or questions, will I be able to talk to Him for solutions and feedback?",
        answer: "Yes, there will be opportunities for Q&A and interaction.",
      },
      {
        question: "How is this course different from your YouTube videos?",
        answer: "This course provides a more structured and in-depth learning experience compared to the free content on YouTube.",
      },
      {
        question: "What is the refund policy for Pro Freelancer Bundle?",
        answer: "We offer a 7-day no-questions-asked refund policy.",
      },
      {
        question: "Can I take this course even if I'm not very good at English?",
        answer: "Yes, as the course is primarily in Hindi, a strong command of English is not necessary.",
      },
      {
        question: "What is the course validity?",
        answer: "You will have lifetime access to the course materials.",
      },
    ];
  
    return (
      <div className="bg-gray py-12 text-white">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">Be a part of the future</h2>
            <h2 className="text-2xl font-bold">of work...</h2>
  
            <div className="relative w-24 mx-auto mt-2">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-orange-500"></div>
              <svg
                className="w-6 h-6 text-orange-500 absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1m-4-5h1m-4-5h1m-1 16h-1.5a2.5 2.5 0 01-2.5-2.5V6.5A2.5 2.5 0 015.5 4h1.5m15 16h-1.5a2.5 2.5 0 01-2.5-2.5V6.5A2.5 2.5 0 0118.5 4h1.5M9 18h1m5-3h1m5-3h1"
                ></path>
              </svg>
            </div>
          </div>
  
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
            <div className="flex flex-col items-center md:border-r md:border-gray-300 md:pr-8">
              <h3 className="text-orange-500 text-3xl font-bold">60 Lakh +</h3>
              <p className="text-sm text-gray-400">Top Freelancers earn annually in India</p>
            </div>
  
            <div className="flex flex-col items-center md:border-r md:border-gray-300 md:pr-8 md:pl-8">
              <h3 className="text-orange-500 text-3xl font-bold">15 Million +</h3>
              <p className="text-sm text-gray-400">Total number of freelancers in India</p>
            </div>
  
            <div className="flex flex-col items-center md:pl-8">
              <h3 className="text-orange-500 text-3xl font-bold">30 Billion +</h3>
              <p className="text-sm text-gray-400">Freelance Industry to grow by 2025</p>
            </div>
          </div>
  
          {/* FAQ Section Title */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Let me kill your doubts</h1>
          </div>
  
          {/* Accordion Section */}
          <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger><p>{faq.question}</p></AccordionTrigger>
                <AccordionContent><h3>{faq.answer}</h3></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          </div>
        </div>
      </div>
    );
  };
  
  export default FAQS;
  
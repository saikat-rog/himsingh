import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const items = [
  {
    title: "Anjali R. | Jaipur",
    description:
      "Before this course, I didn’t even know what freelancing really meant. I always thought I needed a degree or perfect English. But this course showed me how to position myself with zero experience. I now know how to create a portfolio, how to reach out to clients, and how to close deals with confidence.",
    image: "/testimonials/anjali.png",
  },
  {
    title: "Rohit P. | Bhopal",
    description:
      "The best part for me was learning how to communicate with international clients. I used to avoid calls and messages because of fear. Now, using Him’s call and DM scripts, I feel confident having full conversations and handling client objections without stress.",
    image: "/testimonials/rohit.png",
  },
  {
    title: "Sneha K. | Patna",
    description:
      "This course helped me break the mindset that only 'tech people' can earn well online. I learned how to identify profitable services, how to outsource smartly, and how to manage my time between college and freelancing. It’s not just skills — it’s a mindset transformation.",
    image: "/testimonials/sneha.png",
  },
  {
    title: "Arjun M. | Lucknow",
    description:
      "I was scared of freelancing because I thought you needed a MacBook, fluent English, and lots of skills. Now I work from my phone and have systems in place. I’ve also built relationships with other freelancers through the Lancrr community who help me stay consistent.",
    image: "/testimonials/arjun.png",
  },
  {
    title: "Vikas S. | Kochi",
    description:
      "I had taken multiple courses before but they were all fluff. This one gave me exact templates, outreach examples, and step-by-step lessons that I could act on immediately. The community helped a lot whenever I was stuck.",
    image: "/testimonials/vikas.png",
  },
  {
    title: "Meera J. | Nagpur",
    description:
      "The biggest thing I gained was clarity. I used to watch random YouTube videos but never knew where to start. Lancrr gave me a path — from setting up my Instagram properly to actually talking to potential clients with structure.",
    image: "/testimonials/meera.png",
  },
  {
    title: "Riya D. | Indore",
    description:
      "I joined Lancrr with zero confidence. Within a few weeks, I had my first paying client and a complete portfolio ready. The mindset modules and real client examples gave me belief that even someone like me, with no background in freelancing, can succeed online.",
    image: "/testimonials/riya.png",
  },
];

export function Testimonials() {
  return (
    <div className="w-full flex flex-col items-center gap-10 p-10 bg-primary">
      <div className="flex flex-col text-center gap-2">
        <h1 className="text-secondary">Course Reviews</h1>
        <p className="text-white max-w-6xl">
          From students, dropouts and 9&mdash;5 workers in Tier-2 cities to full-time
          freelancers earning online — this blueprint is changing lives every
          day. Join a movement of Indians breaking the ₹20K ceiling and building
          dollar-paying careers.
        </p>
      </div>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            image={item.image}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}



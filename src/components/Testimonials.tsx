import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function Testimonials() {
  return (
    <div className="w-full flex flex-col items-center gap-10 p-10 bg-primary">
      <div className="flex flex-col text-center gap-2">
        <h3 className="text-secondary">Course Reviews</h3>
        <h1 className="text-white">What Studnets Say</h1>
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

const items = [
  {
    title: "The Dawn of Innovation",
    description:
      "Explore the birth of groundbreaking ideas and invetions. Lorem ipsum dolor sit, amet consectetur adipisicing ores, alias suscipit ullam, necessitatibus eius quam ad quae molestias optio? ",
    image: "/assets/logo.png",
  },
  {
    title: "The Digital Revolution",
    description:
      "Dive into the transformative power of technology. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga laboriosam, recusandae quod  ad quae molestias optio?",
    image: "/assets/logo.png",
  },
  {
    title: "The Art of Design",
    description:
      "Discover the beauty of thoughtful and function Lorem ipsum dolor sit, amet consectetur adipisicing  illo aliquam laborum corrupti ipsam harum veniam asperiores, alias suscipit ullam, necessitatibus eius quam ad quae molestias optio?",
    image: "/assets/logo.png",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our live Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga cusandae quod illo aliquam laborum corrupti ipsam harum veniam asperiores, alias suscipit ullam, necessitatibus eius quam ad quae molestias optio?",
    image: "/assets/logo.png",
  },
  {
    title: "The Pursuit of Knowledge",
    description:
      "Join the quest for understanding and enlightenment. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga laboriosam, recusandae quod illossitatibus eius quam ad quae molestias optio?",
    image: "/assets/logo.png",
  },
  {
    title: "The Joy of Creation",
    description:
      "Experience the thrill of bringing ideas to life. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga laboriosam, recusandae quod illo aliquam laborum corrupti ipsam harum veniam asperiores, alias suscipit ullam, necessitatibus eius quam ad quae molestias optio?",
    image: "/assets/logo.png",
  },
  {
    title: "The Spirit of Adventure",
    description:
      "Embark on exciting journeys and thrilling discoveries. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga laboriosam, recusandae quod illo aliquam laborum corrupti ipsam harum veniam asperiores, alias suscipit ullam, necessitatibus eius quam ad quae molestias optio?",
    image: "/assets/logo.png",
  },
];

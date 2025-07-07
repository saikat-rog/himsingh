import { ArrowRightIcon } from "@heroicons/react/20/solid";

type CTAButtonProps = {
  text: string;
};

const CTAButton = ({text}: CTAButtonProps) => {
  return (
    <a href="#courses" className="flex flex-row justify-center items-center bg-white rounded-full p-1.5 lg:p-2 mb-5 hover:scale-105 active:scale-105 transition-transform duration-500 ease-in-out shadow-2xl shadow-secondary"
>
      <span className="text-primary bg-secondary px-2 py-2 rounded-full font-bold">
        <ArrowRightIcon className="w-5 lg:w-8 h-5 lg:h-8 text-primary font-bold" />
      </span>
      <div className="px-3 lg:px-6 text-xl font-semibold text-black">{text}</div>
    </a>
  );
};

export default CTAButton;


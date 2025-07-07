import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-gray dark:shadow-none",
        className
      )}
    >
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          <p>{description}</p>
          <div className=" flex flex-row items-center gap-2 mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
            <img src={image} alt="" className="h-6 bg-white rounded-full lg:h-7" />
            <div className="text-lg lg:text-xl">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

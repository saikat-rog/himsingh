import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  Icon: React.ElementType;
  description: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  Icon,
  description,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex-col justify-start overflow-hidden rounded-xl",
      "bg-background shadow-sm dark:bg-background dark:border dark:border-neutral-700",
      "p-5 lg:p-10",
      className
    )}
    {...props}
  >
    <div className="flex flex-col gap-5 lg:gap-10">
      <p className="text-gray-200">{description}</p>
      <div className="flex flex-col items-start">
      <Icon className="h-12 w-12 text-neutral-700 dark:text-neutral-300" />
      <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
        {name}
      </h3>
      </div>
    </div>
  </div>
);


export { BentoCard, BentoGrid };

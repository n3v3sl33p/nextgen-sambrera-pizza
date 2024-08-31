import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  imageUrl: string;
  size: number;
  className?: string;
}
const sizes = new Map<number, number>([
  [20, 300],
  [30, 400],
  [40, 500],
]);

export const PizzaImage: React.FC<Props> = ({ imageUrl, size, className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-1 relative w-full",
        className
      )}
    >
      <Image
        alt="aboba"
        src={imageUrl}
        width={sizes.get(size)}
        height={sizes.get(size)}
        className={cn("relative left-2 top-2 transition-all z-10 duration-300")}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[370px] h-[370px]" />
    </div>
  );
};

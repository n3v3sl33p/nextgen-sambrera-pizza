import React from "react";
import { cn } from "@/shared/lib/utils";
import { Title } from "./title";
import { Button } from "../ui";
import Image from "next/image";

interface Props {
  imageUrl: string;
  name: string;
  loading?: boolean;
  onSubmit?: VoidFunction;
  className?: string;
  price: number;
}

export const ChooseProductForm: React.FC<Props> = ({
  imageUrl,
  name,
  onSubmit,
  className,
  price,
  loading,
}) => {
  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <Image
          src={imageUrl}
          alt="aboba"
          width={350}
          height={350}
          className="relative left-2 top-2 transition-all z-10 duration-300"
        />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} />

        <Button
          loading={loading}
          onClick={onSubmit}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {price} ₽
        </Button>
      </div>
    </div>
  );
};

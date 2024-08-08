import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCart: React.FC<Props> = ({
  id,
  name,
  className,
  price,
  imageUrl,
}) => {
  return (
    <div className={cn(className)}>
      <Link href={"/"}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <Image width={215} height={215} src={imageUrl} alt={"aboba"} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} р</b>
          </span>

          <Button variant="secondary">
            <Plus className="mr-1" size={20} />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};

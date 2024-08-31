import { cn } from "@/shared/lib/utils";
import React from "react";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import * as CartItem from "./cart-item-details";
import { CountButton } from "./count-button";
import { Trash2Icon } from "lucide-react";
interface Props extends CartItemProps {
  className?: string;
}

export const CartDrawerItem: React.FC<Props> = ({
  className,
  id,
  imageUrl,
  name,
  price,
  details,
  quantity,
}) => {
  return (
    <div className={cn(className, "flex gap-6 bg-white p-5")}>
      <CartItem.Image src={imageUrl} />
      <div className="flex-1">
        <CartItem.Info details={details} name={name} />
        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CountButton onClick={(type) => console.log(type)} value={quantity} />
          <div>
            <CartItem.Price value={price} />
            <Trash2Icon
              className="text-gray-400 cursor-pointer hover:text-gray-600"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";
import React from "react";
import { cn } from "@/shared/lib/utils";
import { Title } from "./title";
import { Button } from "../ui";

import { PizzaImage } from "./pizza-image";
import { GroupVariants } from "./group-variants";
import {
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import { IngredientItem } from "./ingredient-item";
import { useSet } from "react-use";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onSubmit?: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  imageUrl,
  name,
  ingredients,
  items,
  onSubmit,
  className,
  loading,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredients, { toggle: toggleIngredient }] = useSet(
    new Set<number>([])
  );
  const productDetails = `${size} см, ${pizzaTypes[
    type - 1
  ].name.toLocaleLowerCase()} тесто, `;

  const PizzaPrice =
    items.find((item) => item.size === size && item.pizzaType === type)
      ?.price || 111;
  const ingredientsPrice = ingredients.reduce((currentSum, ingredient) => {
    if (selectedIngredients.has(ingredient.id)) {
      return currentSum + ingredient.price;
    } else {
      return currentSum;
    }
  }, 0);
  const currentItemId = items.find(
    (item) => item.size === size && item.pizzaType === type
  )?.id;
  const totalPrice = PizzaPrice + ingredientsPrice;
  const pizzasFilterByType = items.filter((item) => item.pizzaType === type);
  const pizzasFilterBySize = items.filter((item) => item.size === size);
  const pizzaTypesWithDisables = pizzaTypes.map((item) => ({
    value: item.value,
    name: item.name,
    disabled: !pizzasFilterBySize.find(
      (pizza) => Number(pizza.pizzaType) === Number(item.value)
    ),
  }));
  React.useEffect(() => {
    if (!pizzasFilterByType.find((item) => item.size === size)) {
      setType(type === 1 ? 2 : 1);
    }
  }, [size]);
  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} />
        <p>{productDetails}</p>
        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants
            items={pizzaSizes}
            selectedValue={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypesWithDisables}
            selectedValue={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-3">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                {...ingredient}
                onClick={() => toggleIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          loading={loading}
          onClick={() => {
            if (currentItemId) {
              onSubmit?.(currentItemId, Array.from(selectedIngredients));
            }
          }}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useSet } from "react-use";
import { Filters } from "./use-query-filters";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface ReturnProps extends Filters {
  changePrices: (name: keyof PriceProps, value: number) => void;
  setPizzaTypes: (key: string) => void;
  setSizes: (key: string) => void;
  setIngredients: (key: string) => void;
  setPrices: React.Dispatch<React.SetStateAction<PriceProps>>;
}
export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams();

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams?.get("ingredients")?.split(","))
  );

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(searchParams?.get("sizes")?.split(","))
  );

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(searchParams?.get("pizzaTypes")?.split(","))
  );

  const [{ priceFrom, priceTo }, setPrices] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const changePrices = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({ ...prev, [name]: value }));
  };
  return {
    sizes,
    pizzaTypes,
    selectedIngredients,
    priceFrom,
    priceTo,
    changePrices,
    setPrices,
    setPizzaTypes: togglePizzaTypes,
    setSizes: toggleSizes,
    setIngredients: toggleIngredients,
  };
};

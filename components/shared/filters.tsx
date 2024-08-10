"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input, RangeSlider } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selected } = useFilterIngredients();
  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>([])
  );
  const [{ priceFrom, priceTo }, setPrice] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });
  const changePrce = (name: keyof PriceProps, value: number) => {
    setPrice((prev) => ({ ...prev, [name]: value }));
  };
  React.useEffect(() => {
    console.log({
      sizes,
      selected,
      priceFrom,
      priceTo,
      pizzaTypes,
    });
  }, [sizes, selected, priceFrom, priceTo, pizzaTypes]);
  return (
    <div className={cn(className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <CheckboxFiltersGroup
        title="Тесто"
        className="mb-5"
        selected={pizzaTypes}
        onClickCheckbox={togglePizzaTypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
      />
      <CheckboxFiltersGroup
        title="Размеры"
        className="mb-5"
        selected={sizes}
        onClickCheckbox={toggleSizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            min={0}
            max={999}
            value={String(priceFrom)}
            onChange={(e) => changePrce("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            min={1}
            max={1000}
            value={String(priceTo)}
            onChange={(e) => changePrce("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[priceFrom, priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />
      </div>
      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={5}
        defaultItems={ingredients}
        items={ingredients}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selected}
      />
    </div>
  );
};

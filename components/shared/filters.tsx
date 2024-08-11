"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { Input, RangeSlider } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useIngredients, useFilters, useQueryFilters } from "@/hooks";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  return (
    <div className={cn(className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <CheckboxFiltersGroup
        title="Тесто"
        className="mb-5"
        selected={filters.pizzaTypes}
        onClickCheckbox={filters.setPizzaTypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
      />
      <CheckboxFiltersGroup
        title="Размеры"
        className="mb-5"
        selected={filters.sizes}
        onClickCheckbox={filters.setSizes}
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
            value={String(filters.priceFrom)}
            onChange={(e) =>
              filters.changePrices("priceFrom", Number(e.target.value))
            }
            placeholder="0"
          />
          <Input
            type="number"
            min={1}
            max={1000}
            value={String(filters.priceTo)}
            onChange={(e) =>
              filters.changePrices("priceTo", Number(e.target.value))
            }
            placeholder="1000"
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[filters.priceFrom || 0, filters.priceTo || 1000]}
          onValueChange={([priceFrom, priceTo]) =>
            filters.setPrices({ priceFrom, priceTo })
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
        onClickCheckbox={filters.setIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};

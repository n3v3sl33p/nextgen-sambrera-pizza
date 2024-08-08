import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input, RangeSlider } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="можно с собой" value="1" />
        <FilterCheckbox text="можно с собой" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="30000"
            min={0}
            max={3000}
            defaultValue={0}
          />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>
      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={5}
        defaultItems={[
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
        ]}
        items={[
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
          { text: "Сыр", value: "5" },
        ]}
      />
    </div>
  );
};

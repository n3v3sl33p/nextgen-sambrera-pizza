"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input, Skeleton } from "../ui";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  selected?: Set<string>;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  loading,
  searchInputPlaceholder = "Поиск",
  className,
  onClickCheckbox,
  defaultValue,
  selected,
}) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [showAll, setShowAll] = React.useState(false);
  const list = showAll ? items : (defaultItems || items).slice(0, limit);

  return (
    <div className={cn(className)}>
      <p className="font-bold mb-3">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {loading
          ? new Array(6)
              .fill(0)
              .map((_, index) => (
                <Skeleton
                  key={index}
                  className={cn("h-6 rounded-2xl", index === 5 ? "w-28" : "")}
                />
              ))
          : list
              .filter((item) =>
                item.text
                  .toLocaleLowerCase()
                  .includes(searchValue.toLocaleLowerCase())
              )
              .map((item, index) => (
                <FilterCheckbox
                  key={index}
                  text={item.text}
                  value={item.value}
                  endAdornment={item.endAdornment}
                  checked={selected?.has(item.value)}
                  onCheckedChange={() => onClickCheckbox?.(item.value)}
                />
              ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => {
              setShowAll(!showAll);
              setSearchValue("");
            }}
            className="text-primary mt-3"
          >
            {showAll ? "Скрыть" : "+ Показать всё"}
          </button>
        </div>
      )}
    </div>
  );
};

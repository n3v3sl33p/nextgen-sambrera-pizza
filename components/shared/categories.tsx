"use client";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";

interface Props {
  className?: string;
}

const cats = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
];
export const Categories: React.FC<Props> = ({ className }) => {
  const activeId = useCategoryStore((state) => state.activeId);
  const setActiveId = useCategoryStore((state) => state.setActiveId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((cat, index) => (
        <a
          onClick={() => {
            setActiveId(index);
          }}
          href={`/#${cat}`}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeId === index &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={index}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};

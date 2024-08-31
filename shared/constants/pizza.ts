export const mapPizzaSizes = {
  20: "Маленькая",
  30: "Средняя",
  40: "Большая",
} as const;

export const mapPizzaType = {
  1: "Традиционное",
  2: "Тонкое",
} as const;

export const pizzaSizes = Object.entries(mapPizzaSizes).map(
  ([value, name]) => ({ value, name })
);

export const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
  value,
  name,
}));
export type PizzaType = keyof typeof mapPizzaType;
export type PizzaSize = keyof typeof mapPizzaSizes;

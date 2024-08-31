import { useRouter } from "next/navigation";
import qs from "qs";
import React from "react";
export interface Filters {
  sizes: Set<string>;
  selectedIngredients: Set<string>;
  priceFrom: number | undefined;
  priceTo: number | undefined;
  pizzaTypes: Set<string>;
}
export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();
  React.useEffect(() => {
    const params = {
      sizes: Array.from(filters.sizes),
      ingredients: Array.from(filters.selectedIngredients),
      priceFrom: filters.priceFrom,
      priceTo: filters.priceTo,
      pizzaTypes: Array.from(filters.pizzaTypes),
    };

    const query = qs.stringify(params, {
      arrayFormat: "comma",
    });
    router.push(`?${query}`, {
      scroll: false,
    });
  }, [filters]);
};

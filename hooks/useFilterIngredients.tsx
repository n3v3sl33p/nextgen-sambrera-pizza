import { Ingredient } from "@prisma/client";
import React from "react";
import { Api } from "../services/api-clients";
import { useSet } from "react-use";

type IngredientItem = {
  value: string;
  text: string;
};
interface ReturnProps {
  ingredients: IngredientItem[];
  loading: boolean;
  selected: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
  const [selected, { toggle }] = useSet(new Set<string>([]));

  const [loading, setLoading] = React.useState(false);
  const [ingredients, setIngredients] = React.useState<IngredientItem[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await Api.ingredients.getAllIngredients();
        setIngredients(
          response.map((ingredient) => ({
            value: String(ingredient.id),
            text: ingredient.name,
          }))
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { ingredients, loading, onAddId: toggle, selected };
};

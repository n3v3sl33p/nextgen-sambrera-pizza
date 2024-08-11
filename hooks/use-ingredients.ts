import { Api } from "@/services/api-clients";
import React from "react";

type IngredientItem = {
  value: string;
  text: string;
};
export const useIngredients = () => {
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
  return { ingredients, loading };
};

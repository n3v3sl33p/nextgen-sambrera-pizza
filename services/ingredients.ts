import { Ingredient } from "@prisma/client";
import { AxiosInstance } from "./instance";
import { ApiRoutes } from "./routes";
export const getAllIngredients = async (): Promise<Ingredient[]> => {
  const { data } = await AxiosInstance.get<Ingredient[]>(
    ApiRoutes.GET_ALL_INGREDIENTS
  );
  return data;
};

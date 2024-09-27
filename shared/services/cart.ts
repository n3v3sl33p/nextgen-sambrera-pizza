import { CartDTO, CreateCartItemValues } from "@/@types/prisma";
import { AxiosInstance } from "./instance";
import { ApiRoutes } from "./routes";

export async function fetchCart(): Promise<CartDTO> {
  const { data } = await AxiosInstance.get<CartDTO>(ApiRoutes.CART_ROUTE);
  return data;
}

export const updateItemQuantity = async (
  itemId: number,
  quantity: number
): Promise<CartDTO> => {
  const { data } = await AxiosInstance.patch<CartDTO>(
    ApiRoutes.CART_ROUTE + `/${itemId}`,
    {
      quantity,
    }
  );
  return data;
};

export const deleteItem = async (itemId: number): Promise<CartDTO> => {
  const { data } = await AxiosInstance.delete<CartDTO>(
    ApiRoutes.CART_ROUTE + `/${itemId}`
  );
  return data;
};
export const addItem = async (
  value: CreateCartItemValues
): Promise<CartDTO> => {
  const { data } = await AxiosInstance.post<CartDTO>(
    ApiRoutes.CART_ROUTE,
    value
  );
  return data;
};

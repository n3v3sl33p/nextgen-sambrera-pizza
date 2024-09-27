import { pizzaSizes } from "./../shared/constants/pizza";
import {
  Cart,
  CartItem,
  Ingredient,
  Product,
  ProductItem,
} from "@prisma/client";

export type ProductWithRelations = Product & {
  items: ProductItem[];
  ingredients: Ingredient[];
};

export type CartItemDTO = CartItem & {
  productItem: ProductItem & {
    product: Product;
  };
  ingredients: Ingredient[];
};

export interface CartDTO extends Cart {
  items: CartItemDTO[];
}

export interface CreateCartItemValues {
  productItemId: number;
  ingredientsIds?: number[];
}

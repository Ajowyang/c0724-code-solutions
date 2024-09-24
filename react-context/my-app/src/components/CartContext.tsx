import { createContext } from 'react';
import { Product } from '../lib';

const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined,
};

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

export const CartContext = createContext<CartValue>(defaultCartValue);

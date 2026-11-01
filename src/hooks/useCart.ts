import { useReducer, useCallback } from 'react';
import { CartItem, Product } from '../types';

type CartAction =
  | { type: 'ADD_ITEM'; product: Product; quantity: number }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' };

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(item => item.product.id === action.product.id);
      if (existing) {
        return state.map(item =>
          item.product.id === action.product.id
            ? { ...item, quantity: item.quantity + action.quantity }
            : item
        );
      }
      return [...state, { product: action.product, quantity: action.quantity }];
    }
    case 'REMOVE_ITEM':
      return state.filter(item => item.product.id !== action.productId);
    case 'UPDATE_QUANTITY':
      if (action.quantity <= 0) {
        return state.filter(item => item.product.id !== action.productId);
      }
      return state.map(item =>
        item.product.id === action.productId
          ? { ...item, quantity: action.quantity }
          : item
      );
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

export function useCart() {
  const [items, dispatch] = useReducer(cartReducer, []);

  const addItem = useCallback((product: Product, quantity: number = 1) => {
    dispatch({ type: 'ADD_ITEM', product, quantity });
  }, []);

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', productId });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  };
}

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item._id === product._id);
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item._id === product._id
                  ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: product.quantity || 1 }] };
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item._id !== productId),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item._id === productId
              ? { ...item, quantity: Math.max(1, quantity) }
              : item
          ),
        })),
      clearCart: () => set({ cart: [] }),
      getTotalPrice: () =>
        get().cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0),
      getTotalItems: () =>
        get().cart.reduce((sum, item) => sum + (item.quantity || 1), 0),
    }),
    {
      name: "cart-storage", // Persist cart to localStorage
    }
  )
);

export default useCartStore;
"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { PRODUCTS_DATA } from "@/lib/products";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const CART_STORAGE_KEY = "espanapoint_cart";
const LEGACY_CART_STORAGE_KEY = "espanadeal_cart";
const EMPTY_CART: CartItem[] = [];
let cartSnapshot: CartItem[] | undefined;
const listeners = new Set<() => void>();

function restoreCart(): CartItem[] {
  if (typeof window === "undefined") return EMPTY_CART;

  const savedCart =
    localStorage.getItem(CART_STORAGE_KEY) ??
    localStorage.getItem(LEGACY_CART_STORAGE_KEY);
  if (!savedCart) return EMPTY_CART;

  try {
    const parsed: unknown = JSON.parse(savedCart);
    if (!Array.isArray(parsed)) {
      throw new Error("El carrito guardado no tiene un formato válido.");
    }

    const restored = parsed.flatMap((item: unknown) => {
      if (
        typeof item !== "object" ||
        item === null ||
        !("id" in item) ||
        !("quantity" in item) ||
        typeof item.id !== "number" ||
        typeof item.quantity !== "number" ||
        !Number.isInteger(item.quantity) ||
        item.quantity < 1 ||
        item.quantity > 99
      ) {
        return [];
      }
      const product = PRODUCTS_DATA.find((entry) => entry.id === item.id);
      return product ? [{ ...product, quantity: item.quantity }] : [];
    });

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(restored));
    localStorage.removeItem(LEGACY_CART_STORAGE_KEY);
    return restored;
  } catch (error) {
    console.error("No se pudo restaurar el carrito:", error);
    localStorage.removeItem(CART_STORAGE_KEY);
    localStorage.removeItem(LEGACY_CART_STORAGE_KEY);
    return EMPTY_CART;
  }
}

function getCartSnapshot(): CartItem[] {
  cartSnapshot ??= restoreCart();
  return cartSnapshot;
}

function getServerCartSnapshot(): CartItem[] {
  return EMPTY_CART;
}

function notifyCartChange() {
  listeners.forEach((listener) => listener());
}

function subscribeToCart(listener: () => void) {
  listeners.add(listener);
  const handleStorage = (event: StorageEvent) => {
    if (
      event.key === CART_STORAGE_KEY ||
      event.key === LEGACY_CART_STORAGE_KEY ||
      event.key === null
    ) {
      cartSnapshot = undefined;
      notifyCartChange();
    }
  };

  window.addEventListener("storage", handleStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function commitCart(cart: CartItem[]) {
  cartSnapshot = cart;
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  localStorage.removeItem(LEGACY_CART_STORAGE_KEY);
  notifyCartChange();
}

export function CartProvider({ children }: { children: ReactNode }) {
  const cart = useSyncExternalStore(
    subscribeToCart,
    getCartSnapshot,
    getServerCartSnapshot
  );
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    const current = getCartSnapshot();
    const existing = current.find((item) => item.id === product.id);
    if (existing) {
      commitCart(
        current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, 99) }
            : item
        )
      );
      return;
    }
    commitCart([...current, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (id: number) => {
    commitCart(getCartSnapshot().filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    commitCart(
      getCartSnapshot().map((item) =>
        item.id === id ? { ...item, quantity: Math.min(quantity, 99) } : item
      )
    );
  };

  const clearCart = () => commitCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser utilizado dentro de un CartProvider");
  }
  return context;
}

// src/store/CartContext.jsx
import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const add = (product) => {
    setItems((prevItems) => {
      const itemJaExiste = prevItems.find((item) => item.product.id == product.id);

      if (itemJaExiste) {
        return prevItems.map((item) =>
          item.product.id == product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { product, quantity: 1, note: '' }];
    });
  };

  const decrement = (productId) => {
    setItems((prevItems) => {

      const itensAtualizados = prevItems.map((item) =>
        item.product.id == productId ? { ...item, quantity: item.quantity - 1 } : item
      );

      return itensAtualizados.filter((item) => item.quantity > 0);
    });
  };

  const remove = (productId) => {
    setItems((prevItems) => prevItems.filter((item) => item.product.id != productId));
  };

  const setNote = (productId, note) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id == productId ? { ...item, note } : item
      )
    );
  };

  const clear = () => setItems([]);

  const totalInCents = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, totalInCents, totalQuantity, add, decrement, remove, setNote, clear }}
    >
      {children}
    </CartContext.Provider>
  );
}

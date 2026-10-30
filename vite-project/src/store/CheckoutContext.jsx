import { createContext, useContext, useState } from 'react';

const CheckoutContext = createContext(null);

export function CheckoutProvider({ children }) {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [order, setOrder] = useState(null);

  const reset = () => {
    setPaymentMethod(null);
    setOrder(null);
  };

  return (
    <CheckoutContext.Provider
      value={{ paymentMethod, order, setPaymentMethod, setOrder, reset }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}


import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext<any>(null);



export const OrderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<any[]>([]);
  const [extraData, setExtraData] = useState<any>(null);

  return (
    <OrderContext.Provider value={{ items, setItems, extraData, setExtraData  }}>
      {children}
    </OrderContext.Provider>
  );
};



export const OrderContextItems = () => useContext(OrderContext);
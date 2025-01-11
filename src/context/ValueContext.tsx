import React, { createContext, useContext, useState } from "react";

// Context yaratish
const ValueContext = createContext<{
  cardInfo: any;
  setCardInfo: React.Dispatch<React.SetStateAction<any>>;
} | any>(null);

// Context provayder komponenti
export const ValueProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [valueData, setValueData] = useState(null);

  return (
    <ValueContext.Provider value={{ valueData, setValueData }}>
      {children}
    </ValueContext.Provider>
  );
};

// Contextdan foydalanish uchun hook
export const useValueContext = () => {
  const context = useContext(ValueContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};

import React, { createContext, useContext, useState } from "react";

interface ErrorContextType {
  errors: { [key: string]: string }; // Errors obyektining dinamik tuzilmasi
  setErrors: (errors: { [key: string]: string }) => void; // Errorsni yangilash funksiyasi
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  return (
    <ErrorContext.Provider value={{ errors, setErrors }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useErrorContext = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useErrorContext must be used within an ErrorProvider");
  }
  return context;
};

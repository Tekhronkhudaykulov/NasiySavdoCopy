import React, { createContext, useContext, useState } from "react";

interface FormContextType {
  formData: { [key: string]: string };
  setFormData: (key: string, value: string) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormDataState] = useState<{ [key: string]: string }>({});

  const setFormData = (key: string, value: string) => {
    setFormDataState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

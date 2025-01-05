import React, { useEffect } from "react";
import { useErrorContext } from "../../context/ErrorContext";
import "./style.scss"

const ErrorList: React.FC = () => {
    const { errors, setErrors } = useErrorContext();



    useEffect(() => {
      const timer = setTimeout(() => {
        setErrors({});
      }, 5000); 
      return () => clearTimeout(timer);
    }, [errors, setErrors]);

  return (
    <div className="fixed top-4 right-4 space-y-4 z-[9999]">
      {Object.entries(errors).map(([key, value]) => (
        <div
          key={key}
          className="bg-[#03a5a5] border-l-4 border-darkGreen text-white p-4 rounded shadow-lg animate-slide-in"
        >
          <strong className="font-bold">{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
};

export default ErrorList;
import { useState } from "react";
import CheckBoxWithText from "./CheckBoxWithText";
const typeProducts = [
  { id: 1, name: "Сковорода Kukmara" },
  { id: 2, name: "Сковорода Kukmara" },
  { id: 3, name: "Сковорода Kukmara" },
  { id: 4, name: "Сковорода Kukmara" },
];

function TypeProducts() {
  const [active, setActive] = useState(null);
  return (
    <div className="flex flex-col md:gap-[37px] gap-[20px]">
      <h3>Тип продукта</h3>
      <div className="flex flex-col gap-[10px]">
        {typeProducts.map((typeProduct) => {
          return (
            <CheckBoxWithText
              active={active}
              setActive={setActive}
              id={typeProduct.id}
              text={typeProduct.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TypeProducts;

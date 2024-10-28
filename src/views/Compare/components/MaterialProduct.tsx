import { useState } from "react";
import CheckBoxWithText from "./CheckBoxWithText";
const materialProducts = [
  { id: 1, name: "Чугун" },
  { id: 2, name: "Нержавеющая сталь" },
  { id: 3, name: "Алюминий" },
  { id: 4, name: "Покрытие" },
];

function MaterialProduct() {
  const [active, setActive] = useState(null);
  return (
    <div className="flex flex-col md:gap-[37px] gap-[20px]">
      <h3>Материал:</h3>
      <div className="flex flex-col gap-[10px]">
        {materialProducts.map((materialProduct) => {
          return (
            <CheckBoxWithText
              active={active}
              setActive={setActive}
              id={materialProduct.id}
              text={materialProduct.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MaterialProduct;

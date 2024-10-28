import { useState } from "react";
import CheckBoxWithText from "./CheckBoxWithText";
const sizeProducts = [
  { id: 1, name: "20" },
  { id: 2, name: "25" },
  { id: 3, name: "30" },
  { id: 4, name: "35" },
];

function SizeProducts() {
  const [active, setActive] = useState(null);
  return (
    <div className="flex flex-col md:gap-[37px] gap-[20px]">
      <h3>Размер:</h3>
      <div className="flex flex-col gap-[10px]">
        {sizeProducts.map((sizeProduct) => {
          return (
            <CheckBoxWithText
              active={active}
              setActive={setActive}
              id={sizeProduct.id}
              text={sizeProduct.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SizeProducts;

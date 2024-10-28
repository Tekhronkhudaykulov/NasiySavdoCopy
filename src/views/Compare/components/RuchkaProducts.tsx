import { useState } from "react";
import CheckBoxWithText from "./CheckBoxWithText";
const sizeProducts = [
  { id: 1, name: "Эргономика:" },
  { id: 2, name: "Съемные ручки:" },
];

function RuchkaProducts() {
  const [active, setActive] = useState(null);
  return (
    <div className="flex flex-col md:gap-[37px] gap-[20px]">
      <h3>Ручка:</h3>
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

export default RuchkaProducts;

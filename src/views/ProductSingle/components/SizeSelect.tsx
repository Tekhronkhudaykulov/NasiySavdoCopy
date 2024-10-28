import { useState } from "react";
import SizeBox from "./SizeBox";

function SizeSelect() {
  const [sizes, setSizes] = useState([
    { text: "26 см", active: false },
    { text: "32 см", active: true },
    { text: "40 см", active: false },
    { text: "48 см", active: false },
  ]);

  const handleSizeClick = (index: number) => {
    setSizes((prevSizes) =>
      prevSizes.map((size, i) => ({
        ...size,
        active: i === index,
      }))
    );
  };
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray text-[12px] font-[500]">Размер:</p>
      <div className="flex flex-wrap md:gap-[12px] gap-[10px]">
        {sizes.map((size, index) => (
          <SizeBox
            key={index}
            text={size.text}
            active={size.active}
            onClick={() => handleSizeClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default SizeSelect;

import { useState } from "react";
import ColorBox from "./ColorBox";

function ColorSelect() {
  const [colorsDatas, setColorsDatas] = useState([
    { color: "bg-[#212121]", active: false },
    { color: "bg-[#bda16a]", active: false },
    { color: "bg-[#917dac]", active: true },
    { color: "bg-[#aac5a3]", active: false },
  ]);
  const handleColorClick = (index: number) => {
    setColorsDatas((prevColors) =>
      prevColors.map((item, i) => ({
        ...item,
        active: i === index,
      }))
    );
  };
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray text-[12px] font-[500]">Цвет:</p>
      <div className="flex flex-wrap md:gap-[12px] gap-[8px]">
        {colorsDatas.map((data, index) => (
          <ColorBox
            key={index}
            color={data.color}
            active={data.active}
            onClick={() => handleColorClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorSelect;

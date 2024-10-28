import { useState } from "react";
import ColorSmallBox from "./ColorSmallBox";

function CategColor() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-[18px] items-start">
      <div className="flex flex-col gap-[4px] items-start">
        <h2 className="text-mainBlack font-medium">Цвет</h2>
        <button className="text-[#03A5A5] text-[12px]">Очистить</button>
      </div>
      <div className="flex flex-col gap-[10px] ">
        <ColorSmallBox text={"Бежевый"} color="bg-[#F4EBE0]" />
        <ColorSmallBox text={"Белый"} color="bg-[#FFFFFF]" />
        <ColorSmallBox text={"Черный"} color="bg-[#212121]" />
        <ColorSmallBox text={"Голубой"} color="bg-[#00A3FF]" />
        <ColorSmallBox text={"Желтый"} color="bg-[#EACA4A]" />
        {open && (
          <>
            <ColorSmallBox text={"Голубой"} color="bg-[#00A3FF]" />
            <ColorSmallBox text={"Желтый"} color="bg-[#EACA4A]" />
            <ColorSmallBox text={"Голубой"} color="bg-[#00A3FF]" />
            <ColorSmallBox text={"Желтый"} color="bg-[#EACA4A]" />
          </>
        )}
      </div>
      <span
        onClick={() => {
          setOpen(!open);
        }}
        className="font-medium text-txtSecondary underline cursor-pointer underline-offset-4 hover:text-mainBlack"
      >
        {open ? "Свернуть" : "Посмотреть все"}
      </span>
    </div>
  );
}

export default CategColor;

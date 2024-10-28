import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import ColorSmallBox from "./ColorSmallBox";

function ColorFilterMobile() {
  const [show, setShow] = useState(false);
  return (
    <div className="py-3 flex flex-col gap-5 border-t border-line">
      <div onClick={() => setShow(!show)} className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-[14px] font-medium text-mainBlack">Цвет</h3>
        </div>
        <button className="text-[22px] text-txtSecondary2">
          <FaAngleRight className={`${show ? "rotate-90" : ""}`} />
        </button>
      </div>
      {show && (
        <div className="flex flex-col gap-3 pl-2">
          <ColorSmallBox text={"Бежевый"} color="bg-[#F4EBE0]" />
          <ColorSmallBox text={"Белый"} color="bg-[#FFFFFF]" />
          <ColorSmallBox text={"Черный"} color="bg-[#212121]" />
          <ColorSmallBox text={"Голубой"} color="bg-[#00A3FF]" />
          <ColorSmallBox text={"Желтый"} color="bg-[#EACA4A]" />
        </div>
      )}
    </div>
  );
}

export default ColorFilterMobile;

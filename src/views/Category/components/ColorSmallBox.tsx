import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

function ColorSmallBox({ color, text }: { color: any; text: any }) {
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={() => setActive(!active)}
      className="flex group items-center cursor-pointer gap-[8px]"
    >
      <div
        className={`w-[24px] aspect-square rounded-[50%] shadow-[0_1px_2px_0_#0000008a_inset] ${color}  grid place-content-center text-white`}
      >
        {active && <FaRegCheckCircle className="text-[14px]" />}
      </div>
      <span className="text-txtSecondary2 group-hover:text-mainBlack">
        {text}
      </span>
    </div>
  );
}

export default ColorSmallBox;

import { useState } from "react";
import { FaCheck } from "react-icons/fa";

function BrandSmallBox({ text }: { text: any }) {
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={() => setActive(!active)}
      className="flex group items-center cursor-pointer gap-[8px]"
    >
      <div
        className={`w-[24px] aspect-square border-[2px] border-txtSecondary2 rounded-[6px] grid place-content-center text-mainBlack`}
      >
        {active && <FaCheck className="text-[14px] text-darkGreen" />}
      </div>
      <span className="text-txtSecondary2 group-hover:text-mainBlack">
        {text}
      </span>
    </div>
  );
}

export default BrandSmallBox;

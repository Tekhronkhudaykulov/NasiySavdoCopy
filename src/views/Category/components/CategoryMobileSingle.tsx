import { useState } from "react";
import { FaCheck } from "react-icons/fa";

function CategoryMobileSingle({
  category,
  activeAll,
}: {
  category: any;
  activeAll?: boolean;
}) {
  const [active, setActive] = useState(false);
  return (
    <div className="flex justify-between">
      <span className="text-[14px]">{category.name}</span>
      <div
        onClick={() => setActive(!active)}
        className={`w-[20px] aspect-square cursor-pointer border-[2px] border-txtSecondary2 rounded-[6px] grid place-content-center text-mainBlack`}
      >
        {(activeAll || active) && (
          <FaCheck className="text-[12px] text-darkGreen" />
        )}
      </div>
    </div>
  );
}

export default CategoryMobileSingle;

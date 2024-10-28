import { useState } from "react";
import { FaAngleRight, FaCheck } from "react-icons/fa";
import { CategoriesDatas } from "../../../data/CategData";
import CategoryMobileSingle from "./CategoryMobileSingle";

function CategoryMobileFilter() {
  const [show, setShow] = useState(false);
  const [activeAll, setActiveAll] = useState(false);

  return (
    <div className="py-3 flex flex-col gap-5 border-t border-line">
      <div className="flex justify-between" onClick={() => setShow(!show)}>
        <div className="flex flex-col gap-1">
          <h3 className="text-[14px] font-medium text-mainBlack">Категория</h3>
          <span className="text-txtSecondary2 text-[12px]">Все категории</span>
        </div>
        <button className="text-[22px] text-txtSecondary2">
          <FaAngleRight className={`${show ? "rotate-90" : ""}`} />
        </button>
      </div>
      {show && (
        <div className="flex flex-col gap-3 pl-2">
          <div className="flex justify-between">
            <span className="text-[14px]">Все категории</span>
            <div
              onClick={() => setActiveAll(!activeAll)}
              className={`w-[20px] aspect-square cursor-pointer border-[2px] border-txtSecondary2 rounded-[6px] grid place-content-center text-mainBlack`}
            >
              {activeAll && <FaCheck className="text-[12px] text-darkGreen" />}
            </div>
          </div>
          {CategoriesDatas?.map((category, i) => {
            return (
              <CategoryMobileSingle
                activeAll={activeAll}
                category={category}
                key={i}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CategoryMobileFilter;

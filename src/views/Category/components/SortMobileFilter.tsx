import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import CategoryMobileSingle from "./CategoryMobileSingle";
import { SortDatas } from "../../../data/SortData";

function SortMobileFilter() {
  const [show, setShow] = useState(false);

  return (
    <div className="py-3 flex flex-col gap-5 border-t border-line">
      <div onClick={() => setShow(!show)} className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-[14px] font-medium text-mainBlack">
            Сортировать
          </h3>
          <span className="text-txtSecondary2 text-[12px]">По умолчанию</span>
        </div>
        <button className="text-[22px] text-txtSecondary2">
          <FaAngleRight className={`${show ? "rotate-90" : ""}`} />
        </button>
      </div>
      {show && (
        <div className="flex flex-col gap-3 pl-2">
          {SortDatas?.map((category, i) => {
            return <CategoryMobileSingle category={category} key={i} />;
          })}
        </div>
      )}
    </div>
  );
}

export default SortMobileFilter;

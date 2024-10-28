import { useState } from "react";
import { ASSETS } from "../../../assets/img/assets";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function CompareLeft() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="md:flex hidden flex-col max-w-[276px] items-start">
        <div className="w-[245px] h-[250px]">
          <img
            className="w-full h-full object-cover"
            src={ASSETS.CardImg}
            alt=""
          />
        </div>
        <h2 className="text-[#060606] font-medium my-[10px]">
          Сковорода Kukmara с антипригарным покрыти...
        </h2>
        <h3 className="text-mainBlack text-[20px] font-semibold">
          156 000 сум
        </h3>
        <button className="mt-4 text-blue font-medium">В корзину</button>
      </div>
      <div className="flex md:hidden border border-line p-4 gap-2 rounded-[16px]">
        <div className="w-[63px] flex-shrink-0 h-[full]">
          <img
            className="w-full h-full object-cover"
            src={ASSETS.CardImg}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-[#060606] font-medium">
            Сковорода Kukmara с антипригарным покрыти...
          </h2>
          <div className="flex justify-between gap-2">
            <h3 className="text-mainBlack text-[20px] font-semibold">
              156 000 сум
            </h3>
            <button className="text-[14px] text-darkGreen font-medium">
              Изменить
            </button>
          </div>
        </div>
      </div>
      <div className="md:mt-[60px] mt-2 flex flex-col gap-[24px]">
        <h2
          onClick={() => setShow(!show)}
          className="flex gap-3 items-center text-mainBlack text-[20px] font-medium cursor-pointer"
        >
          Основные характеристики {show ? <FaAngleUp /> : <FaAngleDown />}
        </h2>
        <p
          className={`leading-[1.5] text-[12px] ${show ? "" : "text-hidden-7"}`}
        >
          Lorem ipsum dolor sit amet consectetur. Nibh nisl id egestas ultrices
          tellus pretium consectetur. Massa convallis nec et ultrices a duis.
          Eleifend ac nibh etiam molestie neque faucibus felis diam. Ullamcorper
          mauris neque justo maecenas non tincidunt quis. Leo arcu massa aliquam
          at eget. Nam enim at quam mi risus feugiat ac magna. Volutpat molestie
          nulla dui nullam nam enim nibh. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis, accusantium maxime velit temporibus
          possimus praesentium consequatur inventore vel minus enim!
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <div className="pb-4 border-b flex flex-col gap-1 border-line">
          <span className="text-txtSecondary2 text-[14px]">Серия</span>
          <p className="text-[#060606] font-medium text-hidden-1">
            Сковорода Kukmara с антипригарным покрыти...
          </p>
        </div>
        <div className="pb-4 border-b flex flex-col gap-1 border-line">
          <span className="text-txtSecondary2 text-[14px]">Материал:</span>
          <p className="text-[#060606] font-medium ">Чугун</p>
        </div>
        <div className="pb-4 border-b flex flex-col gap-1 border-line">
          <span className="text-txtSecondary2 text-[14px]">Размер:</span>
          <p className="text-[#060606] font-medium .text-hidden-1">30 см.</p>
        </div>
      </div>
    </div>
  );
}

export default CompareLeft;

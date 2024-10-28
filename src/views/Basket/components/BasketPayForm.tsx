import { useState } from "react";
import AnorCard from "../../ProductSingle/components/AnorCard";
import UzumCard from "../../ProductSingle/components/UzumCard";

function BasketPayForm() {
  const [isRadio, setIsRadio] = useState(0);
  const [activeCard, setActiveCart] = useState(0);
  const [selected, setSelected] = useState<string>("6 мес");
  const durations = ["3 мес", "6 мес", "12 мес", "24 мес"];
  return (
    <div className="border border-line md:rounded-2xl rounded-xl md:p-[20px] p-4">
      <h2 className="md:text-[20px] text-[18px] md:mb-[24px] mb-5 font-semibold">
        Способ оплаты:
      </h2>
      <div className="flex flex-col gap-2 max-w-[420px]">
        <button
          onClick={() => setIsRadio(1)}
          className="select-none cursor-pointer md:p-[16px_18px] p-[12px_14px] rounded-[10px] flex flex-col md:gap-[11px] gap-[8px] bg-secondary"
        >
          <div className="flex md:gap-4 gap-3 items-center">
            <div className="rounded-full flex items-center justify-center border-[2px] border-darkGreen w-[24px] h-[24px]">
              <div
                className={`w-[14px] h-[14px] rounded-full ${
                  isRadio == 1 ? "bg-darkGreen" : ""
                }`}
              ></div>
            </div>
            <span className="text-[14px] font-medium text-mainBlack">
              При получении
            </span>
          </div>
          <div className="flex md:gap-4 gap-3 items-center">
            <div className="w-[24px]"></div>
            <h4 className="text-txtSecondary2 text-[14px] font-medium">
              Наличными или картой
            </h4>
          </div>
        </button>
        <button
          onClick={() => setIsRadio(2)}
          className="select-none cursor-pointer md:p-[16px_18px] p-[12px_14px] rounded-[10px] flex flex-col md:gap-[11px] gap-[8px] bg-secondary"
        >
          <div className="flex md:gap-4 gap-3 items-center">
            <div className="rounded-full flex items-center justify-center border-[2px] border-darkGreen w-[24px] h-[24px]">
              <div
                className={`w-[14px] h-[14px] rounded-full ${
                  isRadio == 2 ? "bg-darkGreen" : ""
                }`}
              ></div>
            </div>
            <span className="text-[14px] font-medium text-mainBlack">
              Картой оналйн
            </span>
          </div>
        </button>
        <button
          onClick={() => setIsRadio(3)}
          className="select-none cursor-pointer md:p-[16px_18px] p-[12px_14px] rounded-[10px] flex flex-col md:gap-[11px] gap-[8px] bg-secondary"
        >
          <div className="flex md:gap-4 gap-3 items-center">
            <div className="rounded-full flex items-center justify-center border-[2px] border-darkGreen w-[24px] h-[24px]">
              <div
                className={`w-[14px] h-[14px] rounded-full ${
                  isRadio == 3 ? "bg-darkGreen" : ""
                }`}
              ></div>
            </div>
            <span className="text-[14px] font-medium text-mainBlack">
              При получении
            </span>
          </div>
        </button>
        <div className="md:p-4 p-3 flex flex-col md:gap-4 gap-3 border border-line rounded-[10px]">
          <div className="flex gap-2 items-center">
            {durations.map((duration) => (
              <button
                key={duration}
                className={`border-[1.5px] rounded-[8px] text-[12px] font-medium md:p-[9px_12px] p-[6px_8px] ${
                  selected === duration
                    ? "bg-[rgb(2,115,115,.15)] text-darkGreen border-line"
                    : "text-txtSecondary2 border-line"
                }`}
                onClick={() => setSelected(duration)}
              >
                {duration}
              </button>
            ))}
          </div>
          <AnorCard setActiveCart={setActiveCart} active={activeCard == 1} />
          <UzumCard setActiveCart={setActiveCart} active={activeCard == 2} />
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between items-center">
              <span className="text-[12px] font-medium text-txtSecondary">
                Оплата в месяц:
              </span>
              <span className="text-mainBlack font-semibold md:text-[16px] text-[14px]">
                35 000 сум/мес
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[12px] font-medium text-txtSecondary">
                Цена товара:
              </span>
              <span className="text-mainBlack font-semibold md:text-[16px] text-[14px]">
                368 000 сум/мес
              </span>
            </div>
            <hr className="text-line md:my-[10px] my-[6px]" />
            <div className="flex justify-between items-center">
              <span className="text-[12px] font-medium text-txtSecondary">
                Итоговая цена:
              </span>
              <span className="text-mainBlack font-semibold md:text-[16px] text-[14px]">
                398 000 сум/мес
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketPayForm;

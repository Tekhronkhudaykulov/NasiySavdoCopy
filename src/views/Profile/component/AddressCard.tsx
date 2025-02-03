import { useState } from "react";

type Props = {
  isChoosen: any;
  setIsChoosen: any;
  item: any;
};

function AddressCard({ isChoosen, setIsChoosen, item }: Props) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div
      onClick={() => {
        setIsChoosen(item.id);
      }}
      className={`flex items-center relative bg-[#f8fafc] border border-[#e6eaf0] select-none ${isChoosen == item.id ? "cursor-default" : "cursor-pointer"}`}
    >
      <div className="flex justify-between items-center gap-1 w-full min-h-[72px] p-[12px]">
        <div className="flex flex-col gap-[2px] w-full">
          <div className="text-[15px] leading-[18px] font-medium">
            Тверская улица дом 9с5 кв 22
          </div>
          <div className="text-[15px] leading-[18px] font-normal opacity-[.5]">
            Москва г, Россия, 125009
          </div>
        </div>
        <label className="flex items-center relative cursor-pointer">
          <input type="radio" className="opacity-0 absolute" />
          <span
            className={`order-[-1] w-[20px] h-[20px] flex items-center justify-center bg-[#fff] border border-[#aaadb0] relative cursor-pointer shrink-0 rounded-[50%] ${isChoosen == item.id ? "!bg-[#222223] !border-none" : ""}`}
          >
            <svg
              className="w-[10px] h-[10px] text-[#fff]"
              fill="currentColor"
              viewBox="0 0 10 10"
            >
              <path d="m3.8333 10c-0.356 0-0.68797-0.18902-0.86596-0.49702l-2.33-3.997c-0.28-0.479-0.11802-1.094 0.35998-1.373 0.478-0.279 1.095-0.11798 1.373 0.36102l1.463 2.509 3.795-6.506c0.278-0.479 0.89498-0.63898 1.373-0.35998s0.64096 0.89498 0.36096 1.373l-4.662 7.993c-0.179 0.308-0.51001 0.49702-0.86701 0.49702z"></path>
            </svg>
          </span>
        </label>
        <div
          onClick={() => setShowInfo((prev) => !prev)}
          className="flex justify-center items-center w-[24px] h-[24px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            className="cursor-pointer"
          >
            <path
              d="M8 1.5C8.82843 1.5 9.5 2.17157 9.5 3C9.5 3.82843 8.82843 4.5 8 4.5C7.17157 4.5 6.5 3.82843 6.5 3C6.5 2.17157 7.17157 1.5 8 1.5Z"
              fill="#A0A0AB"
            ></path>
            <path
              d="M8 7C8.82843 7 9.5 7.67157 9.5 8.5C9.5 9.32843 8.82843 10 8 10C7.17157 10 6.5 9.32843 6.5 8.5C6.5 7.67157 7.17157 7 8 7Z"
              fill="#A0A0AB"
            ></path>
            <path
              d="M8 12.5C8.82843 12.5 9.5 13.1716 9.5 14C9.5 14.8284 8.82843 15.5 8 15.5C7.17157 15.5 6.5 14.8284 6.5 14C6.5 13.1716 7.17157 12.5 8 12.5Z"
              fill="#A0A0AB"
            ></path>
          </svg>
        </div>
        {showInfo && (
          <div
            onClick={() => setShowInfo(false)}
            className="fixed bg-transparent z-[10] inset-0"
          ></div>
        )}
        {showInfo && (
          <div className="absolute flex flex-col items-start top-[calc(100%+5px)] right-[0] p-1 w-[194px] rounded-lg bg-white shadow-[0_4px_30px_0_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.05)] z-10">
            <button className="leading-[16px] w-full h-[40px] text-start p-[8px] rounded-lg cursor-pointer text-[13px] hover:bg-[#f3f6f9]">
              Изменить
            </button>
            <button className="leading-[16px] w-full h-[40px] text-start p-[8px] rounded-lg cursor-pointer text-[13px] hover:bg-[#f3f6f9]">
              Удалить
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddressCard;

import { ASSETS } from "../../../assets/img/assets";

function AnorCard({
  active,
  setActiveCart,
  tariffsName,
  monthly_payment
}: {
  active: boolean;
  setActiveCart: any;
  tariffsName?: string,
  monthly_payment?: string | number
}) {
  return (
    <div
      onClick={() => setActiveCart(1)}
      className={`${
        active ? " border-darkGreen" : "bg-secondary border-transparent"
      }  p-4 rounded-[10px] flex border-[1.5px] flex-col gap-4 cursor-pointer  `}
    >
      <div className="flex flex-col gap-3">
        <span className="text-[12px] text-txtSecondary2 font-medium">
          {tariffsName}
        </span>
        <div className="flex justify-between items-center">
          {/* <img
            className="md:h-[18px] h-[16px] w-auto"
            src={ASSETS.AnorBank}
            alt="anor bank"
          /> */}
          <span className="text-mainBlack font-semibold md:text-[14px] text-[12px]">
            {monthly_payment?.toLocaleString("RU-ru")} сум/мес
          </span>
        </div>
      </div>
      {active && (
        <button className="flex justify-center rounded-[8px] text-white bg-[#03a5a5] hover:bg-darkGreen p-[14px_32px]">
          Оформить
        </button>
      )}
    </div>
  );
}

export default AnorCard;

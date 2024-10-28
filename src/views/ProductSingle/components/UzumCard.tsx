import { ASSETS } from "../../../assets/img/assets";

function UzumCard({
  active,
  setActiveCart,
}: {
  active: boolean;
  setActiveCart: any;
}) {
  return (
    <div
      onClick={() => setActiveCart(2)}
      className={`${
        active ? " border-darkGreen" : "bg-secondary border-transparent"
      }  p-4 rounded-[10px] flex border-[1.5px] flex-col gap-4 cursor-pointer  `}
    >
      <div className="flex flex-col gap-3">
        <span className="text-[12px] text-txtSecondary2 font-medium">
          Рассрочка от партнера UzumBank
        </span>
        <div className="flex justify-between items-center">
          <img
            className="h-[18px] w-auto"
            src={ASSETS.UzumBank}
            alt="anor bank"
          />
          <span className="text-mainBlack font-semibold md:text-[14px] text-[12px]">
            38 000 сум/мес
          </span>
        </div>
      </div>
      {active && (
        <button className="flex justify-center rounded-[8px] text-white bg-[#03a5a5] hover:bg-darkGreen md:p-[14px_32px] p-3">
          Оформить
        </button>
      )}
    </div>
  );
}

export default UzumCard;

import { FaCheck } from "react-icons/fa";

function CheckBoxWithText({
  text,
  active,
  setActive,
  id,
}: {
  id: any;
  text: any;
  active: any;
  setActive: any;
}) {
  return (
    <div
      onClick={() => setActive(id)}
      className="flex group items-center cursor-pointer gap-[8px]"
    >
      <div
        className={`md:w-[24px] w-[20px] select-none aspect-square border-[2px] border-txtSecondary2 rounded-[6px] grid place-content-center text-mainBlack`}
      >
        {active === id && <FaCheck className="md:text-[14px] text-[10px] text-darkGreen" />}
      </div>
      <span
        className={`${
          active === id ? "text-mainBlack" : "text-txtSecondary2"
        } group-hover:text-mainBlack md:text-[16px] text-[13px]`}
      >
        {text}
      </span>
    </div>
  );
}

export default CheckBoxWithText;

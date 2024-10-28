import { useEffect, useState } from "react";
import ChooseCardPopUp from "./ChooseCardPopUp";

function PayButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);
  return (
    <>
      {show && <ChooseCardPopUp setShow={setShow} />}
      <button
        onClick={() => setShow(true)}
        className="md:text-[16px] text-[14px] ml-auto max-w-[330px] w-full font-medium md:p-[14px] p-[10px] bg-darkGreen md:rounded-[8px] rounded-[4px] text-white"
      >
        Оплатить
      </button>
    </>
  );
}

export default PayButton;

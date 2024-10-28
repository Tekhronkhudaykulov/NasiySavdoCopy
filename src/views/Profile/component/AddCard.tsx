import { Modal } from "antd";
import { modalsStore } from "../../../store";
import InputMask from "react-input-mask";
import { useState } from "react";
import { ASSETS } from "../../../assets/img/assets";
import CardSendCode from "./CardSendCode";
const AddCard = () => {
  const { modals, closeModal } = modalsStore();
  const [open, setOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardDate, setCardDate] = useState<string>("");
  const handleOk = () => {
    closeModal("card_payment");
    setOpen(true);
  };

  return (
    <>
      <Modal
        footer={null}
        open={modals?.card_payment}
        onCancel={() => closeModal("card_payment")}
        className="md:!max-w-[500px] !max-w-[90%] !w-full"
      >
        <div className="bg-[#fff] z-[1] md:p-[26px] p-0 w-full rounded-[16px]">
          <h1 className="text-[24px] font-semibold text-mainBlack">
            Добавление карты
          </h1>
          <p className="md:text-[17px] text-[15px] text-mainBlack opacity-[.7] md:mt-[50px] mt-[35px]">
            Номер вашей карты и срок ее действия
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex md:flex-row flex-col gap-[16px] md:mt-[30px] mt-5">
              <div className="flex flex-col md:gap-3 gap-2">
                <label
                  className="text-[14px] font-semibold text-mainBlack"
                  htmlFor="numberCard"
                >
                  Номер карты
                </label>
                <InputMask
                  placeholder="____ ____ ____ ____"
                  mask="9999 9999 9999 9999"
                  className="border border-line !w-full md:text-[17px] text-[15px] opacity-[70%] rounded-[6px] md:p-[16px] p-2 outline-none font-medium"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                ></InputMask>
              </div>
              <div className="flex flex-col md:gap-3 gap-2">
                <label
                  className="text-[14px] font-semibold text-mainBlack"
                  htmlFor="numberCard"
                >
                  Срок действия
                </label>
                <InputMask
                  placeholder="__/__"
                  mask="99/99"
                  className="border w-[100px] border-line md:w-full font-medium md:text-[17px] text-[15px] opacity-[70%] rounded-[6px] md:p-[16px] p-2 outline-none"
                  value={cardDate}
                  onChange={(e) => setCardDate(e.target.value)}
                ></InputMask>
              </div>
            </div>
            <button
              onClick={() => handleOk()}
              className="md:py-[18px] py-[10px] text-center text-[17px] hover:text-white w-full rounded-[6px] bg-darkGreen text-white"
            >
              Продолжить
            </button>
          </div>
          <div className="flex gap-3 mt-[52px]">
            <div className="h-[28px] md:h-[32px] w-auto">
              <img
                className="w-full h-full object-contain"
                src={ASSETS.uzcard}
                alt=""
              />
            </div>
            <div className="h-[28px] md:h-[32px] w-auto">
              <img
                className="w-full h-full object-contain"
                src={ASSETS.Humo}
                alt=""
              />
            </div>
          </div>
        </div>
      </Modal>
      {open && <CardSendCode setOpen={setOpen} open={open} />}
    </>
  );
};

export default AddCard;

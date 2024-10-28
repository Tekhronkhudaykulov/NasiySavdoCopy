import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CloseCircle, TrashCan } from "../../../assets/icon";
import { ASSETS } from "../../../assets/img/assets";
import { useState } from "react";
import { modalsStore } from "../../../store";

const PlastikCard = ({
  selectedCard,
  setSelectedCard,
  activeIndex,
}: {
  selectedCard: any;
  setSelectedCard: any;
  activeIndex: number;
}) => {
  return (
    <div
      onClick={() => {
        setSelectedCard(activeIndex);
      }}
      className={`md:p-[20px] p-4 md:rounded-[12px] rounded-[8px] select-none border bg-buttonBg flex flex-col gap-[17px] cursor-pointer ${
        selectedCard ? "border-darkGreen" : "border-transparent"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-[7px]">
          <h3 className="text-[16px] font-medium text-mainBlack">
            Номер карты
          </h3>
          <p className="text-[14px] text-txtSecondary2 font-medium">
            9860**** **** 1234
          </p>
        </div>
        <button>
          <TrashCan />
        </button>
      </div>
      <div className="flex justify-between">
        <p className="text-[14px] text-txtSecondary2 font-medium">SQB</p>
        <div className="w-[42px] h-[25px]">
          <img className="w-ful h-full object-contain" src={ASSETS.Humo} />
        </div>
      </div>
    </div>
  );
};

function ChooseCardPopUp({ setShow }: { setShow: any }) {
  const [selectedCard, setSelectedCard] = useState(0);
  const { openModal } = modalsStore();
  const [success, setSuccess] = useState(false);
  return (
    <>
      <div className="fixed inset-0 bg-white z-[99] overflow-auto flex items-center justify-center">
        <div
          onClick={() => setShow(false)}
          className="absolute inset-0 z-[-1]"
        ></div>
        <div className="max-w-[750px] w-full p-[20px_26px] flex flex-col md:gap-[60px] gap-[30px] border min-h-screen border-line rounded-[16px]">
          <div className="flex flex-col items-center mx-auto">
            <h2 className="md:text-[24px] text-[20px] font-medium text-black md:mb-[5px]">
              Оплата
            </h2>
            <span className="md:text-[16px] text-[14px] text-txtSecondary2 font-medium">
              Договор #I2888968
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h3 className="md:text-[16px] text-[14px] font-medium text-mainBlack">
                Выберите карту
              </h3>
              <Link
                to={`/profile/profile_card`}
                onClick={() => openModal("card_payment")}
                className="flex items-center gap-[6px] md:text-[16px] text-[14px] text-darkGreen font-medium"
              >
                Добавить карту <FaPlus />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-[8px]">
              <PlastikCard
                selectedCard={selectedCard == 1}
                setSelectedCard={setSelectedCard}
                activeIndex={1}
              />
              <PlastikCard
                selectedCard={selectedCard == 2}
                setSelectedCard={setSelectedCard}
                activeIndex={2}
              />
            </div>
          </div>
          <div className="h-[149px] flex flex-col gap-5">
            <div className="flex items-center flex-col md:flex-row gap-2">
              <input
                type="number"
                placeholder="Введите сумму к оплате"
                className="md:p-[15px_20px] p-[12px_15px] text-txtSecondary2 outline-none w-full md:text-[16px] text-[14px] font-normal border border-line rounded-[8px]"
              />
              <button
                onClick={() => setSuccess(true)}
                className="md:text-[16px] text-[14px] ml-auto md:max-w-[180px] w-full font-medium md:p-[14px] p-[12px] bg-darkGreen rounded-[8px] text-white"
              >
                Оплатить
              </button>
            </div>
            <div className="flex flex-col gap-3 md:text-[16px] text-[14px]">
              <div className="flex justify-between items-center">
                <span className=" text-txtSecondary2">
                  Рекомендованная сумма
                </span>
                <span className="font-semibold text-mainBlack">
                  568 000 сум
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-txtSecondary2">Полное погашение</span>
                <span className="font-semibold text-mainBlack">
                  1 568 000 сум
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {success && (
        <div className="fixed z-[100] inset-0 flex items-center justify-center">
          <div
            onClick={() => {
              setShow(false);
            }}
            className="bg-[#212121] opacity-[25%] absolute inset-0"
          ></div>
          <div className="bg-[#fff] z-[1] md:p-[26px] p-[20px] md:max-w-[466px] max-w-[90%] w-full md:rounded-[16px] rounded-[12px]">
            <div className="flex justify-center relative">
              <div>
                <img
                  className="max-w-[150px] md:max-w-full"
                  src={ASSETS.CardSuccess}
                />
              </div>
              <button
                className="absolute right-[0] top-[0]"
                onClick={() => {
                  setShow(false);
                }}
              >
                <CloseCircle />
              </button>
            </div>
            <div className="md:my-[36px] my-[26px] text-center">
              <span className="md:text-[16px] text-[14px] font-medium text-txtSecondary2">
                Договор #I2888968
              </span>
              <h4 className="md:text-[24px] text-[20px] font-medium md:mt-[11px] mt-2">
                Оплата прошла успешно
              </h4>
            </div>
            <div className="flex gap-4 flex-col md:text-[16px] text-[14px] md:flex-row text-center">
              <Link
                className="py-[14px] md:max-w-[200px] w-full rounded-[8px] bg-darkGreen text-white"
                to={`/category`}
              >
                Перейти в каталог
              </Link>
              <Link
                className="py-[14px] md:max-w-[200px] w-full rounded-[8px] bg-[rgb(2,115,115,.15)] text-darkGreen font-medium"
                to={`/`}
              >
                На главную
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChooseCardPopUp;

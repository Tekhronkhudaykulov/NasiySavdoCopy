import { Select } from "antd";
import LabelBasketForm from "../../../components/LabelBasketForm/LabelBasketForm";
import InputBasketForm from "../../../components/InputBasketForm/InputBasketForm";
import { useState } from "react";

function BasketAddressForm() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="border border-line rounded-2xl p-[20px]">
      <h2 className="md:text-[24px] text-[18px] font-semibold">
        Способ получения и адрес доставки:
      </h2>
      <div className="mt-[24px] flex flex-col gap-[24px] max-w-[420px]">
        <div className="flex flex-col md:gap-3 gap-2">
          <LabelBasketForm text={"Город доставки"} />
          <Select
            className={`h-[48px] px-2 text-[16px] rounded-[10px] bg-secondary text-txtSecondary`}
            defaultValue={"1"}
          >
            <Select.Option value="1">Ташкент</Select.Option>
          </Select>
        </div>
        <div className="flex flex-col md:gap-3 gap-2">
          <LabelBasketForm text={"Способ получения"} />
          <button
            onClick={() => setIsChecked(!isChecked)}
            className="min-h-[68px] select-none cursor-pointer p-[16px_18px] rounded-[10px] flex items-start gap-[16px] bg-secondary"
          >
            <div className="rounded-full flex items-center justify-center border-[2px] border-darkGreen w-[24px] h-[24px] flex-shrink-0">
              <div
                className={`w-[14px] h-[14px] rounded-full ${
                  isChecked ? "bg-darkGreen" : ""
                }`}
              ></div>
            </div>
            <div className="flex flex-col text-start gap-1">
              <span className="text-[12px] text-txtSecondary2">
                Платное доставка
              </span>
              <h4 className="text-mainBlack text-[14px] font-medium">
                Курьером выбранное вами время
              </h4>
            </div>
          </button>
        </div>
        <div className="flex flex-col md:gap-3 gap-2">
          <LabelBasketForm text={"Район"} />
          <Select
            className={`h-[48px] text-[16px] px-2 border border-line rounded-[8px] text-txtSecondary`}
            defaultValue={"1"}
          >
            <Select.Option value="1">Выберите район</Select.Option>
          </Select>
        </div>
        <div className="grid grid-cols-2 md:gap-x-3 gap-x-2 md:gap-y-5 gap-y-4">
          <div className="flex flex-col md:gap-3 gap-2">
            <LabelBasketForm text={"Дом"} />
            <InputBasketForm value={"Ташкент"} />
          </div>
          <div className="flex flex-col md:gap-3 gap-2">
            <LabelBasketForm text={" Улица"} />
            <InputBasketForm value={"Ташкент"} />
          </div>
          <div className="flex flex-col md:gap-3 gap-2">
            <LabelBasketForm text={"Квартира/офис"} />
            <InputBasketForm value={"Ташкент"} />
          </div>
          <div className="flex flex-col md:gap-3 gap-2">
            <LabelBasketForm text={"Подъезд"} />
            <InputBasketForm value={"Ташкент"} />
          </div>
          <div className="flex flex-col md:gap-3 gap-2">
            <LabelBasketForm text={"Этаж"} />
            <InputBasketForm value={"Ташкент"} />
          </div>
          <div className="flex flex-col md:gap-3 gap-2">
            <LabelBasketForm text={"Код домофона"} />
            <InputBasketForm value={"Ташкент"} />
          </div>
        </div>
        <div className="flex text-txtSecondary flex-col gap-3">
          <LabelBasketForm text={"Комментарий для курьера"} />
          <textarea
            className="p-4 rounded-lg text-[12px] border border-line outline-none min-h-[120px]"
            defaultValue="Например, куда именно привезти заказ, ближайший адрес или ориентир"
          />
        </div>
        <div className="flex flex-col gap-3">
          <LabelBasketForm text={"Дата и время доставки"} />
          <div className="grid grid-cols-2 gap-x-3 gap-y-5">
            <Select
              className={`md:h-[48px] h-[40px] md:text-[16px] text-[14px] px-2 border border-line rounded-[8px] text-txtSecondary`}
              defaultValue={"1"}
            >
              <Select.Option value="1">23 июня (завтра)</Select.Option>
            </Select>
            <Select
              className={`md:h-[48px] h-[40px] md:text-[16px] text-[14px] px-2 border border-line rounded-[8px] text-txtSecondary`}
              defaultValue={"1"}
            >
              <Select.Option value="1">10:00 - 22:00</Select.Option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketAddressForm;

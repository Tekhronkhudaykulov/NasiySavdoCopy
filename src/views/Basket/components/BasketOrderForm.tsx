import LabelBasketForm from "../../../components/LabelBasketForm/LabelBasketForm";
import InputBasketForm from "../../../components/InputBasketForm/InputBasketForm";
import PhoneInput from "react-phone-input-2";

function BasketOrderForm() {
  return (
    <div className="border border-line rounded-2xl p-[20px]">
      <h2 className="md:text-[20px] text-[18px] md:mb-[24px] mb-5 font-semibold">
        Получатель заказа:
      </h2>
      <div className="grid grid-cols-2 gap-x-3 gap-y-5 max-w-[420px]">
        <div className="flex flex-col md:gap-3 gap-2">
          <LabelBasketForm
            className="after:content-['*'] after:text-[#0078FF] after:ml-1"
            text={"Фамилия"}
          />
          <InputBasketForm className="text-mainBlack" value={"Mirjamol"} />
        </div>
        <div className="flex flex-col md:gap-3 gap-2">
          <LabelBasketForm
            className="after:content-['*'] after:text-[#0078FF] after:ml-1"
            text={"Имя"}
          />
          <InputBasketForm className="text-mainBlack" value={"Bexzod"} />
        </div>
      </div>
      <p className="text-txtSecondary text-[12px] max-w-[437px] my-5 leading-[1.5]">
        Мы пришлем уведомление о статусе заказа на указанный вами телефон.
        Курьер свяжется с вами по телефону для уточнения времени доставки.
      </p>
      <div className="grid grid-cols-2 gap-x-3 gap-y-5 max-w-[420px]">
        <div className="flex flex-col md:gap-3 gap-2">
          <LabelBasketForm
            className="after:content-['*'] after:text-[#0078FF] after:ml-1"
            text={"Номер телефона"}
          />
          <PhoneInput
            country={"uz"}
            defaultMask={"(..) ...-..-.."}
            placeholder="+998 (99) 111-22-33"
            alwaysDefaultMask={true}
            value={"+998991234567"}
            specialLabel=""
            inputClass="md:h-[48px] h-[40px] border border-line px-4 md:text-[16px] text-[14px] md:rounded-[8px] outline-none rounded-[6px]"
          />
        </div>
      </div>
    </div>
  );
}

export default BasketOrderForm;

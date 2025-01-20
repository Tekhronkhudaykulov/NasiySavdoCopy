import { Input, Select } from "antd";
import LabelBasketForm from "../../../components/LabelBasketForm/LabelBasketForm";
import InputBasketForm from "../../../components/InputBasketForm/InputBasketForm";
import { useState } from "react";
import { cities, delivery, regions } from "../../../hook/queries";
import { useFormContext } from "../../../context/FormContext";
import { useErrorContext } from "../../../context/ErrorContext";

function BasketAddressForm() {
  const { formData, setFormData } = useFormContext();

  const { errors, setErrors } = useErrorContext();


  console.log(errors)
  


  
  const [isChecked, setIsChecked] = useState(0);

 
  const {data: deliveryItems} = delivery();
  const {data: citiesItems} = cities();

  const [regionsId, setRegionsId] = useState()

  const {data: regionsItems} = regions(regionsId)

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
            defaultValue={""}
           
            onChange={(e: any) => {
              setRegionsId(e);
              
              setFormData("user_address_id", e)
            }}
          >
            {citiesItems?.map((item: any, ind: any) => (
            <Select.Option key={ind} value={item.id}>{item.name}</Select.Option>
            ))}
          </Select>
        </div>
        <div className="flex flex-col md:gap-3 gap-2">
          <div className="flex flex-col md:gap-3 gap-2">
            <LabelBasketForm text={"Адресс"} />
             <Input  onChange={(e: any) => {
              setFormData("address", e.target.value)
            }} className={`h-[48px] px-2 text-[16px] rounded-[10px] bg-secondary text-txtSecondary ${errors?.address ? "border-[red]" : "border-none"}`}/>
             {errors?.address && (
              <p className="text-[red] text-[12px]">{errors?.address[0]}</p>
            )}
          </div>
          <LabelBasketForm text={"Район"} />
          <Select
            className={`h-[48px] text-[16px] px-2 border border-line rounded-[8px] text-txtSecondary`}
            defaultValue={""}
            onChange={(e) => setFormData("regions", e)}
          >
            {regionsItems?.map((item: any, ind: any) => (
            <Select.Option key={ind} value={item.id}>{item.name}</Select.Option>
            ))}
          </Select>
        </div>
        <div className="flex flex-col md:gap-3 gap-2 ">
          <LabelBasketForm text={"Способ получения"} />
          {deliveryItems?.map((item: any, ind: any) => (
            <button
              onClick={() => {
                setIsChecked(item.id);
                setFormData("delivery_id", item.id)
              }}
              className={`min-h-[68px] select-none cursor-pointer p-[16px_18px] rounded-[10px] flex items-start gap-[16px] bg-secondary ${errors?.delivery_id ? "!border-[red] border-[1px]" : "border-none"}`}
          >
            <div className="rounded-full flex items-center justify-center border-[2px] border-darkGreen w-[24px] h-[24px] flex-shrink-0">
              <div
                className={`w-[14px] h-[14px] rounded-full ${
                  isChecked === item.id ? "bg-darkGreen" : ""
                }`}
              ></div>
            </div>
            <div className="flex flex-col text-start gap-1">
              <span className="text-[12px] text-txtSecondary2">
                Вид доставки
              </span>
              <h4 className="text-mainBlack text-[14px] font-medium">
               {item.name}
              </h4>
            </div>
            </button>
          ))}
           {errors?.delivery_id && (
              <p className="text-[red] text-[12px]">{errors?.delivery_id[0]}</p>
            )}
        </div>

        {isChecked === 2 && (
    <>
      <div className="grid grid-cols-2 md:gap-x-3 gap-x-2 md:gap-y-5 gap-y-4">
          <div className="flex flex-col md:gap-3 gap-2">
            <LabelBasketForm text={"Дом"} />
            <InputBasketForm onChange={(e) => setFormData("home", e.target.value)} value={""} />
          </div>
          <div className="flex flex-col md:gap-3 gap-2">
            <LabelBasketForm text={"Улица"} />
            <InputBasketForm onChange={(e) => setFormData("street", e.target.value)} value={""} />
          </div>
          <div className="flex flex-col md:gap-3 gap-2">
            <LabelBasketForm text={"Квартира/офис"} />
            <InputBasketForm onChange={(e) => setFormData("house_number", e.target.value)} value={""} />
          </div>
          <div className="flex flex-col md:gap-3 gap-2">
            <LabelBasketForm text={"Подъезд"} />
            <InputBasketForm onChange={(e) => setFormData("entrance", e.target.value)}  value={""} />
          </div>
          <div className="flex flex-col md:gap-3 gap-2">
            <LabelBasketForm text={"Этаж"} />
            <InputBasketForm onChange={(e) => setFormData("floor", e.target.value)} value={""} />
          </div>
          <div className="flex flex-col md:gap-3 gap-2">
            <LabelBasketForm text={"Код домофона"} />
            <InputBasketForm onChange={(e) => setFormData("intercom_code", e.target.value)} value={""} />
          </div>
        </div>
        <div className="flex text-txtSecondary flex-col gap-3">
          <LabelBasketForm  text={"Комментарий для курьера"} />
          <textarea
          onChange={(e) => setFormData("delivery_comment", e.target.value)}
            className="p-4 rounded-lg text-[12px] border border-line outline-none min-h-[120px]"
            defaultValue="Например, куда именно привезти заказ, ближайший адрес или ориентир"
          />
        </div>
        </>
        )}

       
        {/* <div className="flex flex-col gap-3">
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
        </div> */}
      </div>
    </div>
  );
}

export default BasketAddressForm;

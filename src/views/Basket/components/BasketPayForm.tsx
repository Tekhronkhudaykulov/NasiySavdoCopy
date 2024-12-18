import { useState } from "react";
import AnorCard from "../../ProductSingle/components/AnorCard";
import UzumCard from "../../ProductSingle/components/UzumCard";
import { getBasketList, paymentType, tariffs } from "../../../hook/queries";
import { useQuery } from "@tanstack/react-query";
import { useFormContext } from "../../../context/FormContext";

function BasketPayForm() {
  const [isRadio, setIsRadio] = useState(0);
  const [activeCard, setActiveCart] = useState(0);
  const [selected, setSelected] = useState<any>();

  const { formData, setFormData } = useFormContext();


  const { data: basketList } = useQuery({
    queryKey: ["basket"],
    queryFn: getBasketList,
  });


  
  let allPrice = basketList?.reduce((sum: any, product: any) => sum + product.price, 0);



  const durations = ["3 мес", "6 мес", "12 мес", "24 мес"];

  const {data: paymentTypeItems} = paymentType();
  const {data: tarrifItems} = tariffs();

  const [selectedItems, setSelectedItems] = useState([]);



  const handleClick = (items: []) => {
    setSelectedItems(items); 
  };
  

  return (
    <div className="border border-line md:rounded-2xl rounded-xl md:p-[20px] p-4">
      <h2 className="md:text-[20px] text-[18px] md:mb-[24px] mb-5 font-semibold">
        Способ оплаты:
      </h2>
      <div className="flex flex-col gap-2 max-w-[420px]">
        {paymentTypeItems?.map((item: any, ind: any) => (
          <button
          key={ind}
          onClick={() => {
            setIsRadio(item.id);
            setFormData("payment_id", item.id)
          }}
          className="select-none cursor-pointer md:p-[16px_18px] p-[12px_14px] rounded-[10px] flex flex-col md:gap-[11px] gap-[8px] bg-secondary"
        >
          <div className="flex md:gap-4 gap-3 items-center">
            <div className="rounded-full flex items-center justify-center border-[2px] border-darkGreen w-[24px] h-[24px]">
              <div
                className={`w-[14px] h-[14px] rounded-full ${
                  isRadio == item.id ? "bg-darkGreen" : ""
                }`}
              ></div>
            </div>
            <span className="text-[14px] font-medium text-mainBlack">
              {item.name}
            </span>
          </div>
        </button>
        ))}
        
        {isRadio === 142 && (
          <div className="md:p-4 p-3 flex flex-col md:gap-4 gap-3 border border-line rounded-[10px]">
          <div className="flex gap-2 items-center">
            {tarrifItems?.map((item: any, ind: any) => (
              <button
                key={ind}
                className={`border-[1.5px] rounded-[8px] text-[12px] font-medium md:p-[9px_12px] p-[6px_8px] ${
                  selected === item.duration
                    ? "bg-[rgb(2,115,115,.15)] text-darkGreen border-line"
                    : "text-txtSecondary2 border-line"
                }`}
                onClick={() => {
                  handleClick(item?.tariffs); 
                  setSelected(item.duration)
                }}
              >
                {item.duration}
              </button>
            ))}
          </div>
          {selectedItems?.map((item: any, ind: any) => (
        <>
          <AnorCard setActiveCart={setActiveCart} active={activeCard == 1} tariffsName={item.name} monthly_payment={item.monthly_payment}/>
          <div className="flex justify-between items-center">
          <span className="text-[12px] font-medium text-txtSecondary">
            Оплата в месяц:
          </span>
          <span className="text-mainBlack font-semibold md:text-[16px] text-[14px]">
            {item.monthly_payment?.toLocaleString("RU-ru")} сум/мес
          </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between items-center">
              <span className="text-[12px] font-medium text-txtSecondary">
                Цена товара:
              </span>
              <span className="text-mainBlack font-semibold md:text-[16px] text-[14px]">
                {allPrice?.toLocaleString("RU-ru")} сум/мес
              </span>
            </div>
            <hr className="text-line md:my-[10px] my-[6px]" />
            <div className="flex justify-between items-center">
              <span className="text-[12px] font-medium text-txtSecondary">
                Итоговая цена:
              </span>
              <span className="text-mainBlack font-semibold md:text-[16px] text-[14px]">
                {item.installment_price?.toLocaleString("RU-ru")} сум/мес
              </span>
            </div>
          </div>
        </>
          ))}
      
        </div>
        )}
      </div>
    </div>
  );
}

export default BasketPayForm;

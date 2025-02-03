import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BasketSmallProductCard from "../components/BasketSmallProductCard";
import InputBasketForm from "../../../components/InputBasketForm/InputBasketForm";
import { APP_ROUTES } from "../../../router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getBasketList, sendOrder } from "../../../hook/queries";
import { useFormContext } from "../../../context/FormContext";
import { errorNotification } from "../../../components/Notifikation/view";
import { useErrorContext } from "../../../context/ErrorContext";
import { OrderContextItems } from "../../../context/OrderContext";

const BasketOrderSummary: React.FC = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();


  const { items, setItems, extraData, setExtraData } = OrderContextItems();


  console.log( extraData);
      


    
  

  const { data: basketList } = useQuery({
    queryKey: ["basket"],
    queryFn: getBasketList,
  });

  const { formData, setFormData } = useFormContext();

  const { setErrors } = useErrorContext();


  let allPrice = basketList?.reduce((sum: any, product: any) => sum + product.price, 0);



  const {mutate, isPending } = useMutation({
    mutationFn: sendOrder,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["basket"] });
        queryClient.invalidateQueries({ queryKey: ["orderList"] });
        navigate(`${APP_ROUTES.PROFILE}/${APP_ROUTES.PROFILE_ORDERS}`)

    },
    onError: (e) => {
      // errorNotification(e)
      // @ts-ignore
      const errors = e.response.data.errors;
      setErrors(errors);
    }
  });

  const handleSendOrder = () => {
    mutate(formData);
  };


  

  return (
    <div className="border border-line  h-max p-5 sticky top-[100px] flex flex-col gap-[36px] rounded-2xl">
      {/*  */}
      <div className="flex flex-col md:gap-3 gap-2">
        <h2 className="md:text-[20px] text-[18px] font-medium text-mainBlack">
          Ваш заказ
        </h2>
        <div className="flex justify-between items-center">
          <span className="text-txtSecondary md:text-[16px] text-[14px]">
            Товары: {basketList?.length}
          </span>
          <Link
            className="text-[#03A5A5] font-medium md:text-[16px] text-[14px]"
            to={APP_ROUTES.BASKET}
          >
            Изменить
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col gap-[10px] mt-auto">
        {basketList?.map((item:any, index:any) => (
          <div key={index}>
            {index !== 0 && <hr className="text-line my-4" />}
            <BasketSmallProductCard prod={item}/>
          </div>
        ))}
      </div>
      {/*  */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="md:text-[14px] text-[12px] text-txtSecondary">
            Товары:
          </span>
          <span className="text-mainBlack font-semibold md:text-[16px] text-[14px]">
           {allPrice?.toLocaleString("ru-RU")} uzs
          </span>
        </div>
        {/* <div className="flex justify-between items-center">
          <span className="md:text-[14px] text-[12px] text-txtSecondary">
            Доставка курьером:
          </span>
          <span className="text-mainBlack font-semibold md:text-[16px] text-[14px]">
            0 uzs
          </span>
        </div> */}
        {/* <div className="flex justify-between items-center">
          <span className="md:text-[14px] text-[12px] text-txtSecondary">
            Скидка по промокоду:
          </span>
          <span className="text-mainBlack font-semibold md:text-[16px] text-[14px]">
            0 uzs
          </span>
        </div> */}
          <div className="flex justify-between items-center">
            <span className="md:text-[14px] text-[12px] text-txtSecondary">
              Итого:
            </span>
            <span className="text-mainBlack font-semibold md:text-[16px] text-[14px]">
            {allPrice?.toLocaleString("ru-RU")} uzs
            </span>
          </div>  
          {extraData === "Рассрочку" && (
            items?.map((item: any) => (
              <div className="flex justify-between items-center">
              <span className="md:text-[14px] text-[12px] text-txtSecondary">
                Итого в {item.name}
              </span>
              <span className="text-mainBlack font-semibold md:text-[16px] text-[14px]">
              {item.installment_price?.toLocaleString("ru-RU")} uzs
              </span>
            </div>
            ))
        )}
    
      </div>
      {/*  */}
      {/* <div className="flex flex-col gap-3">
        <label className="md:text-[14px] text-[12px] text-txtSecondary font-medium">
          Есть промокод?
        </label>
        <InputBasketForm
          className="text-txtSecondary2 border-none bg-secondary md:text-[14px] text-[12px] font-medium"
          placeHolder="Введите промокод"
          value="SHAMSPROMO"
        />
      </div> */}
      {/*  */}
      <button onClick={() => handleSendOrder()} className="flex justify-center rounded-[8px] text-white bg-[#03a5a5] hover:bg-darkGreen md:p-[14px_32px] p-[10px_26px]">
        {isPending ? "Loading..." : "Оформить"}
      </button>
    </div>
  );
};

export default BasketOrderSummary;

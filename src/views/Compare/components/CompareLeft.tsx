import { useState } from "react";
import { ASSETS } from "../../../assets/img/assets";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { imgUrl } from "../../../helpers/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { add } from "../../../hook/queries";
import { useErrorContext } from "../../../context/ErrorContext";

function CompareLeft({value} : any) {
  const [show, setShow] = useState(false);

  const queryClient = useQueryClient();

  const { setErrors } = useErrorContext();
  


  const addMutaionBasketList = useMutation({
    mutationFn: add,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
      queryClient.invalidateQueries({ queryKey: ["rasprodaja"] });
      queryClient.invalidateQueries({ queryKey: ["novinki"] });
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
      queryClient.invalidateQueries({ queryKey: ["cardInfo"] });
    
      queryClient.invalidateQueries({ queryKey: ["productViews"] });

    },
    onError: (res) => {
      // errorNotification(res.message)
      // @ts-ignore
      const errors = res.response.data.errors;
      setErrors(errors);
    }
  });

  const handleAddToBasket = (productId: any) => {
    addMutaionBasketList.mutate({ product_id: productId, amount: 1 });
  };
  
  return (
    <div>
      <div className="md:flex hidden flex-col max-w-[276px] items-start">
        <div className="w-[245px] h-[250px]">
          <img
            className="w-full h-full object-cover"
            src={`${imgUrl}/${value.photo}`}
            alt=""
          />
        </div>
        <h2 className="text-[#060606] font-medium my-[10px]">
          {value.name}
        </h2>
        <h3 className="text-mainBlack text-[20px] font-semibold">
        {value.price.toLocaleString("ru-RU")} сум
        </h3>
        <button onClick={() => handleAddToBasket(value.id)} className="mt-4 text-blue font-medium">В корзину</button>
      </div>
      <div className="flex md:hidden border border-line p-4 gap-2 rounded-[16px]">
        <div className="w-[63px] flex-shrink-0 h-[full]">
          <img
            className="w-full h-full object-cover"
            src={`${imgUrl}/${value.photo}`}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-[#060606] font-medium">
            {value.name}
          </h2>
          <div className="flex justify-between gap-2">
            <h3 className="text-mainBlack text-[20px] font-semibold">
              {value.price.toLocaleString("ru-RU")} сум
            </h3>
            <button className="text-[14px] text-darkGreen font-medium">
              Изменить
            </button>
          </div>
        </div>
      </div>
      <div className="md:mt-[60px] mt-2 flex flex-col gap-[24px]">
        <h2
          onClick={() => setShow(!show)}
          className="flex gap-3 items-center text-mainBlack text-[20px] font-medium cursor-pointer"
        >
          Основные характеристики {show ? <FaAngleUp /> : <FaAngleDown />}
        </h2>
        <p
          className={`leading-[1.5] text-[12px] ${show ? "" : "text-hidden-7"}`}
        >
         {value.description_ru}
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        {value.productProperties?.map((item: any, ind: any) => (
            <div className="pb-4 border-b flex flex-col gap-1 border-line">
            <span className="text-txtSecondary2 text-[14px]">{item.key_name}</span>
            <p className="text-[#060606] font-medium text-hidden-1">
            {item.value_name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompareLeft;

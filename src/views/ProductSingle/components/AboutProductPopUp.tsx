import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { add } from "../../../hook/queries";
import { useMutation, useQueryClient } from "@tanstack/react-query";
function AboutProductPopUp({ setAboutPopUp, item }: any) {
  const [show, setShow] = useState(false);

  const queryClient = useQueryClient();


  const addMutation = useMutation({
    mutationFn: add,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
  });

  const handleAddToBasket = (productId: any) => {
    addMutation.mutate({ product_id: productId, amount: 1 });
  };

  return (
    <div className="fixed inset-0 z-[999]">
      <div
        onClick={() => setAboutPopUp(false)}
        className="bg-[#212121] absolute opacity-[.2] inset-0 w-full h-full"
      ></div>
      <div className="lg:w-[710px] md:w-[550px] w-full bg-white absolute overflow-auto aboutProductScroll right-0 h-screen top-0 md:rounded-[16px_0_0_0] md:p-[36px] p-[20px]">
        <div className="min-h-screen">
          <div className="flex justify-between items-center mb-4">
            <h2 className="md:text-[24px] text-[20px] font-medium">О товаре</h2>
            <button onClick={() => setAboutPopUp(false)}>
              <IoClose className="text-[34px] text-mainBlack" />
            </button>
          </div>
          <p
            className={`text-gray md:text-[14px] text-[12px] mb-2 leading-[1.5] ${
              show ? "" : "text-hidden-7"
            }`}
          >
            {item?.description_ru}
          </p>
          <button
            onClick={() => setShow(!show)}
            className="text-[#03a5a5] text-[12px] font-medium flex items-center gap-2"
          >
            {show ? "Закрыть" : "Читать далее "}{" "}
            {show ? <FaAngleUp /> : <FaAngleDown />}
          </button>
          <div className="mt-[24px]">
            <h3 className="font-medium">Общие характеристики</h3>
            <div className="mt-4 flex flex-col gap-3">
              {item?.productProperties?.map((value: any, ind: any) => (
                 <div key={ind} className="border-b border-line flex justify-between items-center pb-4 text-[12px]">
                 <span className="text-txtSecondary font-medium">{value.key_name}</span>
                 <span className="text-mainBlack font-medium">{value.value_name}</span>
               </div>
              ))}
            </div>
          </div>
          <div className="mt-[24px]">
            {/* <h3 className="font-medium">Дополнительная информация</h3>
            <p
              className={`text-gray md:text-[14px] text-[12px] mt-4 leading-[1.5] `}
            >
              Lorem ipsum dolor sit amet consectetur. Aliquam ornare eget hac
              cursus. Pellentesque ullamcorper phasellus placerat pellentesque.
              Adipiscing neque lectus at congue rhoncus tincidunt nisi ac.
              Sapien ullamcorper accumsan mus faucibus suspendisse integer
              turpis eu. Habitant urna vitae dis nibh libero dictum et. Aliquam
              tortor elit egestas sit. Nunc duis sodales lobortis aliquam.
              Adipiscing tristique vulputate turpis ornare felis nisl massa nam.
              Bibendum risus malesuada proin lacinia urna maecenas. Egestas
              lobortis auctor eget sit nunc eu phasellus.
            </p> */}
            <div className="mt-[22px] flex items-center justify-between">
              <h2 className="md:text-[24px] text-[16px] font-semibold text-mainBlack">
                {item?.price.toLocaleString("ru-RU")} сум
              </h2>
              <button onClick={() => handleAddToBasket(item?.id)} className="md:p-[18px_36px] md:text-[16px] text-[12px] p-[12px_24px] font-medium text-white rounded-[6px] bg-darkGreen">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProductPopUp;

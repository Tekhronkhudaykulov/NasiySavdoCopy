import { Checkbox } from "antd";
import { ASSETS } from "../../../assets/img/assets";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FiTrash2 } from "react-icons/fi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { add, minus, productByTagQuery, remove } from "../../../hook/queries";
import { errorNotification } from "../../../components/Notifikation/view";
function BasketSingleCard({
  isChecked,
  index,
  onCheckChange,
  item,
}: {
  setAllChecked: any;
  isChecked: boolean;
  index: number;
  onCheckChange: any;
  item: any;
}) {
  const queryClient = useQueryClient();

  const { data: newProd } = productByTagQuery("novinki");

  const { data: saleProd } = productByTagQuery("rasprodaja");

  const addMutation = useMutation({
    mutationFn: add,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
      queryClient.invalidateQueries({ queryKey: ["novinki"] });
      queryClient.invalidateQueries({ queryKey: ["rasprodaja"] });
      queryClient.invalidateQueries({ queryKey: ["cardInfo"] });
    },
    onError: (err) => {
      errorNotification(err.message);
    },
  });

  const minusMutation = useMutation({
    mutationFn: minus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
      queryClient.invalidateQueries({ queryKey: ["cardInfo"] });
      queryClient.invalidateQueries({ queryKey: ["novinki"] });
      queryClient.invalidateQueries({ queryKey: ["rasprodaja"] });
    },
  });

  const removeMutation = useMutation({
    mutationFn: remove,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
      queryClient.invalidateQueries({ queryKey: ["novinki"] });
      queryClient.invalidateQueries({ queryKey: ["rasprodaja"] });
    },
  });

  const handleAddToBasket = (productId: any) => {
    addMutation.mutate({ product_id: productId, amount: 1 });
  };

  const handeMinusToBasket = (productId: any) => {
    minusMutation.mutate({ product_id: productId });
  };

  const handleRemoveToBasket = (productId: unknown) => {
    removeMutation.mutate({ product_id: productId });
  };

  const priceWithComma: string = "9,882,000"; // Vergul bilan berilgan narx

  // Vergullarni olib tashlash
  const priceWithoutComma: string = priceWithComma.replace(/,/g, "");

  // Raqamga aylantirish
  const priceNumber: number = Number(priceWithoutComma);


  return (
    <div className="border-t py-[20px] border-line relative flex md:flex-row flex-col items-start justify-between">
      <div className="flex flex-col xl:gap-5 gap-4">
        <div className="flex gap-4 relative md:flex-row flex-col">
          <div className="md:static absolute right-[22px] top-[50px] self-center">
            <Checkbox
              onChange={onCheckChange(index)}
              checked={isChecked}
            ></Checkbox>
          </div>
          <div className="xl:w-[100px] xl:h-[126px] md:w-[90px] rounded-[6px] md:h-[115px] bg-[#efefef]">
            <img
              className="h-full object-contain w-full rounded-[6px]"
              src={ASSETS.CardImg}
              alt=""
            />
          </div>
          <div className="xl:max-w-[360px] max-w-[320px] flex flex-col">
            <h2 className="text-mainBlack font-[500] md:text-[16px] text-[14px] text-hidden-2">
              {item?.product?.name}
            </h2>
            <div className="flex md:flex-col gap-2 md:mt-auto mt-4 justify-between">
              <div className="text-[14px] flex gap-1 md:flex-row flex-col">
                <span className="text-gray">Продовец:</span>
                <span className="text-mainBlack font-medium">
                  {item?.product?.brand?.name}
                </span>
              </div>
              <div className="text-[14px] flex gap-1 md:flex-row flex-col">
                <span className="text-gray">Размер:</span>
                <span className="text-mainBlack font-medium">24см</span>
              </div>
              <div className="text-[14px] flex gap-1 md:flex-row flex-col">
                <span className="text-gray">Цвет:</span>
                <span className="text-mainBlack font-medium">Черный</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[130px] md:flex hidden"></div>
          <div className="bg-buttonBg mx-auto md:mx-0 p-[10px_14px] flex gap-5 items-center rounded-[8px]">
            <button
              onClick={() => {
                handeMinusToBasket(item?.product?.id);
                // if (currentNumber !== 1) {
                //   setCurrentNumber(currentNumber - 1);
                // }
              }}
              className={`${item?.amount === 1 && "text-line"}`}
            >
              <RemoveIcon fontSize="small" />
            </button>
            <span className="text-[16px] text-mainBlack">{item?.amount}</span>
            <button
              onClick={() => {
                handleAddToBasket(item?.product?.id);
                // setCurrentNumber(currentNumber + 1);
              }}
            >
              <AddIcon fontSize="small" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex md:flex-col flex-row-reverse justify-between md:w-max w-full md:items-end">
        <button
          onClick={() => handleRemoveToBasket(item?.product?.id)}
          className="flex gap-1 text-txtSecondary md:static absolute top-[40px] right-[18px]"
        >
          <FiTrash2 className="md:text-[18px] text-[22px]" />
          <span className="md:block hidden">Удалить</span>
        </button>
        <div className="md:flex flex-col grid grid-cols-2 w-full items-end gap-x-2 gap-y-2 md:gap-y-0 md:mt-[34px] mt-5">
          <p className="bg-pink md:mb-3 text-textPink md:text-[14px] text-[12px] font-[500] w-max px-[6px] py-[4px] rounded-[6px]">
            35 000 сум x 12
          </p>
          <p className="text-mainBlack md:text-[20px] text-[16px] font-[600] md:mb-[4px]">
            {item?.price.toLocaleString("ru-RU")} сум
          </p>
          <p className="text-gray font-[400] md:text-[14px] text-[12px] line-through">
            260 000 сум
          </p>
        </div>
      </div>
    </div>
  );
}

export default BasketSingleCard;

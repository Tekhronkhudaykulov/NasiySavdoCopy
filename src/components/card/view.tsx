import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  Basket,
  BasketBought,
  Favourite,
  Favourited,
  Scale,
  Star,
} from "../../assets/icon";
import { ASSETS } from "../../assets/img/assets";
import { useState } from "react";
import { APP_ROUTES } from "../../router";
import { tokenName } from "../../helpers/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { add, addFavourites,  cardInfo,  productByCategory,  productByTagQuery, profileQuery, similarProduct } from "../../hook/queries";
import { errorNotification } from "../Notifikation/view";
import { useErrorContext } from "../../context/ErrorContext";

interface CardProps {
  discount?: boolean;
  setIsNumberModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  prod: any;
}

const Card = ({ discount, setIsNumberModalOpen, prod }: CardProps) => {

  const navigate = useNavigate()

  const { setErrors } = useErrorContext();


  const [searchParamsValue] = useSearchParams();



  const queryClient = useQueryClient();

  const {id} = useParams();



  const { data: newProd } = productByTagQuery("novinki");
  const { data: saleProd } = productByTagQuery("rasprodaja");




  const query = searchParamsValue.get("query") || "";

 
  const { data: cardInfoList } = useQuery({
    queryKey: ["cardInfo"],
    queryFn: cardInfo,
  });

  const [authed, setAuthed] = useState(
    Boolean(localStorage.getItem(tokenName)),
  );

  const addMutaionBasketList = useMutation({
    mutationFn: add,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
      queryClient.invalidateQueries({ queryKey: ["rasprodaja"] });
      queryClient.invalidateQueries({ queryKey: ["novinki"] });
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
      queryClient.invalidateQueries({ queryKey: ["cardInfo"] });
      queryClient.invalidateQueries({ queryKey: ["similar" + id] });
      queryClient.invalidateQueries({ queryKey: ["productViews"] });
      queryClient.invalidateQueries({ queryKey: ["search" + query] });
      queryClient.invalidateQueries({ queryKey: ["categoryProd" + id] });

    },
    onError: (res) => {
      // errorNotification(res.message)
      // @ts-ignore
      const errors = res.response.data.errors;
      setErrors(errors);
    }
  });

  const addMutationFavouriteList = useMutation({
    mutationFn: addFavourites,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
      queryClient.invalidateQueries({ queryKey: ["rasprodaja"] });
      queryClient.invalidateQueries({ queryKey: ["novinki"] });
      queryClient.invalidateQueries({ queryKey: ["similar" + id] });
      queryClient.invalidateQueries({ queryKey: ["productViews"] });
      queryClient.invalidateQueries({ queryKey: ["search" + query] });
    },
  });

  const handleAddToBasket = (productId: any) => {
    addMutaionBasketList.mutate({ product_id: productId, amount: 1 });
  };

  const handleAddToFavouriteList = (productId: any) => {
    addMutationFavouriteList.mutate({ product_id: productId });
  };

  return (
    <>
      <div className="relative flex flex-col h-full rounded-lg">
        {/* Sale Badge */}
        <div className="absolute z-[1] top-2 left-2 bg-gradient-sale text-[11px] md:text-[12px] font-[400] text-white px-2 py-1 md:rounded-md rounded-[4px]">
          Sale
        </div>
        {/* Heart Icon */}
        {authed ? (
        <button
        onClick={() => {
          handleAddToFavouriteList(prod?.id);
        }}
        className="absolute top-[11px] right-[11px]"
      >
        {prod?.isFavorite ? <Favourited /> : <Favourite />}
        </button>
        ) : (
          <button
          onClick={() => {
            setIsNumberModalOpen(true);
          }}
          className="absolute top-[11px] right-[11px]"
        >
          {prod?.isFavorite ? <Favourited /> : <Favourite />}
        </button>
        )}
   
        {/*  Balance Icon */}
       {authed ? (
         <button
         onClick={() => {
           navigate(APP_ROUTES.COMPARE)
         }}
         className="cursor-pointer absolute top-10 right-[9px]"
       >
         <Scale />
       </button>
        ) : (
          <button
          onClick={() => {
            setIsNumberModalOpen(true);
          }}
          className="cursor-pointer absolute top-10 right-[9px]"
        >
          <Scale />
        </button>
        )}
        {/* Product Image */}
        <Link to={`${APP_ROUTES.PRODUCTSINGLE}/${prod?.id}`}>
          <img
            className="w-full 2md:min-h-[235px] rounded-[10px]"
            src={ASSETS.CardImg}
            alt="Product Image"
          />
        </Link>
        {/* Product Name */}
        <div className="p-[8px] h-full flex flex-col">
          <div className="flex items-center gap-x-[4px]">
            <Star />
            <p className="text-gray md:text-[12px] text-[10px] font-[500]">
              4.9 {`(${prod?.rating} оценок)`}
            </p>
          </div>
          <Link
            to={`/productSingle`}
            className="text-mainBlack font-[400] md:text-[16px] text-[12px] mt-[6px] text-hidden-2"
          >
            {prod?.name}
          </Link>
          <div className="flex justify-between gap-1 items-end mt-1">
            <div>
              <p className="text-gray md:min-h-[14px] min-h-[10px] font-[400] text-[10px] line-through mt-[6px]">
                {discount ? " 260 000 сум" : ""}
              </p>
              <p className="text-mainBlack mt-auto md:text-[16px] text-[12px] font-[600] my-[4px]">
                {prod?.price.toLocaleString("ru-RU")}
              </p>
              <p className="bg-pink text-textPink md:text-[12px] text-[10px] font-[500] w-max px-[6px] py-[3px] rounded-[6px]">
                35 000 сум x 12 месяц
              </p>
            </div>
            {authed && (
              <button
                onClick={() => {
                  handleAddToBasket(prod?.id);
                }}
                className={`md:w-[42px] w-[24px] p-1 cursor-pointer md:h-[42px] h-[24px] flex-shrink-0 flex items-center justify-center ${
                  prod?.isCart ? "bg-green" : "bg-secondary"
                } rounded-[100px]`}
              >
                {prod?.isCart ? <Basket /> : <BasketBought />}
              </button>
            )}
          </div>
          {!authed && (
            <div
              onClick={() => {
                setIsNumberModalOpen(true);
              }}
              className="flex items-center mt-[12px] md:gap-x-[11px] gap-x-[6px]"
            >
              <button className="text-gray md:w-full md:text-[14px] text-[10px] font-[500] bg-buttonBg md:py-[14px] py-[6px] md:px-[20px] px-[8px] md:rounded-[100px] rounded-[6px]">
                Купить в один клик
              </button>
              <div
                className={`md:w-[42px] w-[24px] p-1 cursor-pointer md:h-[42px] h-[24px] flex-shrink-0 flex items-center justify-center ${
                  prod?.isCart ? "bg-green" : "bg-secondary"
                } rounded-[100px]`}
              >
                {prod?.isCart ? <Basket /> : <BasketBought />}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;

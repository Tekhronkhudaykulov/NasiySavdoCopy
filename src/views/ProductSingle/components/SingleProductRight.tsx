import { useState } from "react";
import {
  Favourite,
  Favourited,
  Scale,
  Share,
  Star,
} from "../../../assets/icon";
import AnorCard from "./AnorCard";
import UzumCard from "./UzumCard.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { add, addFavourites, productTariffs, setCompare,  } from "../../../hook/queries.ts";
import { useNavigate, useParams } from "react-router-dom";
import { APP_ROUTES } from "../../../router/index.ts";
import { tokenName } from "../../../helpers/api.tsx";
import SendNum from "../../../modal/auth/SendNum.tsx";
import { useFormContext } from "../../../context/FormContext.tsx";

function SingleProductRight({ data }: any) {

  const {id} = useParams()

  const {data: productTariffsItems} = productTariffs(id);



  


  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [activeCard, setActiveCart] = useState(0);
  const [selected, setSelected] = useState<string>("6 мес");

  const [selectedTarrifs, setSelectedTarrifs] = useState<any>([]);

  

  const handleClick = (index: any) => {
    // setSelectedTarrifs(data[index].tarrifs);
    setSelectedTarrifs(index);
    
  };



  const durations = ["3 мес", "6 мес", "12 мес", "24 мес"];

  const [isNumberModalOpen, setIsNumberModalOpen] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);


  const addMutation = useMutation({
    mutationFn: add,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
      queryClient.invalidateQueries({ queryKey: ["cardInfo"] });

      
      queryClient.invalidateQueries({ queryKey: ["productQuery"] });
      queryClient.invalidateQueries({ queryKey: ["productByTag", "novinki", 1] });


    },
  });

  const addFavouritesMutaion = useMutation({
    mutationFn: addFavourites,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
      queryClient.invalidateQueries({ queryKey: ["detail" + data.id] });
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
      queryClient.invalidateQueries({ queryKey: ["productQuery"] });
      queryClient.invalidateQueries({ queryKey: ["productByTag", "novinki", 1] });

      queryClient.invalidateQueries({ queryKey: ["rasprodaja"] });

    },
  });

  const setCompareMutation = useMutation({
    mutationFn: setCompare,
    onSuccess: () => {
      navigate(APP_ROUTES.COMPARE)
    },
  });

  const handleAddToBasket = (productId: any) => {
    addMutation.mutate({ product_id: productId, amount: 1 });
  };


  const handleAddToFavourite = (productId: any) => {
    addFavouritesMutaion.mutate({ product_id: productId, });
  };

  const [authed, setAuthed] = useState(
    Boolean(localStorage.getItem(tokenName)),
  );


  const handleAddCompate = (productId: any) => {
    setCompareMutation.mutate({ product_id: productId });
  };

  const [active, setActive] = useState(undefined);

  
  
  return (

  <>
   {isNumberModalOpen && (
        <SendNum
          setIsCodeModalOpen={setIsCodeModalOpen}
          isNumberModalOpen={isNumberModalOpen}
          setIsNumberModalOpen={setIsNumberModalOpen}
        />
    )}
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between md:gap-[30px] lg:gap-[20px] xl:gap-[30px] gap-[12px]">
        {authed ? (
          <button onClick={() => handleAddCompate(data?.id)} className="text-mainBlack flex md:gap-[12px] gap-[8px] items-center">
          <Scale />
          <span className="md:text-[14px] text-[10px]">Сравнить</span>
        </button>
        ) : (
          <button  onClick={() => {
            setIsNumberModalOpen(true);
          }} className="text-mainBlack flex md:gap-[12px] gap-[8px] items-center">
          <Scale />
          <span className="md:text-[14px] text-[10px]">Сравнить</span>
        </button>
        )}
      
        <button className="text-mainBlack flex md:gap-[12px] gap-[8px] items-center">
          <Share />
          <span className="md:text-[14px] text-[10px]">Поделиться</span>
        </button>
        {authed ? (
          <button
          className="text-mainBlack flex md:gap-[12px] gap-[8px] items-center"
          onClick={() => {
            handleAddToFavourite(data?.id)
          }}
        >
          {data?.isFavorite ? <Favourited /> : <Favourite />}
          <button className="absolute top-[11px] right-[11px]"></button>
          <span className="md:text-[14px] text-[10px]">В избранное</span>
        </button>
        ) : (
          <button
          className="text-mainBlack flex md:gap-[12px] gap-[8px] items-center"
          onClick={() => {
            setIsNumberModalOpen(true);
          }}
        >
          {data?.isFavorite ? <Favourited /> : <Favourite />}
          <button className="absolute top-[11px] right-[11px]"></button>
          <span className="md:text-[14px] text-[10px]">В избранное</span>
        </button>
        )}
    
      </div>
      <div className="bg-buttonBg rounded-[16px] md:p-[20px_16px] p-[16px] flex flex-col md:gap-5 gap-3">
        <h2 className="text-mainBlack md:text-[24px] text-[20px] font-semibold">
          {data?.price?.toLocaleString()} сум
        </h2>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <span className="text-[12px] text-txtSecondary2 font-medium">
              Продавец:
            </span>
            <div className="flex items-center gap-[2px]">
              <span className="text-black text-[12px] font-medium">
                {data?.brand?.name}
              </span>
              <div className="flex items-center gap-x-[2px]">
                <Star />
                {/* <p className="text-gray text-[12px] font-[500]">4.0</p> */}
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-[12px] text-txtSecondary2 font-medium">
              Доставка:
            </span>
            <span className="text-black text-[12px] font-medium">
              По BTC почте
            </span>
          </div>
        </div>
        <div className="flex gap-[8px]">
          <button className="md:text-[16px] text-[14px] md:max-w-[201px] w-full font-medium md:py-[14px] py-[10px] bg-darkGreen text-white rounded-[8px]">
            Купить сейчас
          </button>
          {authed ? (
              <button
              onClick={() => handleAddToBasket(data?.id)}
              className="md:text-[16px] text-[14px] md:max-w-[201px] w-full font-medium md:py-[14px] py-[10px] text-darkGreen bg-[rgb(2,115,115,.15)] rounded-[8px]"
            >
              В корзину
            </button>
          ): (
            <button
            onClick={() =>  setIsNumberModalOpen(true)}
            className="md:text-[16px] text-[14px] md:max-w-[201px] w-full font-medium md:py-[14px] py-[10px] text-darkGreen bg-[rgb(2,115,115,.15)] rounded-[8px]"
          >
            В корзину
          </button>
          )}
     
        </div>
      </div>
      <div className="border border-line rounded-2xl flex flex-col gap-5 p-[20px_16px]">
        <h2 className="text-[20px] font-semibold">Рассрочка платежа:</h2>
        <div className="flex flex-col gap-4 rounded-[10px]">
          <div className="flex gap-2 items-center">
            {productTariffsItems?.map((duration: any, ind: any) => (
              <button
                key={ind}
                className={`border-[1.5px] rounded-[8px] text-[12px] font-medium p-[9px_12px] ${
                  selected === ind
                    ? "bg-[rgb(2,115,115,.15)] text-darkGreen border-line"
                    : "text-txtSecondary2 border-line"
                }`}
                onClick={() => {
                  setSelected(ind);
                  handleClick(duration.tariffs)
                  
                }}
              >
                {duration.duration}
              </button>
            ))}
          </div>

          {selectedTarrifs?.map((item: any, ind: any) => (
        <>
        <div onClick={() => {
          setActive(ind);
        }} className={`${active === ind ? "border-darkGreen border-[1px] rounded-[12px]" : ""}`}>
          <AnorCard items={item} />
        </div>
        </>
          ))}
          
         
          {/* <UzumCard setActiveCart={setActiveCart} active={activeCard == 2} /> */}
        </div>
      </div>
    </div>
  </>
  
  );
}

export default SingleProductRight;

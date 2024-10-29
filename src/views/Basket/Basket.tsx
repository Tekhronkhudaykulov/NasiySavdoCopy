import { useQuery } from "@tanstack/react-query";
import { BreadCrumb } from "../../components";

// import EmptyBasket from "../../components/EmptyBusket/view";
import BasketProducts from "./components/BasketProducts";
import { getBasketList } from "../../hook/queries";
import EmptyBasket from "../../components/EmptyBusket/view";

function Basket() {
  const { data: basketList } = useQuery({
    queryKey: ["basket"],
    queryFn: getBasketList,
  });

  console.log(basketList, "basket");

  return (
    <>
      <BreadCrumb items={[{ name: "Корзина" }]} />
      {basketList?.length > 0 ? (
        <BasketProducts prod={basketList} />
      ) : (
        <EmptyBasket />
      )}
    </>
  );
}

export default Basket;

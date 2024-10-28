import { useQuery } from "@tanstack/react-query";
import { BreadCrumb } from "../../components";

// import EmptyBasket from "../../components/EmptyBusket/view";
import BasketProducts from "./components/BasketProducts";
import { getBasketList } from "../../hook/queries";

function Basket() {
  const { data: basketList } = useQuery({
    queryKey: ["basket"],
    queryFn: getBasketList,
  });

  return (
    <>
      <BreadCrumb items={[{ name: "Корзина" }]} />
      {/* <EmptyBasket /> */}
      <BasketProducts prod={basketList} />
    </>
  );
}

export default Basket;

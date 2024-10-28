import { BreadCrumb } from "../../components";

// import EmptyBasket from "../../components/EmptyBusket/view";
import BasketProducts from "./components/BasketProducts";

function Basket() {
  return (
    <>
      <BreadCrumb items={[{ name: "Корзина" }]} />
      {/* <EmptyBasket /> */}
      <BasketProducts />
    </>
  );
}

export default Basket;

import { BreadCrumb } from "../../../components";

import BasketFormLeft from "../components/BasketFormLeft";
import BasketOrderSummary from "../components/BasketOrderSummary";

function BasketForm() {
  return (
    <>
      <BreadCrumb
        items={[
          { name: "Корзина", link: "/basket" },
          { name: "Оформление заказа" },
        ]}
      />
      <section className="basket_form">
        <div className="flex items-end gap-4 mb-[30px] mt-[30px]">
          <h2 className="md:text-[24px] text-[20px] font-semibold text-mainBlack">
            Оформление заказа
          </h2>
        </div>
        <div className="grid xl:grid-cols-[2fr,1fr] lg:grid-cols-[1fr,1fr] gap-5">
          <BasketFormLeft />
          <BasketOrderSummary />
        </div>
      </section>
    </>
  );
}

export default BasketForm;

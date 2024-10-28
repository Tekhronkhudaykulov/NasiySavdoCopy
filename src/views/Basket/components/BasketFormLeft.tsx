import BasketAddressForm from "./BasketAddressForm";
import BasketOrderForm from "./BasketOrderForm";
import BasketPayForm from "./BasketPayForm";
function BasketFormLeft() {
  return (
    <div className="flex flex-col gap-[24px]">
      <BasketAddressForm />
      <BasketOrderForm />
      <BasketPayForm />
    </div>
  );
}

export default BasketFormLeft;

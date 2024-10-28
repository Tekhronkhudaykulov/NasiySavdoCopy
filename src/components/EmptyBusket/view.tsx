import { Link } from "react-router-dom";
import { EmptyOrder } from "../../assets/icon";

function EmptyBasket() {
  return (
    <div className="h-[70vh] mb-[5rem] grid place-content-center">
      <div className="text-center max-w-[380px] flex flex-col gap-[40px]">
        <img className="mx-auto" src={EmptyOrder} />
        <div className="flex flex-col gap-[12px]">
          <h3 className="text-[20px] font-medium text-mainBlack">
            В корзине пока пусто.
          </h3>
          <p className="text-txtSecondary">
            Посмотрите каталог чтобы найти товары, или воспользуйтесь поиском
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            className="py-[14px] max-w-[200px] w-full rounded-[8px] bg-darkGreen text-white"
            to={``}
          >
            Перейти в каталог
          </Link>
          <Link
            className="py-[14px] max-w-[200px] w-full rounded-[8px] bg-[rgb(2,115,115,.15)] text-darkGreen font-medium"
            to={`/`}
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmptyBasket;

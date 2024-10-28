import { FaPlus } from "react-icons/fa6";
import { Categories } from "../../components";
import CompareLeft from "./components/CompareLeft";
import CompareRight from "./components/CompareRight";

function Compare() {
  return (
    <>
      <Categories />
      <div className="flex items-end justify-between md:mb-[30px] my-3">
        <h1 className="text-[48px] 2md:text-[25px] font-extrabold text-mainBlack">
          Сравнение товаров
        </h1>
        <button className="flex 2md:hidden items-center gap-3 text-mainBlack">
          <span>Добавить товары</span>
          <FaPlus />
        </button>
      </div>
      <div className="grid lg:grid-cols-[400px_1fr] grid-cols-[300px_1fr] 2md:grid-cols-1 gap-[60px]">
        <CompareLeft />
        <CompareRight />
      </div>
    </>
  );
}

export default Compare;

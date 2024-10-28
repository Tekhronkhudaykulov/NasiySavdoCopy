import MaterialProduct from "./MaterialProduct";
import RuchkaProducts from "./RuchkaProducts";
import SizeProducts from "./SizeProducts";
import TypeProducts from "./TypeProducts";

function CompareRight() {
  return (
    <div className="md:bg-[#F9F9F9] rounded-[18px] flex flex-col md:gap-[60px] gap-[20px] h-max lg:p-[40px] md:p-[30px] overflow-hidden">
      <div className="overflow-auto flex lg:gap-[60px] gap-[40px] categScroll">
        <button
          className={`lg:text-[24px] text-[20px] font-semibold hover:text-[#D168A7] ${
            true ? "text-[#D168A7]" : ""
          }`}
        >
          Скаваротка
        </button>
        <button
          className={`lg:text-[24px] text-[20px] font-semibold hover:text-[#D168A7]`}
        >
          Казань
        </button>
        <button
          className={`lg:text-[24px] text-[20px] font-semibold hover:text-[#D168A7]`}
        >
          Тарелка
        </button>
        <button
          className={`lg:text-[24px] text-[20px] font-semibold hover:text-[#D168A7]`}
        >
          Чайник
        </button>
        <button
          className={`lg:text-[24px] text-[20px] font-semibold hover:text-[#D168A7]`}
        >
          Блюдо
        </button>
      </div>
      <div className="flex flex-wrap lg:gap-[60px] md:gap-[40px] gap-[20px] 2md:grid grid-cols-2 justify-between">
        <TypeProducts />
        <MaterialProduct />
        <SizeProducts />
        <RuchkaProducts />
      </div>
      <button className="bg-blue text-white w-full p-[14px_32px] rounded-[100px]">
        Добавить товар
      </button>
    </div>
  );
}

export default CompareRight;

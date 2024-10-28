import { CategoryIcon, CategoryOpen } from "../../../assets/icon";

const Category = ({
  setActiveCateg,
  activeCateg,
}: {
  setActiveCateg: any;
  activeCateg: any;
}) => {
  return (
    <>
      <button
        onClick={() => setActiveCateg(!activeCateg)}
        className={`lg:p-[12px_16px] md:p-[10px_16px] p-[6px_10px] flex 2md:hidden items-center lg:gap-[6px] gap-[4px] transition duration-200 rounded-[100px] ${
          activeCateg
            ? "bg-green text-darkGreen"
            : "bg-darkGreen text-white hover:bg-[#129b9b]"
        }`}
      >
        <span>
          {activeCateg ? (
            <div className="w-[24px] h-[24px]">
              <img src={`${CategoryOpen}`} alt="" />
            </div>
          ) : (
            <div className="lg:w-[24px] w-[22px]">
              <CategoryIcon />
            </div>
          )}
        </span>
        <span className="lg:text-[16px] md:text-[15px] text-[12px]">
          Категории
        </span>
      </button>
    </>
  );
};

export default Category;

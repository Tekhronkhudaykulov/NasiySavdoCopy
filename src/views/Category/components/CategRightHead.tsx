import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import CategoryMobileFilter from "./CategoryMobileFilter";
import SortMobileFilter from "./SortMobileFilter";
import ColorFilterMobile from "./ColorFilterMobile";
import PriceFilterMobile from "./PriceFilterMobile";
import { MobileSearchIcon } from "../../../assets/icon";
const buttonData = [
  "Чехлы",
  "Кабели",
  "Зарядные устройства и кабели",
  "Смартфоны Android",
  "Подставки и держатели",
  "Защитные стекла и пленки",
  "Сетевые зарядные устройства",
];

function CategRightHead() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showFilter, setShowFilter] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check on mount
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between 2md:flex-col 2md:gap-3 items-start">
        <form className="mb-4 hidden gap-2 rounded-[8px] 2md:flex p-[10px_14px] bg-buttonBg w-full">
          <button type="submit">
            <MobileSearchIcon className="#212121" />
          </button>
          <input
            className="w-full text-[12px] text-txtSecondary2 outline-none bg-transparent"
            type="text"
            placeholder="Искать товары"
          />
        </form>
        <div className="flex flex-col 2md:flex-row 2md:justify-between 2md:w-full 2md:items-center gap-[6px]">
          <h1 className="text-mainBlack xl:text-[24px] text-[20px] 2md:text-[16px] font-semibold">
            Смартфоны и телефоны
          </h1>
          <span className="text-txtSecondary2 text-[14px] 2md:text-[12px]">
            22,867 товаров
          </span>
        </div>
        <div className="flex items-center 2md:justify-between 2md:w-full gap-[10px]">
          <span className="font-medium text-txtSecondary2 2md:text-[14px]">
            Сначала показывать:
          </span>
          <select className="outline-none cursor-pointer 2md:text-[14px] text-mainBlack bg-transparent font-medium">
            <option value="">Популярные</option>
          </select>
        </div>
        <div className="hidden items-center 2md:flex 2md:justify-between 2md:w-full gap-[10px]">
          <span className="font-medium text-txtSecondary2 2md:text-[14px]">
            Фильтр:
          </span>
          <button onClick={() => setShowFilter(true)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.12132 4.87868C9.29289 6.05025 9.29289 7.94975 8.12132 9.12132C6.94975 10.2929 5.05025 10.2929 3.87868 9.12132C2.70711 7.94975 2.70711 6.05025 3.87868 4.87868C5.05025 3.70711 6.94975 3.70711 8.12132 4.87868"
                stroke="#212121"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 7H9"
                stroke="#212121"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.1213 14.8787C21.2929 16.0502 21.2929 17.9497 20.1213 19.1213C18.9497 20.2929 17.0502 20.2929 15.8787 19.1213C14.7071 17.9497 14.7071 16.0502 15.8787 14.8787C17.0502 13.7071 18.9497 13.7071 20.1213 14.8787"
                stroke="#212121"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 17H15"
                stroke="#212121"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative flex items-center">
        <div
          ref={scrollContainerRef}
          className="flex gap-[8px] overflow-auto categScroll no-scrollbar flex-1"
        >
          {buttonData.map((item, idx) => (
            <button
              key={idx}
              className="md:p-[10px_12px] p-[8px_10px] md:text-[16px] text-[14px] flex-shrink-0 rounded-[8px] bg-buttonBg text-mainBlack font-medium"
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={handleScrollLeft}
          className={`text-white rounded-full 2md:hidden top-[50%] translate-y-[-50%] absolute left-0 w-[32px] aspect-square grid place-content-center bg-mainBlack ${
            isAtStart ? "hidden" : ""
          }`}
          disabled={isAtStart}
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleScrollRight}
          className={`text-white rounded-full 2md:hidden top-[50%] translate-y-[-50%] absolute right-0 w-[32px] aspect-square grid place-content-center bg-mainBlack ${
            isAtEnd ? "hidden" : ""
          }`}
          disabled={isAtEnd}
        >
          <FaChevronRight />
        </button>
      </div>
      {showFilter && (
        <div className="fixed inset-0 h-screen overflow-auto categScroll flex flex-col bg-white z-[200] p-4">
          <div className="flex justify-between pb-5">
            <h3 className="text-mainBlack font-semibold">Фильтр</h3>
            <button
              className="text-[14px] text-darkGreen"
              onClick={() => setShowFilter(false)}
            >
              Отменить
            </button>
          </div>
          <CategoryMobileFilter />
          <SortMobileFilter />
          <ColorFilterMobile />
          <PriceFilterMobile />
          <div className="mt-auto">
            <button
              onClick={() => setShowFilter(false)}
              className="bg-darkGreen font-medium text-white py-[14px] rounded-[8px] w-full mt-8"
            >
              Сохранить
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategRightHead;

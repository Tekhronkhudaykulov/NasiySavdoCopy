import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function CategLists() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[16px] font-normal cursor-pointer flex items-center gap-2">
        <FaChevronLeft className="text-txtSecondary2" />
        Все категории
      </h3>
      <div className="pl-4 flex flex-col gap-4">
        <h4 className="cursor-pointer text-txtSecondary2 font-normal flex items-center gap-2">
          <FaChevronLeft />
          Электроника
        </h4>
        <div className="flex flex-col gap-4 pl-4">
          <Link
            to={`/category`}
            className="text-[14px] text-txtSecondary2 hover:text-mainBlack"
          >
            Смартфоны и телефоны
          </Link>
          <Link
            to={`/category`}
            className="text-[14px] text-txtSecondary2 hover:text-mainBlack"
          >
            Аксессуары для смартфонов
          </Link>
          <Link
            to={`/category`}
            className="text-[14px] text-txtSecondary2 hover:text-mainBlack"
          >
            Запчасти и ремонт
          </Link>
          <Link
            to={`/category`}
            className="text-[14px] text-txtSecondary2 hover:text-mainBlack"
          >
            Кнопочные телефоны
          </Link>
          <Link
            to={`/category`}
            className="text-[14px] text-txtSecondary2 hover:text-mainBlack"
          >
            Смартфоны
          </Link>
          <Link
            to={`/category`}
            className="text-[14px] text-txtSecondary2 hover:text-mainBlack"
          >
            Стационарные телефоны
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategLists;

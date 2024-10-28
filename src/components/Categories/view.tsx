import { Button } from "antd";
import { ASSETS } from "../../assets/img/assets";
import { Link } from "react-router-dom";
import "./categories.scss";
import { SelectArea } from "..";

const Categories = () => {
  const list = [
    {
      name: "Распродажа",
      img: ASSETS.Shopping,
    },
    {
      name: "Акции",
      img: ASSETS.Shopping,
    },
    {
      name: "Скидки",
      img: ASSETS.Shopping,
    },
    {
      name: "Цены дня",
      img: ASSETS.Shopping,
    },
    {
      name: "Сезонные товары",
      img: ASSETS.Shopping,
    },
  ];
  return (
    <div className="py-[10px] 2md:hidden block">
      <div className="flex items-center gap-3">
        <div className="flex gap-3 overflow-x-auto">
          {list.map((item, idx) => (
            <Link className="block" to={""} key={idx}>
              <Button
                type="link"
                className="category-btn bg-buttonBg rounded-[10px] gap-[10px] hover:!bg-green hover:!text-darkGreen h-[40px] text-gray"
              >
                <img
                  src={item.img}
                  className="min-w-[24px] w-[24px] h-[24px]"
                  alt=""
                />
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
        <SelectArea className="ml-auto" />
      </div>
    </div>
  );
};

export default Categories;

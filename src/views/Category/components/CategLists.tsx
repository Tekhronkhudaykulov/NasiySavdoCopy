import { FaChevronLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { categoryQuery } from "../../../hook/queries";

function CategLists() {
  const { data, isLoading } = categoryQuery();

  const { id } = useParams();
  if (isLoading) return;
  console.log(data);

  let selectedCateg = data?.find((item: any) => item.id == id);
  console.log(selectedCateg);
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[16px] font-normal cursor-pointer flex items-center gap-2">
        <FaChevronLeft className="text-txtSecondary2" />
        Все категории
      </h3>
      <div className="pl-4 flex flex-col gap-4">
        <h4 className="cursor-pointer text-txtSecondary2 font-normal flex items-center gap-2">
          <FaChevronLeft />
          {selectedCateg?.name}
        </h4>
        <div className="flex flex-col gap-4 pl-4 max-h-[250px] overflow-auto">
          {selectedCateg.childs.map((child: any) => {
            return (
              <Link
                to={`/category`}
                className="text-[14px] text-txtSecondary2 hover:text-mainBlack"
              >
                {child.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategLists;

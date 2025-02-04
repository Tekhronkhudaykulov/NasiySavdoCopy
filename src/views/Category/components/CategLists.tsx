import { FaChevronLeft } from "react-icons/fa";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { categoryQuery } from "../../../hook/queries";
import { APP_ROUTES } from "../../../router";

function CategLists() {
  const { data, isLoading } = categoryQuery();
  const [searchParams] = useSearchParams();
  const categId = searchParams.get("categId");
  const subCategId = searchParams.get("subCategId");

  if (isLoading) return;

  let selectedCateg = data?.find((item: any) => item.id == categId);

  return (
    <div className="flex flex-col gap-4">
      {(subCategId || categId) && (
        <Link
          to={`/category`}
          className="cursor-pointer  text-txtSecondary2 font-normal hover:text-mainBlack flex items-center gap-2"
        >
          <FaChevronLeft className="text-txtSecondary2" />
          Все категории
        </Link>
      )}
      <div className="pl-4 flex flex-col gap-4 max-h-[280px] overflow-auto">
        {!subCategId &&
          !categId &&
          data.map((categ: any) => {
            return (
              <Link
                to={`/category?categId=${categ.id}`}
                className="cursor-pointer  text-txtSecondary2 font-normal hover:text-mainBlack flex items-center gap-2"
              >
                {categ?.name}
              </Link>
            );
          })}
        {categId && (
          <Link
            to={`/category`}
            className="cursor-pointer  text-txtSecondary2 font-normal hover:text-mainBlack flex items-center gap-2"
          >
            <FaChevronLeft />
            {selectedCateg?.name}
          </Link>
        )}
        <div className="flex flex-col gap-4 pl-4 max-h-[250px] overflow-auto">
          {selectedCateg?.childs.map((child: any) => {
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set("subCategId", child.id);
            return (
              <Link
                to={`${APP_ROUTES.CATEGORY}?${newSearchParams.toString()}`}
                className={`text-[14px] text-txtSecondary2 hover:text-mainBlack ${subCategId == child.id ? "!text-black" : ""}`}
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

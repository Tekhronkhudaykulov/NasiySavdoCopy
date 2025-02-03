import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../router";

function SubCateg({
  subCateg,
  active,
  activeArrow,
  index,
  activeCategory,
}: {
  subCateg: { name: string };
  active: any;
  activeArrow: any;
  index: any;
  activeCategory: any;
}) {
  return (
    <Link
      to={`${APP_ROUTES.CATEGORY}?categId=${activeCategory}&subCategId=${index}`}
      className={`${
        active ? "bg-buttonBg text-mainBlack" : "text-txtSecondary2"
      } flex justify-between items-center py-[7.5px] text-[14px] px-[10px] rounded-[6px] gap-3 cursor-pointer`}
    >
      <span>{subCateg.name}</span>
      {activeArrow && (
        <span>
          <FaAngleRight />
        </span>
      )}
    </Link>
  );
}

export default SubCateg;

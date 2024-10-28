import { Categories } from "../../components";
import CategLeft from "./components/CategLeft";
import CategRight from "./components/CategRight";
function CategoryPage() {
  return (
    <>
      <Categories />
      <h1 className="md:text-[24px] text-[20px] mt-[36px] 2md:mt-5 md:mb-[20px] mb-4 text-txtSecondary2 font-normal">
        Категории
      </h1>
      <div className="grid grid-cols-[285px_1fr] 2md:grid-cols-1 gap-5">
        <CategLeft />
        <CategRight />
      </div>
    </>
  );
}

export default CategoryPage;

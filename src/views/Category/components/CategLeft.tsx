import CategPriceForm from "./CategPriceForm";
import CategLists from "./CategLists";
import CategColor from "./CategColor";
import CategBrand from "./CategBrend";

function CategLeft() {
  return (
    <div className="border border-line 2md:hidden h-max rounded-[12px] p-4 flex flex-col gap-[24px]">
      <CategLists />
      <CategPriceForm />
      <CategColor />
      <CategBrand title={"Бренд"} />
      <CategBrand title={"Особенности"} />
    </div>
  );
}

export default CategLeft;

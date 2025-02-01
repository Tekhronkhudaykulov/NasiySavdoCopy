import CategPriceForm from "./CategPriceForm";
import CategLists from "./CategLists";
import CategColor from "./CategColor";
import CategBrand from "./CategBrend";
import { useParams } from "react-router-dom";
import { filter } from "../../../hook/queries";

function CategLeft() {
  const {id} = useParams();

  const {data} = filter(id);

  console.log(data, 'data')
 
  return (
    <div className="border border-line 2md:hidden h-max rounded-[12px] p-4 flex flex-col gap-[24px]">
      <CategLists />
      <CategPriceForm />
      {/* <CategColor /> */}
      {data?.filter?.data?.map((item: any, ind: any) => (
      <CategBrand title={item.name} items={item}/>
      ))}
      {/* <CategBrand title={"Бренд"} items={data}/> */}
      {/* <CategBrand title={"Особенности"} /> */}
    </div>
  );
}

export default CategLeft;

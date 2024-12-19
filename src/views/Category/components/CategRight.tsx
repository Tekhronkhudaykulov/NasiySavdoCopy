import { useParams, useSearchParams } from "react-router-dom";
import PaginationComp from "../../../components/Pagination/PaginationComp";
import { ProductsSection } from "../../../sections";
import CategRightHead from "./CategRightHead";
import { productByCategory } from "../../../hook/queries";

function CategRight() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const {id} = useParams();

  const {data: categoryData} = productByCategory(id)


  return (
    <div className="flex flex-col gap-[36px] overflow-hidden">
      <CategRightHead product={categoryData}/>
      <ProductsSection products={categoryData} />
      {/* <PaginationComp current={+page} totalPages={10} total={120} limit={10} /> */}
    </div>
  );
}

export default CategRight;

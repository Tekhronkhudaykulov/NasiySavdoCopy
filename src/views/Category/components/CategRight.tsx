import { useSearchParams } from "react-router-dom";
import PaginationComp from "../../../components/Pagination/PaginationComp";
import { ProductsSection } from "../../../sections";
import CategRightHead from "./CategRightHead";

function CategRight() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  return (
    <div className="flex flex-col gap-[36px] overflow-hidden">
      <CategRightHead />
      <ProductsSection products={[...Array(20)]} />
      <PaginationComp current={+page} totalPages={10} total={120} limit={10} />
    </div>
  );
}

export default CategRight;

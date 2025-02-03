

import { useSearchParams } from "react-router-dom";
import { BreadCrumb } from "../../components"
import { ProductsSection } from "../../sections"
import { productQuery, productSearch } from "../../hook/queries";
import ErrorList from "../../components/ErrorList/ErrorList";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "antd";

const AllProducts = () => {

  const [searchParams,setSearchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;

  const {data:products} = productQuery(page);


    return (
       <>
        <ErrorList/>
        <BreadCrumb items={[{ name: "Все" }]} />
        <ProductsSection
         className="md:mt-[48px] mt-[20px]"
         title="Все"
         products={products?.data}
      />
         <Pagination
              className="flex items-center justify-center py-5"
              total={products?._meta?.totalCount}
              current={+page}
              pageSize={products?._meta.perPage}
              onChange={(page) => {
                setSearchParams({ page: String(page) });
              }}
              showSizeChanger={false}
        />
      </>
    )
}

export default AllProducts
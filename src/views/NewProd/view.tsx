

import { useSearchParams } from "react-router-dom";
import { BreadCrumb } from "../../components"
import { ProductsSection } from "../../sections"
import { productByTagQuery, productQuery, productSearch } from "../../hook/queries";
import ErrorList from "../../components/ErrorList/ErrorList";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "antd";

const NewProducts = () => {

  const [searchParams,setSearchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;


  const { data: newProd } = productByTagQuery("novinki", page);
    return (
       <>
        <ErrorList/>
        <BreadCrumb items={[{ name: "Новинки" }]} />
        <ProductsSection
         className="md:mt-[48px] mt-[20px]"
         title="Новинки"
         products={newProd?.data}
      />
         <Pagination
              className="flex items-center justify-center py-5"
              total={newProd?._meta?.totalCount}
              current={+page}
              pageSize={newProd?._meta.perPage}
              onChange={(page) => {
                setSearchParams({ page: String(page) });
              }}
              showSizeChanger={false}
        />
      </>
    )
}

export default NewProducts
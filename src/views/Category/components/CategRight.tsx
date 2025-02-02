import { useParams, useSearchParams } from "react-router-dom";
import PaginationComp from "../../../components/Pagination/PaginationComp";
import { ProductsSection } from "../../../sections";
import CategRightHead from "./CategRightHead";
import { productByCategory } from "../../../hook/queries";
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

function CategRight() {
  const [searchParams,setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const {id} = useParams();

  const {data: categoryData} = productByCategory(id);

  const [categoryItems, setCategoryItems] = useState(null);
console.log(categoryItems,'asfnmlkasnflksnfla');


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = `https://api.nasiyasavdo.uz/api/product/by-category?id=${id}&page=${page}`
        const response = await axios.get(url);
        setCategoryItems(response.data.data)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [id, page]);




  console.log(categoryData,'dataasfaf')

  

  return (
    <div className="flex flex-col gap-[36px] overflow-hidden">
      <CategRightHead product={categoryItems}/>

      <ProductsSection 
      // @ts-ignore
       products={categoryItems} />
      {/* <PaginationComp current={+page} totalPages={categoryData?.totalCount} total={categoryData?.totalCount} limit={categoryData?.totalCount} /> */}
      <Pagination
              className="flex items-center justify-center py-5"
              total={categoryData?._meta?.totalCount}
              current={+page}
              pageSize={categoryData?._meta.perPage}
              onChange={(page) => {
                setSearchParams({ page: String(page) });
              }}
              showSizeChanger={false}

            />
    </div>
  );
}

export default CategRight;

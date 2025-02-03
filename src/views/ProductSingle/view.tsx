import { BreadCrumb } from "../../components";
import { useEffect, useState } from "react";

import { ProductsSection } from "../../sections";
import AboutProductPopUp from "./components/AboutProductPopUp";
import SingleProductRight from "./components/SingleProductRight";
import SingleProductLeft from "./components/SingleProductLeft";
import ReviewProductPopUp from "./components/ReviewProductPopUp";
import { useParams } from "react-router-dom";
import { productDetail, productTariffs, productViews, similarProduct } from "../../hook/queries";
import ErrorList from "antd/es/form/ErrorList";

function ProductSingle() {
  const [aboutPopUp, setAboutPopUp] = useState(false);
  const [reviewPopUp, setReviewPoUp] = useState(false);


  useEffect(() => {
    if (aboutPopUp || reviewPopUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [aboutPopUp, reviewPopUp]);

  const { id } = useParams();


  const { data } = productDetail(id);

  const {data: similarProdList} = similarProduct(id)

  const {data: productViewsList} = productViews();

 
  return (
    <>
      <BreadCrumb items={[{ name: "Продукт название" }]} />
      <div className="grid xl:grid-cols-[2fr,1fr] grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-[28px] md:mb-[60px] mb-6">
        <SingleProductLeft
          prod={data}
          setAboutPopUp={setAboutPopUp}
          setReviewPoUp={setReviewPoUp}
        />
        <SingleProductRight  data={data} />
      </div>
      {aboutPopUp && <AboutProductPopUp setAboutPopUp={setAboutPopUp} item={data} />}
      {reviewPopUp && <ReviewProductPopUp setReviewPoUp={setReviewPoUp} />}
      <ProductsSection
        className="md:mt-[48px] mt-5"
        title="Ещё может подойти"
        products={similarProdList}
      />
      <ProductsSection
        className="md:mt-[48px] mt-5"
        title="Просмотренные товары"
        products={productViewsList}
      />
    </>
  );
}

export default ProductSingle;

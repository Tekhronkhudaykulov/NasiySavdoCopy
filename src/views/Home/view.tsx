import { useQuery } from "@tanstack/react-query";
import { Banner, Categories } from "../../components";
import { cardInfo, getFavouriteList, productByTagQuery, productQuery } from "../../hook/queries";
import { AdvertisingSection, ProductsSection } from "../../sections";
import { errorSlice } from "../../store";
import { useEffect } from "react";
import { tokenName } from "../../helpers/api";

const Home = () => {
  const { data: newProd } = productByTagQuery("novinki");
  const { data: saleProd } = productByTagQuery("rasprodaja");

  const {data: products} = productQuery();

  console.log(products,'hjbhj');
  

    const {setError} = errorSlice();

    const { data: cardInfoList } = useQuery({
      queryKey: ["cardInfo"],
      queryFn: cardInfo,
    });

    const { data: favouriteList } = useQuery({
      queryKey: ["favourites"],
      queryFn: getFavouriteList,
    });

    

    
  return (
    <>
      <Banner />
      <Categories />
      <ProductsSection
        className="mt-[15px]"
        title="Новинки"
        products={products}
      />
      {/* <ProductsSection
        className="md:mt-[48px] mt-[20px]"
        title="Распродажа"
        products={saleProd}
      /> */}
      <AdvertisingSection />
      {/* <ProductsSection products={[...Array(10)]} /> */}
    </>
  );
};

export default Home;

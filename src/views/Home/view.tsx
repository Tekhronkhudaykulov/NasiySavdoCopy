import { useQuery } from "@tanstack/react-query";
import { Banner, Categories } from "../../components";
import { cardInfo, getFavouriteList, productByTagQuery, productQuery } from "../../hook/queries";
import { AdvertisingSection, ProductsSection } from "../../sections";
import { errorSlice } from "../../store";
import { useEffect, useRef } from "react";
import { tokenName } from "../../helpers/api";
import { useErrorContext } from "../../context/ErrorContext";
import { errorNotification } from "../../components/Notifikation/view";
import ErrorList from "../../components/ErrorList/ErrorList";

const Home = () => {
  const { data: newProd } = productByTagQuery("novinki");
  const { data: saleProd } = productByTagQuery("rasprodaja");
  const { data: aksi } = productByTagQuery("aksii");

 

    const { data: cardInfoList } = useQuery({
      queryKey: ["cardInfo"],
      queryFn: cardInfo,
    });

    const { data: favouriteList } = useQuery({
      queryKey: ["favourites"],
      queryFn: getFavouriteList,
    });


    const { data: products } = useQuery({
      queryKey: ["product"],
      queryFn: productQuery,
    });


   



    

    
  return (
    <>
    <ErrorList/>
      <Banner />
      <Categories/>
      <ProductsSection
        className="mt-[15px]"
        title="Новинки"
        products={newProd}
      />
      <ProductsSection
        className="md:mt-[48px] mt-[20px]"
        title="Распродажа"
        products={saleProd}

      />
      <ProductsSection
        className="md:mt-[48px] mt-[20px]"
        title="Акции"
        products={aksi}

      />
      <ProductsSection
        className="md:mt-[48px] mt-[20px]"
        title="Все"
        products={products}
      />
      <AdvertisingSection />
      {/* <ProductsSection products={[...Array(10)]} /> */}
    </>
  );
};

export default Home;

import { useQuery } from "@tanstack/react-query";
import { Banner, Categories } from "../../components";
import { cardInfo, getFavouriteList, productByTagQuery, productQuery } from "../../hook/queries";
import { AdvertisingSection, ProductsSection } from "../../sections";

import ErrorList from "../../components/ErrorList/ErrorList";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router";

const Home = () => {
  const { data: newProd } = productByTagQuery("novinki", 1);
  const { data: saleProd } = productByTagQuery("rasprodaja", 1);
  const { data: aksi } = productByTagQuery("aksii", 1);

 

    const { data: cardInfoList } = useQuery({
      queryKey: ["cardInfo"],
      queryFn: cardInfo,
    });

    const { data: favouriteList } = useQuery({
      queryKey: ["favourites"],
      queryFn: getFavouriteList,
    });


   

    const {data:products} = productQuery(1)


   



    const navigate = useNavigate()

    
  return (
    <>
    <ErrorList/>
      <Banner />
      <Categories/>
      <ProductsSection
        className="md:mt-[48px] mt-[20px]"
        title="Все"
        products={products?.data}
      />
      <div className="flex justify-center">
      <Button
        className="!bg-darkGreen w-max !text-white w-full md:h-[56px] h-[46px] rounded-[8px] text-[14px] md:text-[16px] font-[500]"
        type="default"
        onClick={() => navigate(APP_ROUTES.ALL_PRODUCTS)}
        >
        Посмотреть все
      </Button>
      </div>
      <ProductsSection
        className="mt-[15px]"
        title="Новинки"
        products={newProd?.data}
      />
       <div className="flex justify-center">
      <Button
        className="!bg-darkGreen w-max !text-white w-full md:h-[56px] h-[46px] rounded-[8px] text-[14px] md:text-[16px] font-[500]"
        type="default"
        onClick={() => navigate(APP_ROUTES.NEW_PRODUCTS)}
        >
        Посмотреть все
      </Button>
      </div>
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
    
      <AdvertisingSection />
      {/* <ProductsSection products={[...Array(10)]} /> */}
    </>
  );
};

export default Home;

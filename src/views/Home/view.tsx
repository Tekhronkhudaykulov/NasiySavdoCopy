import { Banner, Categories } from "../../components";
import { productByTagQuery } from "../../hook/queries";
import { AdvertisingSection, ProductsSection } from "../../sections";

const Home = () => {
  const { data: newProd } = productByTagQuery("novinki");
  const { data: saleProd } = productByTagQuery("rasprodaja");

  return (
    <>
      <Categories />
      <Banner />
      <ProductsSection
        className="md:mt-[48px] mt-[20px]"
        title="Новинки"
        products={newProd}
      />
      <ProductsSection
        className="md:mt-[48px] mt-[20px]"
        title="Распродажа"
        products={saleProd}
      />
      <AdvertisingSection />
      <ProductsSection products={[...Array(10)]} />
    </>
  );
};

export default Home;

import BreadCrumb from "../../components/breadCump/view";
// import EmptyFavourite from "../../components/EmptyFavourite/view";
import { ProductsSection } from "../../sections";

function Favourite() {
  return (
    <>
      <BreadCrumb items={[{ name: "Избранные" }]} />
      {/* <EmptyFavourite /> */}
      <ProductsSection
        className="md:mt-[48px] mt-2"
        title="Избранное"
        products={[...Array(10)]}
      />
    </>
  );
}

export default Favourite;

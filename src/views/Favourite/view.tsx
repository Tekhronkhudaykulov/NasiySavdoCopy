import { useQuery } from "@tanstack/react-query";
import BreadCrumb from "../../components/breadCump/view";
// import EmptyFavourite from "../../components/EmptyFavourite/view";
import { ProductsSection } from "../../sections";
import { getFavouriteList } from "../../hook/queries";

function Favourite() {
  const { data: favouriteList } = useQuery({
    queryKey: ["favourites"],
    queryFn: getFavouriteList,
  });

  return (
    <>
      <BreadCrumb items={[{ name: "Избранные" }]} />
      {/* <EmptyFavourite /> */}
      <ProductsSection
        className="md:mt-[48px] mt-2"
        title="Избранное"
        products={favouriteList}
      />
    </>
  );
}

export default Favourite;

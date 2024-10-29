import { useQuery } from "@tanstack/react-query";
import BreadCrumb from "../../components/breadCump/view";
// import EmptyFavourite from "../../components/EmptyFavourite/view";
import { ProductsSection } from "../../sections";
import { getFavouriteList } from "../../hook/queries";
import EmptyFavourite from "../../components/EmptyFavourite/view";

function Favourite() {
  const { data: favouriteList } = useQuery({
    queryKey: ["favourites"],
    queryFn: getFavouriteList,
  });

  console.log(favouriteList, "los");

  return (
    <>
      <BreadCrumb items={[{ name: "Избранные" }]} />
      {favouriteList?.length > 0 ? (
        <ProductsSection
          className="md:mt-[48px] mt-2"
          title="Избранное"
          products={favouriteList}
        />
      ) : (
        <EmptyFavourite />
      )}
    </>
  );
}

export default Favourite;

import { useSearchParams } from "react-router-dom";
import { BreadCrumb } from "../../components"
import { ProductsSection } from "../../sections"
import { productSearch } from "../../hook/queries";
import ErrorList from "../../components/ErrorList/ErrorList";

const Search = () => {
  const [searchParamsValue] = useSearchParams();
  const query = searchParamsValue.get("query") || "";

  const {data: searchValue} = productSearch(query);

    return (
       <>
        <ErrorList/>
        <BreadCrumb items={[{ name: "Поиск" }]} />
        <ProductsSection products={searchValue} />
      </>
    )
}

export default Search
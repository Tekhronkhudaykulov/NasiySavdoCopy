import MainCateg from "./MainCateg";
import { useState } from "react";
import SubCateg from "./SubCateg";
import SubCategLast from "./SubCategLast";
import { CategoriesDatas } from "../../../data/CategData";
import { categoryQuery } from "../../../hook/queries";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../router";

const MultiLevelDropdown = () => {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState<number | undefined>(
    undefined,
  );
  const [activeSubCategory, setActiveSubCategory] = useState<
    number | undefined
  >(undefined);
  const [activeSubSubCategory, setActiveSubSubCategory] = useState<
    number | undefined
  >(undefined);

  const { data, isLoading } = categoryQuery();

  console.log(data);
  return (
    <div className="dropdown-container fixed top-0 h-screen overflow-auto z-[20] bg-[#fff] w-full py-4">
      <div className="wrapper flex h-full">
        <div className="grid grid-cols-4 w-full pt-[100px] h-full gap-5">
          {/* Main Categories */}
          <div className="flex flex-col">
            {data?.map((categ: any, index: any) => (
              <div
                key={index}
                
                onMouseEnter={() => {
                  setActiveCategory(index);
                  setActiveSubCategory(undefined);
                  setActiveSubSubCategory(undefined);
                }}
              >
                <MainCateg
                  activeArrow={
                    categ.subcategories && categ.subcategories.length > 0
                  }
                  
                  index={categ.id}
                  active={index === activeCategory}
                  categ={categ}
                />
              </div>
            ))}
          </div>

          {/* Subcategories */}
          <div className="flex flex-col h-max sticky top-[100px]">
            {activeCategory !== undefined &&
              data[activeCategory]?.childs?.map((subCateg: any, index: any) => (
                <div
                  key={index}
                  onMouseEnter={() => {
                    setActiveSubCategory(index);
                    setActiveSubSubCategory(undefined);
                  }}
                >
                  <SubCateg
                    index={subCateg.id}
                    activeArrow={
                      subCateg.subcategories &&
                      subCateg.subcategories.length > 0
                    }
                    active={index === activeSubCategory}
                    subCateg={subCateg}
                  />
                </div>
              ))}
          </div>

          {/* Sub-Subcategories */}
          <div className="flex flex-col h-max sticky top-[100px]">
            {activeCategory !== undefined &&
              activeSubCategory !== undefined &&
              data[activeCategory]?.childs?.[activeSubCategory]?.childs?.map(
                (subCateg: any, index: any) => (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveSubSubCategory(index)}
                  >
                    <SubCateg
                      index={subCateg.id}
                      activeArrow={
                        subCateg.subcategories &&
                        subCateg.subcategories.length > 0
                      }
                      active={index === activeSubSubCategory}
                      subCateg={subCateg}
                    />
                  </div>
                ),
              )}
          </div>

          {/* Sub-Sub-Subcategories */}
          <div className="flex flex-col h-max sticky top-[100px]">
            {activeCategory !== undefined &&
              activeSubCategory !== undefined &&
              activeSubSubCategory !== undefined &&
              data[activeCategory]?.childs?.[activeSubCategory]?.childs?.[
                activeSubSubCategory
              ]?.childs?.map((subCateg: any, index: any) => (
                <div key={index}>
                  <SubCategLast index={subCateg.id} subCateg={subCateg} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiLevelDropdown;

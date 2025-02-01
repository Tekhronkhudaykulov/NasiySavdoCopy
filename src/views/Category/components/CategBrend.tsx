import { useState } from "react";
import BrandSmallBox from "./BrandSmallBox";

function CategBrand({title, items} : any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-[18px] items-start">
      <h2 className="text-mainBlack font-medium">{title}</h2>
      <div className="flex flex-col gap-[10px]">
        {items?.childs?.map((item: any) => (
        <BrandSmallBox text={item.value} />
        ))}
      
        {/* {open && (
          <>
            <BrandSmallBox text={"Adidas"} />
            <BrandSmallBox text={"Nike"} />
            <BrandSmallBox text={"Under Armor"} />
          </>
        )} */}
      </div>
      {/* <span
        onClick={() => {
          setOpen(!open);
        }}
        className="font-medium text-txtSecondary underline cursor-pointer underline-offset-4 hover:text-mainBlack"
      >
        {open ? "Свернуть" : "Посмотреть все"}
      </span> */}
    </div>
  );
}

export default CategBrand;

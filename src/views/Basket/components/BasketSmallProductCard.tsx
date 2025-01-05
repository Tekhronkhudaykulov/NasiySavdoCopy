import { ASSETS } from "../../../assets/img/assets";
import { imgUrl } from "../../../helpers/api";

function BasketSmallProductCard({prod}: any) {

  console.log(prod, 'produ');
  
  return (
    <div className="flex gap-[12px] items-center">
      <div className="md:w-[60px] w-[70px] flex-shrink-0 md:h-[76px] bg-[#efefef]">
        <img
          className="h-full w-full wobject-contain rounded-[6px]"
          src={`${imgUrl}/${prod.product.photo}`}
          alt=""
        />
      </div>
      <div className="max-w-[330px] flex flex-col">
        {/* <h2
          title="Сковорода антипригарная Elegant, с крышкой, гранитное покрытие, 24,
          26, 28 см"
          className="text-mainBlack font-[400] md:text-[14px] text-[13px] mb-1 text-hidden-2"
        >
        </h2> */}
          <p className="text-mainBlack font-[400] md:text-[14px] text-[13px] mb-1 ">
          {prod.product.name}
          </p>
        {/* <div className="flex flex-col md:gap-1 mt-auto">
          <div className="md:text-[14px] text-[12px] flex gap-1">
            <span className="text-gray">Размер:</span>
            <span className="text-mainBlack font-medium">36см</span>
          </div>
          <div className="md:text-[14px] text-[12px] flex gap-1">
            <span className="text-gray">Цвет:</span>
            <span className="text-mainBlack font-medium">Черный</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default BasketSmallProductCard;

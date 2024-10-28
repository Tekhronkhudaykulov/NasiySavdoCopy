import { ASSETS } from "../../../assets/img/assets";

function ProductInMore() {
  return (
    <div className="flex gap-4">
      <div className="h-[81px] w-[65px]">
        <img
          className="w-full h-full object-cover"
          src={ASSETS.SmallImg}
          alt=""
        />
      </div>
      <div>
        <p className="font-[600] text-[#212121] md:text-[16px] text-[14px]">
          Apple iPhone 15 Pro Max
        </p>
        <div className="flex gap-x-[12px] mt-[6px]">
          <p className="text-[#80848F] text-[12px]">256 Гб</p>
          <p className="text-[#80848F] text-[12px]">Натуральный титан</p>
        </div>
        <div className="md:mt-[16px] mt-3">
          <p className="font-[600] text-[#212121] text-[16px]">
            17 568 000 uzs
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductInMore;

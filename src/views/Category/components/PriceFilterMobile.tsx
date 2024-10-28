function PriceFilterMobile() {
  return (
    <div className="py-3 flex flex-col gap-5 border-t border-line">
      <div className="flex flex-col gap-1">
        <h3 className="text-[14px] font-medium text-mainBlack">
          Выберите параметры
        </h3>
        <span className="text-txtSecondary2 text-[12px]">Цена, сум</span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-[8px] md:flex-row flex-col items-center">
          <input
            className="p-[11px_16px] text-txtSecondary2 bg-[#F9F9F9] outline-none w-full text-[14px] border border-line rounded-[6px]"
            placeholder="от 3000"
            type="number"
          />
          <input
            className="p-[11px_16px] text-txtSecondary2 bg-[#F9F9F9] outline-none w-full text-[14px] border border-line rounded-[6px]"
            placeholder="до 54 500 000"
            type="number"
          />
        </div>
      </div>
    </div>
  );
}

export default PriceFilterMobile;

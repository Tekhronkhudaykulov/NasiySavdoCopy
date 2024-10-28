import PriceSlider from "./PriceSlider";

function CategPriceForm() {
  return (
    <div className="flex flex-col gap-[24px]">
      <h2 className="text-mainBlack font-medium">Цена</h2>
      <div className="flex flex-col gap-3">
        <div className="flex gap-[6px] items-center">
          <input
            className="p-[6px] text-txtSecondary2 outline-none w-full text-[14px] border border-line rounded-[6px]"
            placeholder="от 3000"
            type="number"
          />
          <input
            className="p-[6px] text-txtSecondary2 outline-none w-full text-[14px] border border-line rounded-[6px]"
            placeholder="до 54 500 000"
            type="number"
          />
        </div>
        <PriceSlider />
      </div>
    </div>
  );
}

export default CategPriceForm;

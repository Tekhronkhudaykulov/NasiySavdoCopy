interface Props {
  placeHolder?: string;
  value?: string;
  className?: string;
  onChange?: (e: any) => void
}
function InputBasketForm({ placeHolder, value, className,onChange }: Props) {
  return (
    <input
    onChange={onChange}
      placeholder={placeHolder || ""}
      className={`placeholder:text-txtSecondary ${
        className || "text-txtSecondary md:text-[16px] text-[14px]"
      } md:h-[48px] h-[40px] border border-line px-4 md:rounded-[8px] rounded-[6px] outline-none`}
      type="text"
      defaultValue={value || ""}
    />
  );
}

export default InputBasketForm;

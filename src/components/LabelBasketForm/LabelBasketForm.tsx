interface Props {
  className?: string;
  text?: string;
}
function LabelBasketForm({ className, text }: Props) {
  return (
    <label className={`${className} md:text-[14px] text-[12px] text-txtSecondary`} htmlFor="">
      {text}
    </label>
  );
}

export default LabelBasketForm;

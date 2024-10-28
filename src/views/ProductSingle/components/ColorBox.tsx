interface Props {
  color: string;
  active: boolean;
  onClick: () => void;
}

function ColorBox({ color, active, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`${
        active ? "border-darkGreen" : "border-line"
      } md:w-[46px] w-[40px] aspect-square cursor-pointer border-[1.5px] p-[2px] rounded-[10px]`}
    >
      <div className={`${color} w-full h-full rounded-[8px]`}></div>
    </div>
  );
}
export default ColorBox;

interface SizeBoxProps {
  text: string;
  active: boolean;
  onClick: () => void;
}
function SizeBox({ text, active, onClick }: SizeBoxProps) {
  return (
    <div
      onClick={onClick}
      className={`border-[1.5px] cursor-pointer ${
        active ? "text-darkGreen border-darkGreen" : "text-gray-500 border-line"
      } md:p-[8px_12px] p-[6px_10px] text-[14px] md:text-[16px] rounded-[8px] select-none`}
    >
      <span>{text}</span>
    </div>
  );
}

export default SizeBox;

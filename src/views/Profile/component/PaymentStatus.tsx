type PaymentStatus = "Просрочен" | "Активный" | "Отменен" | "Заверщен";
const statusStyles: Record<PaymentStatus, string> = {
  Просрочен: "text-[#FF4D4F] bg-[#FFEEEE] border-[#FF4D4F]",
  Активный: "text-[#FFA53C] border-[#FFA53C] bg-[#FFF1E8]",
  Отменен: "text-txtSecondary2 border-txtSecondary2 bg-[#FFFFFF]",
  Заверщен: "text-[#6CBD6C] border-#6CBD6C bg-[#edfeed]",
};

function PaymentStatus({ status }: { status: PaymentStatus }) {
  return (
    <span
      className={`font-medium md:text-[14px] text-[12px] border md:p-[8px_16px] p-[6px_12px] rounded-[4px] ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

export default PaymentStatus;

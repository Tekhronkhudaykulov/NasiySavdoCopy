// Define the classes for styling
const pClass = `md:text-[14px] text-[12px] text-txtSecondary2`;
const spanClass = `md:text-[14px] text-[12px] text-mainBlack font-medium`;

// Define the Order type
interface Order {
  id: string;
  status: "delivered" | "progress";
  orderDate: string;
  shipmentDate?: string;
  sentDate?: string;
  senderCity?: string;
  senderLocation?: string;
  productWeight?: string;
  productVolume?: string;
  deliveryLocation: string;
  price: string;
  date?: string;
  address?: string
}

function OrderInfos({ order }: { order: Order }) {
  return (
    <div className="flex flex-col gap-3 md:my-4 my-3">
      <div className="grid md:grid-cols-[150px_1fr] grid-cols-[110px_1fr] gap-x-4 items-end">
        <p className={`${pClass}`}>Статус</p>
        <span
          className={`${
            order?.status === "delivered"
              ? "text-darkGreen bg-green"
              : "text-[#2E80CD] bg-[#E8F1FF]"
          } text-[12px] p-[5px_16px] rounded-[4px] w-max`}
        >
          {order?.status === "delivered" ? "Доставлено" : "В процессе доставки"}
        </span>
      </div>
      <div className="grid md:grid-cols-[150px_1fr] grid-cols-[110px_1fr] gap-x-4">
        <p className={`${pClass}`}>Дата заказа</p>

        <span className={`${spanClass}`}>{
          // @ts-ignore
        order.order?.date
        }</span>
      </div>
      <div className="grid md:grid-cols-[150px_1fr] grid-cols-[110px_1fr] gap-x-4">
        <p className={`${pClass}`}>Тип доставки</p>
        <span className={`${spanClass}`}>{
          // @ts-ignore
        order.order?.delivery?.name}</span>
      </div>
      {
          // @ts-ignore
      order?.order?.sentDate && (
        <div className="grid md:grid-cols-[150px_1fr] grid-cols-[110px_1fr] gap-x-4">
          <p className={`${pClass}`}>Дата отправки</p>
          <span className={`${spanClass}`}>{
          // @ts-ignore
          order.order?.sentDate}</span>
        </div>
      )}
      {
          // @ts-ignore
      order?.order?.senderCity && (
        <div className="grid md:grid-cols-[150px_1fr] grid-cols-[110px_1fr] gap-x-4">
          <p className={`${pClass}`}>Город отправителя</p>
          <span className={`${spanClass}`}>{
          // @ts-ignore
          order.order?.senderCity}</span>
        </div>
      )}
      {
          // @ts-ignore
      order?.order?.userAddress && (
        <div className="grid md:grid-cols-[150px_1fr] grid-cols-[110px_1fr] gap-x-4">
          <p className={`${pClass}`}>Место доставки</p>
          <span className={`${spanClass}`}>{`Ул ${
          // @ts-ignore
            order.order?.userAddress?.address}, Дом ${order.order?.userAddress?.home}, Кв ${order.order?.userAddress?.house_number}`}</span>
        </div>
      )}
      {
          // @ts-ignore
      order?.order?.productWeight && (
        <div className="grid md:grid-cols-[150px_1fr] grid-cols-[110px_1fr] gap-x-4">
          <p className={`${pClass}`}>Вес товара</p>
          <span className={`${spanClass}`}>{
          // @ts-ignore
        
          order.order?.productWeight}</span>
        </div>
      )}
      {
          // @ts-ignore
      order?.order?.productVolume && (
        <div className="grid md:grid-cols-[150px_1fr] grid-cols-[110px_1fr] gap-x-4">
          <p className={`${pClass}`}>Обьем товара</p>
          <span className={`${spanClass}`}>{
          // @ts-ignore
          order.order?.productVolume}</span>
        </div>
      )}
      {/* <div className="grid md:grid-cols-[150px_1fr] grid-cols-[110px_1fr] gap-x-4">
        <p className={`${pClass}`}>Место доставки</p>
        <span className={`${spanClass}`}>{order.order?.address}</span>
      </div> */}
      {
          // @ts-ignore
      order?.order?.shipmentDate && (
        <div className="grid md:grid-cols-[150px_1fr] grid-cols-[110px_1fr] gap-x-4">
          <p className={`${pClass}`}>Дата доставки</p>
          <span className={`${spanClass}`}>{
          // @ts-ignore
          order.order?.shipmentDate}</span>
        </div>
      )}
      <div className="grid md:grid-cols-[150px_1fr] grid-cols-[110px_1fr] gap-x-4">
        <p className={`${pClass}`}>Сумма заказа</p>
        
        <span className={`${spanClass}`}>{
        // @ts-ignore
        order?.order?.price?.toLocaleString("ru-RU")} сум</span>
      </div>
      <button className={`${pClass} underline underline-offset-4 w-max`}>
        Электронный чек
      </button>
    </div>
  );
}

export default OrderInfos;

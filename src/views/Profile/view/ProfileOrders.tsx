import { useState } from "react";
import OrderEmpty from "../../../empty/OrderEmpty";
import MyOrdersTabs from "../component/MyOrdersTabs";
import OrderInfoCard from "../component/OrderInfoCard";
import { EmptyOrder } from "../../../assets/icon";

interface Product {
  name: string;
  quantity: number;
  price: string;
}
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
  products: Product[];
}
const ProfileOrders = () => {
  const [activeTab, setActiveTab] = useState("all");

  const orderData: Order[] = [
    {
      id: "123456788",
      status: "delivered",
      orderDate: "21.04.2024",
      shipmentDate: "22.04.2024",
      deliveryLocation: "Юнус-абад 16, дом-12, квартира 23",
      price: "156 000",
      products: [
        { name: "Product 1", quantity: 2, price: "8 784 000" },
        { name: "Product 2", quantity: 1, price: "8 784 000" },
        { name: "Product 2", quantity: 1, price: "8 784 000" },
      ],
    },
    {
      id: "123456782",
      status: "delivered",
      orderDate: "21.04.2024",
      shipmentDate: "22.04.2024",
      deliveryLocation: "Юнус-абад 16, дом-12, квартира 23",
      price: "156 000",
      products: [{ name: "Product 1", quantity: 2, price: "8 784 000" }],
    },
    {
      id: "123456781",
      status: "delivered",
      orderDate: "21.04.2024",
      shipmentDate: "22.04.2024",
      deliveryLocation: "Юнус-абад 16, дом-12, квартира 23",
      price: "156 000",
      products: [
        { name: "Product 1", quantity: 2, price: "8 784 000" },
        { name: "Product 2", quantity: 1, price: "8 784 000" },
      ],
    },
    {
      id: "123456789",
      status: "progress",
      orderDate: "21.04.2024",
      sentDate: "22.04.2024",
      senderCity: "Ташкент",
      senderLocation: "Юнус-абад, Улица Хийобон 77",
      productWeight: "5 кг",
      productVolume: "0.2 м³",
      deliveryLocation: "Юнус-абад 16, дом-12, квартира 23",
      price: "156 000",
      products: [{ name: "Product 1", quantity: 2, price: "8 784 000" }],
    },
  ];
  const filteredOrders = orderData.filter((order) => {
    if (activeTab === "all") return true;
    if (activeTab === "progress") return order.status === "progress";
    if (activeTab === "delivered") return order.status === "delivered";
    return false;
  });

  return (
    <div>
      <MyOrdersTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {filteredOrders.length > 0 ? (
        filteredOrders.map((order, index) => (
          <OrderInfoCard key={index} order={order} />
        ))
      ) : (
        <OrderEmpty
          title=" Ваши заказы будут отображаться здесь"
          texts=" Чтобы отслеживать статус заказа, нужно его оформить"
          img={EmptyOrder}
        />
      )}
    </div>
  );
};

export default ProfileOrders;

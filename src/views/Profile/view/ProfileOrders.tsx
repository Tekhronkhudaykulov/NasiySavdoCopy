import { useState } from "react";
import OrderEmpty from "../../../empty/OrderEmpty";
import MyOrdersTabs from "../component/MyOrdersTabs";
import OrderInfoCard from "../component/OrderInfoCard";
import { EmptyOrder } from "../../../assets/icon";
import { getOrders } from "../../../hook/queries";

interface Product {
  name: string;
  quantity: number;
  price: string;
}



const ProfileOrders = () => {
  const [activeTab, setActiveTab] = useState("all");

  const {data: orderList} = getOrders();

 


  return (
    <div>
      <MyOrdersTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {orderList?.length > 0 ? ( 
        orderList.map((order: any, index: any) => (
          <OrderInfoCard key={index} order={order} />
        ))
      ) : (
        <OrderEmpty
          title="Ваши заказы будут отображаться здесь"
          texts="Чтобы отслеживать статус заказа, нужно его оформить"
          img={EmptyOrder}
        />
      )}
    </div>
  );
};

export default ProfileOrders;

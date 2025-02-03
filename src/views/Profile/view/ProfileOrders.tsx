import { useEffect, useState } from "react";
import OrderEmpty from "../../../empty/OrderEmpty";
import MyOrdersTabs from "../component/MyOrdersTabs";
import OrderInfoCard from "../component/OrderInfoCard";
import { EmptyOrder } from "../../../assets/icon";
import { getOrders } from "../../../hook/queries";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../../../config";

interface Product {
  name: string;
  quantity: number;
  price: string;
}



const ProfileOrders = () => {
  const [activeTab, setActiveTab] = useState("all");


  const { data: orderList } = useQuery({
    queryKey: ["orderList"],
    queryFn: getOrders,
  });
  



  return (
    <div>
      <MyOrdersTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {orderList && orderList?.length > 0 ? ( 
        orderList?.map((order: any, index: any) => (
          <OrderInfoCard order={order} key={index} />
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

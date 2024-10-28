import { Button } from "antd";

function MyOrdersTabs({
  setActiveTab,
  activeTab,
}: {
  setActiveTab: any;
  activeTab: string;
}) {
  return (
    <div className="flex md:gap-x-[12px] gap-3 justify-start">
      <Button
        className={`!text-[12px] md:!text-[14px] ${
          activeTab === "all" ? "active-orders-button" : "default"
        } `}
        onClick={() => setActiveTab("all")}
      >
        Все
      </Button>
      <Button
        className={`!text-[12px] md:!text-[14px] ${
          activeTab === "progress" ? "active-orders-button" : "default"
        } `}
        onClick={() => setActiveTab("progress")}
      >
        В процессе
      </Button>
      <Button
        className={`!text-[12px] md:!text-[14px] ${
          activeTab === "delivered" ? "active-orders-button" : "default"
        } `}
        onClick={() => setActiveTab("delivered")}
      >
        История заказов
      </Button>
    </div>
  );
}

export default MyOrdersTabs;

import { Button } from "antd";

function SaleTabs({
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
        Рассрочки
      </Button>
      <Button
        className={`!text-[12px] md:!text-[14px] ${
          activeTab === "finished" ? "active-orders-button" : "default"
        } `}
        onClick={() => setActiveTab("finished")}
      >
        Завершенные
      </Button>
    </div>
  );
}

export default SaleTabs;

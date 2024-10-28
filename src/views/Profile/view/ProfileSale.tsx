import { ASSETS } from "../../../assets/img/assets";
import OrderEmpty from "../../../empty/OrderEmpty";
import { useState } from "react";
import SaleTabs from "../component/SaleTabs";
import PaymentInfoCard from "../component/PaymentInfoCard";

type PaymentStatus = "Просрочен" | "Активный" | "Отменен" | "Заверщен";

interface MonthlyPayment {
  paymentDate: string;
  paymentAmount: string;
  remainingBalance: string;
  status: "paid" | "overdue" | "upcoming";
}

interface InstallmentPlan {
  id: string;
  planType: "3-month" | "12-month";
  totalPrice: string;
  status: PaymentStatus;
  monthlyPayments: MonthlyPayment[];
}

const ProfileSale = () => {
  const [activeTab, setActiveTab] = useState("all");

  const installmentPlans: InstallmentPlan[] = [
    {
      id: "123123123",
      planType: "3-month",
      totalPrice: "15 000 000",
      status: "Просрочен",
      monthlyPayments: [
        {
          paymentDate: "20.09.2024",
          paymentAmount: "5 000 000",
          remainingBalance: "10 000 000",
          status: "paid",
        },
        {
          paymentDate: "20.10.2024",
          paymentAmount: "5 000 000",
          remainingBalance: "5 000 000",
          status: "overdue",
        },
        {
          paymentDate: "20.11.2024",
          paymentAmount: "5 000 000",
          remainingBalance: "0",
          status: "upcoming",
        },
      ],
    },
    {
      id: "122131234",
      planType: "12-month",
      totalPrice: "15 000 000",
      status: "Активный", // Main status for this plan
      monthlyPayments: [
        {
          paymentDate: "20.09.2024",
          paymentAmount: "1 250 000",
          remainingBalance: "13 750 000",
          status: "paid",
        },
        {
          paymentDate: "20.10.2024",
          paymentAmount: "1 250 000",
          remainingBalance: "12 500 000",
          status: "paid",
        },
        {
          paymentDate: "20.11.2024",
          paymentAmount: "1 250 000",
          remainingBalance: "11 250 000",
          status: "upcoming",
        },
        {
          paymentDate: "20.11.2024",
          paymentAmount: "1 250 000",
          remainingBalance: "11 250 000",
          status: "upcoming",
        },
        {
          paymentDate: "20.11.2024",
          paymentAmount: "1 250 000",
          remainingBalance: "11 250 000",
          status: "upcoming",
        },
        {
          paymentDate: "20.11.2024",
          paymentAmount: "1 250 000",
          remainingBalance: "11 250 000",
          status: "upcoming",
        },
        {
          paymentDate: "20.11.2024",
          paymentAmount: "1 250 000",
          remainingBalance: "11 250 000",
          status: "upcoming",
        },
        {
          paymentDate: "20.11.2024",
          paymentAmount: "1 250 000",
          remainingBalance: "11 250 000",
          status: "upcoming",
        },
        {
          paymentDate: "20.11.2024",
          paymentAmount: "1 250 000",
          remainingBalance: "11 250 000",
          status: "upcoming",
        },
        {
          paymentDate: "20.11.2024",
          paymentAmount: "1 250 000",
          remainingBalance: "11 250 000",
          status: "upcoming",
        },
        {
          paymentDate: "20.11.2024",
          paymentAmount: "1 250 000",
          remainingBalance: "11 250 000",
          status: "upcoming",
        },
        {
          paymentDate: "20.11.2024",
          paymentAmount: "1 250 000",
          remainingBalance: "11 250 000",
          status: "upcoming",
        },
      ],
    },
    {
      id: "12312325",
      planType: "3-month",
      totalPrice: "15 000 000",
      status: "Отменен", // Main status for this plan
      monthlyPayments: [
        {
          paymentDate: "20.09.2024",
          paymentAmount: "1 250 000",
          remainingBalance: "13 750 000",
          status: "paid",
        },
        {
          paymentDate: "20.10.2024",
          paymentAmount: "1 250 000",
          remainingBalance: "12 500 000",
          status: "upcoming",
        },
        {
          paymentDate: "20.11.2024",
          paymentAmount: "1 250 000",
          remainingBalance: "11 250 000",
          status: "upcoming",
        },
      ],
    },
    {
      id: "12312126",
      planType: "3-month",
      totalPrice: "15 000 000",
      status: "Заверщен", // Main status for this plan
      monthlyPayments: [
        {
          paymentDate: "20.09.2024",
          paymentAmount: "5 000 000",
          remainingBalance: "10 000 000",
          status: "paid",
        },
        {
          paymentDate: "20.10.2024",
          paymentAmount: "5 000 000",
          remainingBalance: "5 000 000",
          status: "paid",
        },
        {
          paymentDate: "20.11.2024",
          paymentAmount: "5 000 000",
          remainingBalance: "0",
          status: "paid",
        },
      ],
    },
  ];

  const filteredPlans = installmentPlans.filter((plan) => {
    if (activeTab === "all") return true;
    if (activeTab === "progress")
      return plan.status === "Просрочен" || plan.status === "Активный";
    if (activeTab === "finished")
      return plan.status === "Отменен" || plan.status === "Заверщен";
    return false;
  });
  return (
    <>
      <div>
        <SaleTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {filteredPlans.length > 0 ? (
          <div className="flex flex-col md:gap-4 gap-3 md:mt-5 mt-4">
            {filteredPlans.map((plan, index) => (
              <PaymentInfoCard key={index} plan={plan} />
            ))}
          </div>
        ) : (
          <OrderEmpty
            title="У вас нет рассрочки"
            texts="Загляните на главную, чтобы выбрать то что по душе"
            img={ASSETS.Vallet}
          />
        )}
      </div>
    </>
  );
};

export default ProfileSale;

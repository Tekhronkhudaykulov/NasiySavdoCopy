import { Link, Outlet, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./profile.scss";
import BreadCrumb from "../../components/breadCump/view";
import { Ava, Card, Exit, Orders, Sale } from "../../assets/icon";
import { useEffect, useState } from "react";
const Profile = () => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const profileList = [
    {
      name: "Профиль",
      link: "/profile/profile_account",
      icon: <Ava />,
    },
    {
      name: "Мои заказы",
      link: "/profile/profile_orders",
      icon: <Orders />,
    },
    {
      name: "Мои рассрочки",
      link: "/profile/profile_sale",
      icon: <Sale />,
    },
    {
      name: "Мои карты",
      link: "/profile/profile_card",
      icon: <Card />,
    },
    {
      name: "Выйти из системы",
      link: "/",
      icon: <Exit />,
    },
  ];
  useEffect(() => {
    setShow(false);
  }, [pathname]);
  return (
    <>
      <div>
        <BreadCrumb
          items={[
            {
              name: "Личный кабинет",
            },
          ]}
        />
        <div className="grid xl:grid-cols-[320px_1fr] mt-5 grid-cols-[280px_1fr] 2md:grid-cols-1 gap-5 mb-[100px]">
          <div
            className={`border-line border transition-transform duration-300 rounded-[24px] max-h-[385px] xl:p-[24px] p-5 2md:fixed bg-white sticky top-[90px] 2md:left-[0px] 2md:top-0 2md:rounded-none 2md:h-full 2md:z-[11] 2md:max-h-full 2md:pt-[80px] ${
              show ? "2md:translate-x-[0%]" : "2md:translate-x-[-100%]"
            }`}
          >
            <button
              onClick={() => setShow(!show)}
              className="hidden 2md:grid absolute top-[50%] translate-y-[-50%] right-0 translate-x-[60%] bg-white flex-shrink-0 w-[50px] h-[50px]  place-content-center shadow-lg rounded-full"
            >
              <FaChevronRight
                className={`text-[24px] text-txtSecondary2 ${
                  show ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div className="flex items-center xl:mb-[24px] mb-5">
              <div className="flex items-center xl:mr-[12px] mr-2 justify-center xl:w-[60px] xl:h-[60px] w-[50px] h-[50px] rounded-full bg-[#F2F5F7]">
                <Ava />
              </div>
              <p className="xl:text-[16px] text-[14px] font-[500] text-[#212121]">
                Новый пользователь
              </p>
            </div>
            {profileList.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  to={item.link}
                  className={`flex items-center gap-x-[12px] md:h-[50px] md:text-[16px] text-[14px] h-[40px] pl-[12px] md:rounded-[12px] rounded-[10px] ${
                    item.link === pathname && "bg-[#027373] active-route"
                  } ${
                    item.link === "/profile/profile_sale" &&
                    pathname == "/profile/profile_sale_single" &&
                    "bg-[#027373] active-route"
                  }`}
                >
                  {item.icon}
                  <p>{item.name}</p>
                </Link>
              );
            })}
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Profile;

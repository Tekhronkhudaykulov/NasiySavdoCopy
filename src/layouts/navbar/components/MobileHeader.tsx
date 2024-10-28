import { Link } from "react-router-dom";
import { Logo } from "../../../components";

function MobileHeader({ setShow }: { setShow: any }) {
  const lists = [
    {
      name: "Каталог",
      link: "/category",
      active: true,
    },
    {
      name: "О нас",
      link: "/",
    },
    {
      name: "Блог",
      link: `/`,
    },
    {
      name: "Где мой заказ?",
      link: `/`,
    },
    {
      name: "Акции и скидки",
      link: `/`,
    },
    {
      name: "Контакты",
      link: `/`,
    },
    {
      name: "Доставка и оплата",
      link: `/`,
    },
    {
      name: "Магазины",
      link: `/`,
    },
  ];
  return (
    <div className="fixed h-screen w-full z-[1111] left-0 top-0">
      <div
        onClick={() => setShow(false)}
        className="bg-[#0000004d] absolute inset-0"
      ></div>
      <ul className="w-[70%] py-4 rounded-r-[16px] bg-white h-full flex flex-col relative z-[1000]">
        <div className="w-full flex justify-center my-6">
          <Logo />
        </div>
        {lists.map((list, i) => {
          return (
            <li
              key={i}
              className={`w-full pl-4 ${list.active ? "bg-[#0273731A]" : ""}`}
            >
              <Link
                to={list.link}
                className={`text-[14px] flex py-[14px] font-medium w-full ${
                  list.active ? "text-darkGreen" : ""
                }`}
              >
                {list.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MobileHeader;

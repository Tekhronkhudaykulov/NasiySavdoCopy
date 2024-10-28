import { Link } from "react-router-dom";
import { ASSETS } from "../../assets/img/assets";
import { APP_ROUTES } from "../../router";
import { useState } from "react";
import ContactUs from "../../components/ContactUs/ContactUs";

const Footer = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="wrapper">
      {show && <ContactUs show={show} setShow={setShow} />}
      <div className="flex gap-x-[130px] md:flex-row flex-col 2md:gap-x-[80px] gap-y-[24px] mt-[64px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] font-[700] text-mainBlack">Информация</h2>
          <div className="flex flex-col gap-[10px]">
            <Link
              to={APP_ROUTES.VACANCIES}
              className="text-gray font-[500] text-[16px]"
            >
              Lorem
            </Link>
            <Link to={``} className="text-gray font-[500] text-[16px]">
              Карьера в Nasiya.uz
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] font-[700] text-mainBlack">
            Пользователям
          </h2>
          <div className="flex flex-col gap-[10px]">
            <button
              onClick={() => {
                setShow(true);
              }}
              className="text-gray inline-flex font-[500] text-[16px]"
            >
              Связаться с нами
            </button>
            <Link
              to={APP_ROUTES.QUESTIONS}
              className="text-gray font-[500] text-[16px]"
            >
              Вопрос - Ответ
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] font-[700] text-mainBlack">
            Для предпринимателей
          </h2>
          <div className="flex flex-col gap-[10px]">
            <Link to={``} className="text-gray font-[500] text-[16px]">
              Продавайте на Nasiya
            </Link>
            <Link to={``} className="text-gray font-[500] text-[16px]">
              Вход для продавцов
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center 2md:items-start gap-y-5 2md:flex-col justify-between mt-[60px]">
        <div>
          <p className="text-[20px] font-[700] text-mainBlack mb-[16px]">
            Виды оплаты
          </p>
          <div className="flex items-center flex-wrap gap-y-4 gap-x-[16px]">
            <div className="w-[90px] h-[54px] flex items-center justify-center bg-buttonBg rounded-[8px]">
              <img
                className="w-full h-[20px] object-contain"
                src={ASSETS.uzum}
                alt=""
              />
            </div>
            <div className="w-[90px] h-[54px] flex items-center justify-center bg-buttonBg rounded-[8px]">
              <img
                className="w-full h-[20px] object-contain"
                src={ASSETS.payme}
                alt=""
              />
            </div>
            <div className="w-[90px] h-[54px] flex items-center justify-center bg-buttonBg rounded-[8px]">
              <img
                className="w-full h-[20px] object-contain"
                src={ASSETS.visa}
                alt=""
              />
            </div>
            <div className="w-[90px] h-[54px] flex items-center justify-center bg-buttonBg rounded-[8px]">
              <img
                className="w-full h-[24px] object-contain"
                src={ASSETS.master}
                alt=""
              />
            </div>
            <div className="w-[90px] h-[54px] flex items-center justify-center bg-buttonBg rounded-[8px]">
              <img
                className="w-full h-[26px] object-contain"
                src={ASSETS.Humo}
                alt=""
              />
            </div>
            <div className="w-[90px] h-[54px] flex items-center justify-center bg-buttonBg rounded-[8px]">
              <img
                className="w-full h-[28px] object-contain"
                src={ASSETS.uzcard}
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-[20px] font-[700] text-mainBlack mb-[16px]">
            Мы в соц. сетях
          </p>
          <div className="flex items-center gap-x-[19px]">
            <Link to={``}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.5938 13.25C25.5938 19.5469 20.9727 24.7773 14.9297 25.6914V16.9062H17.875L18.4336 13.25H14.9297V10.9141C14.9297 9.89844 15.4375 8.93359 17.0117 8.93359H18.5859V5.83594C18.5859 5.83594 17.1641 5.58203 15.7422 5.58203C12.8984 5.58203 11.0195 7.35938 11.0195 10.5078V13.25H7.82031V16.9062H11.0195V25.6914C4.97656 24.7773 0.40625 19.5469 0.40625 13.25C0.40625 6.29297 6.04297 0.65625 13 0.65625C19.957 0.65625 25.5938 6.29297 25.5938 13.25Z"
                  fill="#80848F"
                />
              </svg>
            </Link>
            <Link to={``}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5938 0.65625C19.5508 0.65625 25.1875 6.29297 25.1875 13.25C25.1875 20.207 19.5508 25.8438 12.5938 25.8438C5.63672 25.8438 0 20.207 0 13.25C0 6.29297 5.63672 0.65625 12.5938 0.65625ZM18.7383 9.28906C18.9414 8.47656 18.4336 8.12109 17.875 8.32422L5.73828 12.9961C4.92578 13.3008 4.92578 13.8086 5.58594 14.0117L8.68359 14.9766L15.8945 10.4062C16.25 10.2031 16.5547 10.3555 16.3008 10.5586L10.4609 15.8398L10.2578 19.0391C10.5625 19.0391 10.7148 18.8867 10.8672 18.7344L12.3906 17.2617L15.5391 19.5977C16.1484 19.9023 16.5547 19.75 16.707 19.0391L18.7383 9.28906Z"
                  fill="#80848F"
                />
              </svg>
            </Link>
            <Link to={``}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.375 6.41016C15.5742 6.41016 18.2148 9.05078 18.2148 12.25C18.2148 15.5 15.5742 18.0898 12.375 18.0898C9.125 18.0898 6.53516 15.5 6.53516 12.25C6.53516 9.05078 9.125 6.41016 12.375 6.41016ZM12.375 16.0586C14.457 16.0586 16.1328 14.3828 16.1328 12.25C16.1328 10.168 14.457 8.49219 12.375 8.49219C10.2422 8.49219 8.56641 10.168 8.56641 12.25C8.56641 14.3828 10.293 16.0586 12.375 16.0586ZM19.7891 6.20703C19.7891 6.96875 19.1797 7.57812 18.418 7.57812C17.6562 7.57812 17.0469 6.96875 17.0469 6.20703C17.0469 5.44531 17.6562 4.83594 18.418 4.83594C19.1797 4.83594 19.7891 5.44531 19.7891 6.20703ZM23.6484 7.57812C23.75 9.45703 23.75 15.0938 23.6484 16.9727C23.5469 18.8008 23.1406 20.375 21.8203 21.7461C20.5 23.0664 18.875 23.4727 17.0469 23.5742C15.168 23.6758 9.53125 23.6758 7.65234 23.5742C5.82422 23.4727 4.25 23.0664 2.87891 21.7461C1.55859 20.375 1.15234 18.8008 1.05078 16.9727C0.949219 15.0938 0.949219 9.45703 1.05078 7.57812C1.15234 5.75 1.55859 4.125 2.87891 2.80469C4.25 1.48438 5.82422 1.07812 7.65234 0.976562C9.53125 0.875 15.168 0.875 17.0469 0.976562C18.875 1.07812 20.5 1.48438 21.8203 2.80469C23.1406 4.125 23.5469 5.75 23.6484 7.57812ZM21.2109 18.9531C21.8203 17.4805 21.668 13.9258 21.668 12.25C21.668 10.625 21.8203 7.07031 21.2109 5.54688C20.8047 4.58203 20.043 3.76953 19.0781 3.41406C17.5547 2.80469 14 2.95703 12.375 2.95703C10.6992 2.95703 7.14453 2.80469 5.67188 3.41406C4.65625 3.82031 3.89453 4.58203 3.48828 5.54688C2.87891 7.07031 3.03125 10.625 3.03125 12.25C3.03125 13.9258 2.87891 17.4805 3.48828 18.9531C3.89453 19.9688 4.65625 20.7305 5.67188 21.1367C7.14453 21.7461 10.6992 21.5938 12.375 21.5938C14 21.5938 17.5547 21.7461 19.0781 21.1367C20.043 20.7305 20.8555 19.9688 21.2109 18.9531Z"
                  fill="#80848F"
                />
              </svg>
            </Link>
            <Link to={``}>
              <svg
                width="29"
                height="20"
                viewBox="0 0 29 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.8789 3.59766C28.4883 5.73047 28.4883 10.3008 28.4883 10.3008C28.4883 10.3008 28.4883 14.8203 27.8789 17.0039C27.5742 18.2227 26.6094 19.1367 25.4414 19.4414C23.2578 20 14.625 20 14.625 20C14.625 20 5.94141 20 3.75781 19.4414C2.58984 19.1367 1.625 18.2227 1.32031 17.0039C0.710938 14.8203 0.710938 10.3008 0.710938 10.3008C0.710938 10.3008 0.710938 5.73047 1.32031 3.59766C1.625 2.37891 2.58984 1.41406 3.75781 1.10938C5.94141 0.5 14.625 0.5 14.625 0.5C14.625 0.5 23.2578 0.5 25.4414 1.10938C26.6094 1.41406 27.5742 2.37891 27.8789 3.59766ZM11.7812 14.4141L18.9922 10.3008L11.7812 6.1875V14.4141Z"
                  fill="#80848F"
                />
              </svg>
            </Link>
            <Link to={``}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.25 10.1875C3.25 11.1016 2.51367 11.8125 1.625 11.8125C0.710938 11.8125 0 11.1016 0 10.1875C0 9.29883 0.710938 8.5625 1.625 8.5625C2.51367 8.5625 3.25 9.29883 3.25 10.1875ZM7.69336 11.4062C7.71875 11.6348 7.51562 11.8125 7.28711 11.8125H6.06836C5.86523 11.8125 5.6875 11.6602 5.66211 11.457C5.48438 8.61328 3.19922 6.32812 0.355469 6.15039C0.152344 6.125 0 5.94727 0 5.74414V4.52539C0 4.29688 0.177734 4.09375 0.40625 4.11914C4.3418 4.32227 7.49023 7.4707 7.69336 11.4062ZM11.3496 11.4062C11.375 11.6348 11.1973 11.8125 10.9434 11.8379H9.72461C9.52148 11.8379 9.34375 11.6602 9.31836 11.4316C9.14062 6.58203 5.23047 2.67188 0.380859 2.49414C0.152344 2.46875 0 2.29102 0 2.08789V0.869141C0 0.615234 0.177734 0.4375 0.40625 0.462891C6.37305 0.666016 11.1465 5.46484 11.3496 11.4062Z"
                  fill="#80848F"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="border border-line my-[36px]"></div>
      <div className="flex 2md:pb-[50px] items-center justify-between 2md:flex-wrap gap-5 mb-[30px]">
        <a className="text-[12px] font-[500] text-mainBlack" href="">
          Соглашение о конфиденциальности
        </a>
        <a className="text-[12px] font-[500] text-mainBlack" href="">
          Пользовательское соглашение
        </a>
        <div className="text-txtSecondary2 text-[12px] font-[500] ">
          2015-2024 Интернет-магазин nasiya.uz: Бытовая техника и др. Доставка
          товаров осуществляется во все регионы. Все права защищены.
        </div>
      </div>
    </div>
  );
};

export default Footer;

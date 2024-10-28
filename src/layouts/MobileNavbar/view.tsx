import { Link, useLocation } from "react-router-dom";
import {
  Logo,
  MobileBasketIcon,
  MobileFavouriteIcon,
  MobileSearchIcon,
  MobileUserIcon,
} from "../../assets/icon";
import { APP_ROUTES } from "../../router";

function MobileNavbar({ setIsNumberModalOpen }: { setIsNumberModalOpen: any }) {
  const authed = localStorage.getItem("authorised") === "true";
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#fff] z-[2] 2md:flex hidden px-[24px] py-[8px]">
      <div className="flex items-center justify-between w-full gap-[22px]">
        <Link to={`/`} className="flex flex-col gap-[5px] items-center">
          <span className="w-[24px]">
            <Logo className={currentPath == "/" ? "#027373" : "#80848F"} />
          </span>
          <span
            className={`${
              currentPath == "/" ? "text-darkGreen" : "text-txtSecondary2"
            } text-[10px]`}
          >
            Главная
          </span>
        </Link>
        <Link to={`/category`} className="flex flex-col gap-[5px] items-center">
          <span className="w-[24px]">
            <MobileSearchIcon
              className={currentPath == "/category" ? "#027373" : "#80848F"}
            />
          </span>
          <span
            className={`${
              currentPath == "/category" ? "text-darkGreen" : "text-txtSecondary2"
            } text-[10px]`}
          >
            Каталог
          </span>
        </Link>
        <Link
          to={`${APP_ROUTES.BASKET}`}
          className="flex flex-col gap-[5px] items-center"
        >
          <span className="w-[24px]">
            <MobileBasketIcon
              className={
                currentPath == APP_ROUTES.BASKET ||
                currentPath == `${APP_ROUTES.BASKET}/${APP_ROUTES.BASKET_FORM}`
                  ? "#027373"
                  : "#80848F"
              }
            />
          </span>
          <span
            className={`${
              currentPath == APP_ROUTES.BASKET ||
              currentPath == `${APP_ROUTES.BASKET}/${APP_ROUTES.BASKET_FORM}`
                ? "text-darkGreen"
                : "text-txtSecondary2"
            } text-[10px]`}
          >
            Корзина
          </span>
        </Link>
        <Link
          to={`${APP_ROUTES.FAVOURITE}`}
          className="flex flex-col gap-[5px] items-center"
        >
          <span className="w-[24px]">
            <MobileFavouriteIcon
              className={
                currentPath == APP_ROUTES.FAVOURITE ? "#027373" : "#80848F"
              }
            />
          </span>
          <span
            className={`${
              currentPath == APP_ROUTES.FAVOURITE
                ? "text-darkGreen"
                : "text-txtSecondary2"
            } text-[10px]`}
          >
            Избранные
          </span>
        </Link>
        <Link
          onClick={(event) => {
            console.log(authed);
            if (!authed) {
              event.preventDefault();
              setIsNumberModalOpen(true);
            }
          }}
          to={`${APP_ROUTES.PROFILE}/${APP_ROUTES.PROFILE_ACCOUNT}`}
          className="flex flex-col gap-[5px] items-center"
        >
          <span className="w-[24px]">
            <MobileUserIcon
              className={
                currentPath ==
                `${APP_ROUTES.PROFILE}/${APP_ROUTES.PROFILE_ACCOUNT}`
                  ? "#027373"
                  : "#80848F"
              }
            />
          </span>
          <span
            className={`${
              currentPath ==
              `${APP_ROUTES.PROFILE}/${APP_ROUTES.PROFILE_ACCOUNT}`
                ? "text-darkGreen"
                : "text-txtSecondary2"
            } text-[10px]`}
          >
            {authed ? "Профиль" : "Войти"}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default MobileNavbar;

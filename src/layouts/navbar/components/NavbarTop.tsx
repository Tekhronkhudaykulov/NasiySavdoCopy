import { LanguageSwitcher } from "../../../components";

const NavbarTop = () => {
  return (
    <div className="bg-secondary md:block hidden py-[3px] relative z-[30]">
      <div className="wrapper">
        <div className="flex items-center">
          <div className="text-[12px] text-mainBlack">Мобильное приложение</div>
          <div className="ml-auto flex items-center gap-[20px]">
            <div className="text-txtSecondary text-[12px]">
              Вопросы и ответы
            </div>
            <div className="text-txtSecondary text-[12px]">Мои заказы</div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;

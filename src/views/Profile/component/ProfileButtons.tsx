import { DocumentWithShieldBig } from "../../../assets/icon";
import { ASSETS } from "../../../assets/img/assets";

function ProfileButtons() {
  return (
    <div className="bg-buttonBg xl:py-[21px] xl:px-[30px] p-4 rounded-[10px]">
      <div className="flex max-md:flex-col items-center xl:gap-x-[30px] lg:gap-x-[26px] gap-x-5">
        <div>
          {" "}
          <DocumentWithShieldBig />
        </div>
        <p className="text-[#212121] xl:text-[20px] lg:text-[18px] text-[14px] max-md:text-center max-md:text-txtSecondary font-[400] max-w-[480px] leading-[1.4]">
          Для покупки в рассрочки надо пройти идентификацию через мобильное
          приложение
        </p>
      </div>
      <div className="mt-[30px] flex flex-col md:flex-row items-center gap-[12px]">
        <img className="cursor-pointer" src={ASSETS.playMarket} alt="" />
        <img className="cursor-pointer" src={ASSETS.appStore} alt="" />
      </div>
    </div>
  );
}

export default ProfileButtons;

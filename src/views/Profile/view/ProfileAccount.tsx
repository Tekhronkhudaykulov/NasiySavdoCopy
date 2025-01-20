import ProfileButtons from "../component/ProfileButtons";
import ProfileSuccess from "../component/ProfileSuccess";
import ProfileInputs from "../component/ProfileInputs";
import ProfileAdress from "../component/ProfileAdress";

const ProfileAccount = () => {
  return (
    <>
      <div className="border border-line rounded-[18px] h-max xl:p-[36px] md:p-[26px] p-4">
        <p className="text-[#212121] font-[600] text-[20px] mb-[30px]">
          Мои данные
        </p>

        <div className="flex flex-col xl:gap-[60px] gap-[40px]">
          <ProfileInputs />
        </div>
        <p className="text-[#212121] font-[600] text-[20px] mb-[30px] mt-[30px]">
          Мой адрес
        </p>
        <div className="flex flex-col xl:gap-[60px] gap-[40px]">
          <ProfileAdress />
        </div>
        <div  className="flex flex-col xl:gap-[60px] gap-[40px] mt-[30px]">
        <ProfileButtons />
        <ProfileSuccess />
        </div>
      </div>
    </>
  );
};

export default ProfileAccount;

import ProfileButtons from "../component/ProfileButtons";
import ProfileSuccess from "../component/ProfileSuccess";
import ProfileInputs from "../component/ProfileInputs";
import ProfileAdress from "../component/ProfileAdress";
import { adresList } from "../../../hook/queries";
import { IoHomeOutline } from "react-icons/io5";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../router";

const ProfileAdresPage = () => {
    const {data} = adresList();

    const navigate = useNavigate()
    console.log(data, 'data')

  return (
    <>
      <div className="border border-line rounded-[18px] h-max xl:p-[36px] md:p-[26px] p-4">
        <p className="text-[#212121] font-[600] text-[20px] mb-[30px]">
          Мой адрес
        </p>
        {/* <div className="flex flex-col xl:gap-[60px] gap-[40px]">
          <ProfileAdress />
        </div> */}
        <div className="grid lg:flex md:grid-cols-2 xl:gap-x-[14px] gap-x-[10px] gap-y-[16px] ">
            {data?.map((item: any, ind: any) => (
               <>
                <div className="flex items-center border-none gap-x-[10px] bg-buttonBg border-[1px] w-max px-[15px] py-[15px] rounded-[12px]">
                   <IoHomeOutline size={25}/>
                    <p className="text-[18px]">{item.address}</p>
                </div>
            </>
            ))}
            <Button
            onClick={() => navigate(`${APP_ROUTES.PROFILE}/${APP_ROUTES.ADD_NEW_ADRESS}`) }
            className="!bg-darkGreen  !text-white w-full md:h-[56px] h-[46px] rounded-[8px] text-[14px] md:text-[16px] font-[500]"
            type="default"
          >
            Добавить адресс
          </Button>
        </div>
        <div  className="flex flex-col xl:gap-[60px] gap-[40px] mt-[30px]">
        {/* <ProfileButtons /> */}
        <ProfileSuccess />
        </div>
      </div>
    </>
  );
};

export default ProfileAdresPage;

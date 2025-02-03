import ProfileButtons from "../component/ProfileButtons";
import ProfileSuccess from "../component/ProfileSuccess";
import ProfileInputs from "../component/ProfileInputs";
import ProfileAdress from "../component/ProfileAdress";
import { adresList } from "../../../hook/queries";
import { IoHomeOutline } from "react-icons/io5";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../router";
import { useState } from "react";
import AddressCard from "../component/AddressCard";

const ProfileAdresPage = () => {
  const { data } = adresList();
  const navigate = useNavigate();
  if (!data) return;

  const [isChoosen, setIsChoosen] = useState<number>(data.id);

  return (
    <>
      <div className="border border-line rounded-[18px] h-max xl:p-[36px] md:p-[26px] p-4">
        <div className="flex justify-between items-center mb-[30px]">
          <p className="text-[#212121] whitespace-nowrap font-[600] text-[20px]">
            Мой адрес
          </p>
          <Button
            onClick={() =>
              navigate(`${APP_ROUTES.PROFILE}/${APP_ROUTES.ADD_NEW_ADRESS}`)
            }
            className="!bg-darkGreen px-[40px] !text-white max-w-full md:h-[56px] h-[46px] rounded-[8px] text-[14px] md:text-[16px] font-[500]"
            type="default"
          >
            Добавить адресс
          </Button>
        </div>
        {/* {data?.map((item: any, ind: any) => (
            <div
              key={ind}
              className="flex items-center border-none gap-x-[10px] bg-buttonBg border-[1px] w-max px-[15px] py-[15px] rounded-[12px]"
            >
              <IoHomeOutline size={25} />
              <p className="text-[18px]">{item.address}</p>
            </div>
          ))} */}
        <div className="grid grid-cols-2 gap-[12px]">
        {data?.map((item: any, ind: any) => (
          item.street !== null && item.street !== undefined ? (
            <AddressCard
              item={item}
              key={ind}
              isChoosen={isChoosen}
              setIsChoosen={setIsChoosen}
            />
          ) : null
        ))}
        </div>
      </div>
    </>
  );
};

export default ProfileAdresPage;

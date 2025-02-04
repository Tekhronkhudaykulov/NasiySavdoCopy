import { adresList } from "../../../hook/queries";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../router";
import { useState } from "react";
import AddressCard from "../component/AddressCard";
import EmptyAddress from "../../../assets/img/assets";

const ProfileAdresPage = () => {
  const { data } = adresList();
  const navigate = useNavigate();
  if (!data) return;

  const [isChoosen, setIsChoosen] = useState<number>(data.id);

  return (
    <>
      <div className="border border-line rounded-[18px] h-max xl:px-[36px] md:p-[26px] p-4">
        {data?.length ? (
          <>
            <div className="flex justify-between items-center">
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
            <div className="grid grid-cols-2 gap-[12px] mt-[30px]">
              {data?.map((item: any, ind: any) =>
                item.street !== null && item.street !== undefined ? (
                  <AddressCard
                    item={item}
                    key={ind}
                    isChoosen={isChoosen}
                    setIsChoosen={setIsChoosen}
                  />
                ) : null
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center flex-col bg-[#FFFFFF] rounded-[18px]">
            <div className="md:mb-[5rem] grid place-content-center">
              <div className="text-center md:max-w-[450px] max-w-[320px] flex flex-col md:gap-[30px] gap-[20px]">
                <img
                  className="mx-auto max-w-[120px] md:max-w-[220px]"
                  src={EmptyAddress}
                />
                <div className="flex flex-col gap-[12px]">
                  <h3 className="md:text-[20px] text-[16px] font-medium text-mainBlack">
                    Ваши адреса будут отображаться здесь
                  </h3>
                  <p className="text-txtSecondary md:text-[16px] text-[14px]">
                    Чтобы оформить заказ, добавьте свой адрес
                  </p>
                </div>
                <div className="flex md:gap-4 gap-3">
                  <Button
                    onClick={() =>
                      navigate(
                        `${APP_ROUTES.PROFILE}/${APP_ROUTES.ADD_NEW_ADRESS}`
                      )
                    }
                    className="!bg-darkGreen px-[40px] !text-white max-w-full md:h-[56px] h-[46px] rounded-[8px] text-[14px] md:text-[16px] font-[500]"
                    type="default"
                  >
                    Добавить адресс
                  </Button>
                  <Link
                    className="py-[14px] md:text-[16px] text-[14px] max-w-max px-[40px] w-full whitespace-nowrap rounded-[8px] bg-[rgb(2,115,115,.15)] text-darkGreen font-medium"
                    to={`/`}
                  >
                    На главную
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileAdresPage;

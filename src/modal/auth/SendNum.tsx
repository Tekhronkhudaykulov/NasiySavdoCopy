import React, { useState } from "react";
import { Button, Modal } from "antd";
import { InputMask } from "@react-input/mask";
import { useSendPhone } from "../../hook/auth/auth";
import { authStore } from "../../store";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./style.scss"
type SendNumProps = {
  isNumberModalOpen: boolean;
  setIsNumberModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCodeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SendNum: React.FC<SendNumProps> = ({
  isNumberModalOpen,
  setIsNumberModalOpen,
  setIsCodeModalOpen,
}: SendNumProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const { mutate, isPending } = useSendPhone();

  const { setUserNumber } = authStore();

  const handleOk = () => {
    const backendPhoneNumber = phoneNumber.replace(/\D/g, "");

    if (backendPhoneNumber.length === 12) {
      // localStorage.setItem("phoneNumber", backendPhoneNumber);
      mutate(
        { phone: backendPhoneNumber },
        {
          onSuccess: () => {
            setIsNumberModalOpen(false);
            setUserNumber(backendPhoneNumber);
            setIsCodeModalOpen(true);
          },
        },
      );
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  const handleCancel = () => {
    setIsNumberModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isNumberModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="md:!max-w-[400px] !max-w-[90%] !w-full"
      >
        <div className="md:pt-[50px] pt-[30px]">
          <p className="md:text-[24px] text-[20px] font-[500] text-center">
            Введите номер телефона
          </p>
          <p className="md:text-[16px] text-[12px] font-[500] text-txtSecondary2 text-center">
            Отправим смс с кодом подтверждения
          </p>
         <div className="mt-[30px] mb-[25px]">
         <PhoneInput
            country={"uz"}
            onlyCountries={["uz"]}
            dropdownStyle={{display: "none"}}
            onChange={(e) => setPhoneNumber(e)}
            inputClass="!outline-none  !md:h-[56px] !h-[46px] !text-gray !md:mt-[36px] !mt-[20px] !md:mb-[26px] !mb-[18px] !bg-buttonBg !md:p-5 !p-3 !w-full !rounded-[8px] !text-[14px] !md:text-[16px]"
            masks={{ uz: "(..) ...-..-.." }}
            placeholder="+998 (__) ___-__-__"
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
          />
         </div>
          
          <Button
            onClick={handleOk}
            className="!bg-darkGreen  !text-white w-full md:h-[56px] h-[46px] rounded-[8px] text-[14px] md:text-[16px] font-[500]"
            type="default"
          >
            {isPending ? "Loading..." : "Получить код"}
          </Button>
          <div className="flex justify-center md:mt-[100px] mt-[50px]">
            <p className="font-[500] text-[12px] text-gray max-w-[265px] text-center">
              Авторизуясь, вы соглашаетесь c политикой обработки персональных
              данных
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SendNum;

import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import VerificationInput from "react-verification-input";
import "./style.scss";
import { authStore } from "../../store";
import { useSendCode } from "../../hook/auth/auth";

type SendNumProps = {
  isCodeModalOpen: boolean;
  setIsCodeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SendCode: React.FC<SendNumProps> = ({
  isCodeModalOpen,
  setIsCodeModalOpen,
}) => {
  const [timer, setTimer] = useState<number>(59);
  const [code, setCode] = useState<string>("");
  const { userNumber } = authStore();

  let countryCode = userNumber?.slice(0, 3); // 998
  let firstPart = userNumber?.slice(3, 5); // 90
  let lastPart = userNumber?.slice(10, 12); // 06

  let num = `${countryCode} ${firstPart}*****${lastPart}`;

  const [isResendEnabled, setIsResendEnabled] = useState<boolean>(false);

  const { mutate } = useSendCode();

  // const phoneNumber = localStorage.getItem("phoneNumber") || "";
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          setIsResendEnabled(true);
        }
        return prevTimer > 0 ? prevTimer - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleLogin = () => {
    if (code.length === 6) {
      mutate(
        { code: code },
        {
          onSuccess: () => {
            setIsCodeModalOpen(false);
          },
          onError: () => {
            setIsCodeModalOpen(true);
          },
        }
      );
    }
  };
  const handleCancel = () => {
    setIsCodeModalOpen(false);
  };
  const handleResendCode = () => {
    setTimer(59);
    setIsResendEnabled(false);
  };

  return (
    <Modal
      open={isCodeModalOpen}
      onCancel={handleCancel}
      footer={null}
      className="md:!max-w-[400px] !max-w-[90%] !w-full"
    >
      <div className="md:pt-[50px] pt-[30px]">
        <p className="md:text-[24px] text-[20px] font-[500] text-center">
          Подтверждение SMS кода
        </p>
        <p className="md:text-[16px] text-[12px] leading-[1.5] line-clamp-2 font-[500] mt-[6px] md:mb-[38px] mb-[24px] text-txtSecondary2 text-center">
          SMS с кодом отправлено на номер <br /> +{num}
        </p>
        <p className="md:text-[14px] text-[12px] font-[400] mb-[14px] text-txtSecondary2 text-center">
          Введите код из смс
        </p>
        <VerificationInput
          length={6}
          value={code}
          onChange={setCode}
          classNames={{
            character:
              "outline-none md:text-[24px] text-[20px] rounded-[6px] bg-buttonBg border-transparent",
            characterFilled: `text-gray border ${
              (code == "11111" && "!border-[red]") ||
              (code == "22222" && "!border-darkGreen")
            }`,
            container: "flex justify-between w-full md:mb-[39px] mb-[24px]",
            characterInactive: "border-none",
            characterSelected: "!border-darkGreen",
          }}
        />

        {isResendEnabled ? (
          <p
            onClick={handleResendCode}
            className="text-center cursor-pointer text-[#03A5A5] text-[14px] font-[400]"
          >
            Отправить код повторно
          </p>
        ) : (
          <p className="text-center text-mainBlack text-[14px] font-[400]">
            {`00:${timer.toString().padStart(2, "0")}`}
          </p>
        )}
        <Button
          className="!bg-darkGreen !text-white w-full h-[46px] md:h-[56px] rounded-[8px] md:text-[16px] text-[14px] md:mt-[50px] mt-[30px] font-[500]"
          type="default"
          onClick={handleLogin}
          disabled={code.length < 5}
        >
          Войти
        </Button>
      </div>
    </Modal>
  );
};

export default SendCode;

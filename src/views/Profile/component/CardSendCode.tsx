import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import VerificationInput from "react-verification-input";
import { ASSETS } from "../../../assets/img/assets";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { clientCard, resendVerify, sendVerify } from "../../../hook/queries";
import { useValueContext } from "../../../context/ValueContext";
import { errorNotification } from "../../../components/Notifikation/view";

type SendNumProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function maskPhoneNumber(phoneNumber: string): string {
  const countryCode = phoneNumber.slice(0, 3); // 998
  const firstPart = phoneNumber.slice(3, 5); // 90
  const lastPart = phoneNumber.slice(10, 12); // 06

  return `${countryCode} ${firstPart}*****${lastPart}`;
}

const CardSendCode: React.FC<SendNumProps> = ({ open, setOpen }) => {
  const [timer, setTimer] = useState<number>(59);
  const [code, setCode] = useState<string>("");

  
  const { valueData } = useValueContext();

  console.log(valueData, 'data');
  
  

  const [isSuccess, setIsSuccess] = useState(false);
  const [isResendEnabled, setIsResendEnabled] = useState<boolean>(false);
  const phoneNumber = localStorage.getItem("phoneNumber") || "";
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



  const handleCancel = () => {
    setOpen(false);
  };
  const handleCancel2 = () => {
    setIsSuccess(false);
  };

  



  const sendClientCard = useMutation({
    mutationFn: sendVerify,
    onSuccess: () => {
      setOpen(false);
      setIsSuccess(true);
    },
    onError: (e) => {
      // errorNotification(e)
      // @ts-ignore
      const errors = e.response.data.message;
      errorNotification(errors)
 
    }
  });

  const sendResendVerify = useMutation({
    mutationFn: resendVerify,
    onSuccess: () => {
      setTimer(59);
      setIsResendEnabled(false);
    },
    onError: (e) => {
      // errorNotification(e)
      // @ts-ignore
      const errors = e.response.data.message;
      errorNotification(errors)
    }
  });

  
  
  const handleResendCode = () => {
    sendResendVerify.mutate({card_id: valueData?.id})
  };

  const handleClientCard = () => {
    sendClientCard.mutate({card_id:valueData?.id, code});
  };
  return (
    <>
      <Modal
        open={open}
        onCancel={handleCancel}
        footer={null}
        className="md:!max-w-[400px] !max-w-[90%] !w-full"
      >
        {open && (
          <div className="pt-[50px]">
            <p className="md:text-[24px] text-[20px] font-[500] text-center">
              Подтверждение SMS кода
            </p>
            <p className="md:text-[16px] text-[12px] leading-[1.5] line-clamp-2 font-[500] mt-[6px] md:mb-[38px] mb-[24px] text-txtSecondary2 text-center">
              SMS с кодом отправлено на номер <br /> +
             {valueData?.otpSendPhone}
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
              onClick={handleClientCard}
              disabled={code.length < 6}
            >
              Подтвердить
            </Button>
          </div>
        )}
      </Modal>
      <Modal
        open={isSuccess}
        onCancel={handleCancel2}
        footer={null}
        width={"400px"}
      >
        <div className="flex justify-center relative">
          <div>
            <img src={ASSETS.CardSuccess} />
          </div>
        </div>
        <div className="my-[36px] text-center">
          <h4 className="text-[24px] text-[#000] font-medium">
            Вы успешно <br /> добавили карту
          </h4>
        </div>
        <div className="flex gap-4 text-center">
          <Link
            className="py-[14px] max-w-[100%] w-full hover:text-white rounded-[8px] bg-darkGreen text-white"
            to={`/`}
          >
            Перейти в каталог
          </Link>
          <Link
            className="py-[14px] max-w-[100%] w-full hover:text-darkGreen rounded-[8px] bg-[rgb(2,115,115,.15)] text-darkGreen font-medium"
            to={`/`}
          >
            На главную
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default CardSendCode;

import { Modal } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ASSETS } from "../../assets/img/assets";

function ContactUs({ setShow, show }: { setShow: any; show: any }) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);
  return (
    <Modal
      open={show}
      onCancel={() => setShow(false)}
      footer={null}
      className="md:!max-w-[400px] !max-w-[90%] !w-full"
      fa-drivers-license
    >
      <h2 className="md:mt-[60px] mt-5 text-[24px] font-medium text-mainBlack">
        Связаться с нами
      </h2>
      <p className="md:mt-[20px] mt-[10px] md:mb-[30px] mb-[20px] text-txtSecondary2">
        Задайте вопрос нашим специалистам в удобной вам форме:
      </p>
      <div className="flex flex-col gap-[9px] md:mb-[70px] mb-[30px]">
        <Link
          to={`https://t.me/nasiyauz_bot`}
          className="p-3 flex items-center rounded-[9px] bg-buttonBg gap-3"
        >
          <div className="w-[32px] h-[32px] rounded-[6px]">
            <img
              className="w-full h-full object-cover"
              src={ASSETS.Telegram}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[1px] text-[12px]">
            <span className="leading-[1.2] text-txtSecondary2">Telegram</span>
            <span className="leading-[1.2] text-mainBlack font-medium">
              @Nasiyauz_bot
            </span>
          </div>
        </Link>
        <Link
          to={`tel:+998 90 009 9009`}
          className="p-3 flex items-center rounded-[9px] bg-buttonBg gap-3"
        >
          <div className="w-[32px] h-[32px] rounded-[6px]">
            <img
              className="w-full h-full object-cover"
              src={ASSETS.Phone}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[1px] text-[12px]">
            <span className="leading-[1.2] text-txtSecondary2">
              Звонки по Узбекистану
            </span>
            <span className="leading-[1.2] text-mainBlack font-medium">
              +998 90 009 9009
            </span>
          </div>
        </Link>
      </div>
      <div className="flex flex-col">
        <span className="text-txtSecondary2">Электронная почта поддержки:</span>
        <Link className="text-darkGreen" to={`mailto:support@nasiyauz.com`}>
          support@nasiyauz.com
        </Link>
      </div>
    </Modal>
  );
}

export default ContactUs;

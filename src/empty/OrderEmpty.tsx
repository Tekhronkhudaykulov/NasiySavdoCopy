import { Link } from "react-router-dom";
const OrderEmpty = ({
  title,
  texts,
  img,
}: {
  title: string;
  texts: string;
  img: string;
}) => {
  return (
    <div className="flex items-center mt-[20px] justify-center flex-col bg-[#FFFFFF] py-[40px] rounded-[18px] border border-line">
      <div className="md:mb-[5rem] grid place-content-center">
        <div className="text-center md:max-w-[401px] max-w-[300px] flex flex-col md:gap-[40px] gap-[30px]">
          <img className="mx-auto max-w-[120px] md:max-w-full" src={img} />
          <div className="flex flex-col gap-[12px]">
            <h3 className="md:text-[20px] text-[16px] font-medium text-mainBlack">
              {title}
            </h3>
            <p className="text-txtSecondary md:text-[16px] text-[14px]">
              {texts}
            </p>
          </div>
          <div className="flex md:gap-4 gap-3">
            <Link
              className="py-[14px]  md:text-[16px] text-[14px] max-w-[200px] w-full rounded-[8px] bg-darkGreen text-white"
              to={``}
            >
              Перейти в каталог
            </Link>
            <Link
              className="py-[14px] md:text-[16px] text-[14px]  max-w-[200px] w-full rounded-[8px] bg-[rgb(2,115,115,.15)] text-darkGreen font-medium"
              to={`/`}
            >
              На главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderEmpty;

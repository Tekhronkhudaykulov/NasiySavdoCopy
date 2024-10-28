import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
function AboutProductPopUp({ setAboutPopUp }: { setAboutPopUp: any }) {
  const [show, setShow] = useState(false);

  return (
    <div className="fixed inset-0 z-[999]">
      <div
        onClick={() => setAboutPopUp(false)}
        className="bg-[#212121] absolute opacity-[.2] inset-0 w-full h-full"
      ></div>
      <div className="lg:w-[710px] md:w-[550px] w-full bg-white absolute overflow-auto aboutProductScroll right-0 h-screen top-0 md:rounded-[16px_0_0_0] md:p-[36px] p-[20px]">
        <div className="min-h-screen">
          <div className="flex justify-between items-center mb-4">
            <h2 className="md:text-[24px] text-[20px] font-medium">О товаре</h2>
            <button onClick={() => setAboutPopUp(false)}>
              <IoClose className="text-[34px] text-mainBlack" />
            </button>
          </div>
          <p
            className={`text-gray md:text-[14px] text-[12px] mb-2 leading-[1.5] ${
              show ? "" : "text-hidden-7"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur. Risus vulputate tellus
            vestibulum tristique amet vitae aliquam faucibus. Tempor odio
            tincidunt volutpat ac luctus massa morbi. Sit volutpat ridiculus
            semper arcu diam platea dictum magna. Scelerisque nisi molestie eget
            dignissim. Fusce ac malesuada elementum orci adipiscing. Lobortis
            amet id sollicitudin augue risus non. Eget sit arcu dignissim
            gravida sit faucibus tortor felis. Diam varius viverra nunc amet
            magna tellus sed accumsan convallis. Amet nulla viverra gravida
            dignissim semper massa. Maecenas et orci convallis amet nibh.
            Quisque tortor enim condimentum faucibus gravida. Morbi magna id
            nullam et felis. Lectus fringilla eget vestibulum tellus in ultrices
            condimentum faucibus gravida. Morbi magna id nullam nulla viverra
            gravida. Morbi magna id nullam et felis. Lectus fringilla eget
            vestibulum tellus in ultrices condimentum faucibus gravida. Morbi
            magna id nullam nulla viverra gravida. Morbi magna id nullam et
            felis. Lectus fringilla eget vestibulum tellus in ultrices
            condimentum faucibus gravida. Morbi magna id nullam nulla viverra
          </p>
          <button
            onClick={() => setShow(!show)}
            className="text-[#03a5a5] text-[12px] font-medium flex items-center gap-2"
          >
            {show ? "Закрыть" : "Читать далее "}{" "}
            {show ? <FaAngleUp /> : <FaAngleDown />}
          </button>
          <div className="mt-[24px]">
            <h3 className="font-medium">Общие характеристики</h3>
            <div className="mt-4 flex flex-col gap-3">
              <div className="border-b border-line flex justify-between items-center pb-4 text-[12px]">
                <span className="text-txtSecondary font-medium">Цвет</span>
                <span className="text-mainBlack font-medium">
                  Белый металлик / Черный металлик
                </span>
              </div>
              <div className="border-b border-line flex justify-between items-center pb-4 text-[12px]">
                <span className="text-txtSecondary font-medium">
                  Габариты (В×Ш×Г)
                </span>
                <span className="text-mainBlack font-medium">
                  2170 × 2400 × 554 мм
                </span>
              </div>
              <div className="border-b border-line flex justify-between items-center pb-4 text-[12px]">
                <span className="text-txtSecondary font-medium">Тип</span>
                <span className="text-mainBlack font-medium">Прямые</span>
              </div>
              <div className="border-b border-line flex justify-between items-center pb-4 text-[12px]">
                <span className="text-txtSecondary font-medium">Материал</span>
                <span className="text-mainBlack font-medium">ЛДСП, МДФ</span>
              </div>
              <div className="border-b border-line flex justify-between items-center pb-4 text-[12px]">
                <span className="text-txtSecondary font-medium">Размер</span>
                <span className="text-mainBlack font-medium">
                  Ширина 240 см
                </span>
              </div>
              <div className="border-b border-line flex justify-between items-center pb-4 text-[12px]">
                <span className="text-txtSecondary font-medium">
                  Особенности
                </span>
                <span className="text-mainBlack font-medium">Глянцевые</span>
              </div>
              <div className="border-b border-line flex justify-between items-center pb-4 text-[12px]">
                <span className="text-txtSecondary font-medium">Стиль</span>
                <span className="text-mainBlack font-medium">Современный</span>
              </div>
              <div className="border-b border-line flex justify-between items-center pb-4 text-[12px]">
                <span className="text-txtSecondary font-medium">
                  Вес изделия в упаковке
                </span>
                <span className="text-mainBlack font-medium">157 кг</span>
              </div>
              <div className="border-b border-line flex justify-between items-center pb-4 text-[12px]">
                <span className="text-txtSecondary font-medium">
                  Количество упаковок
                </span>
                <span className="text-mainBlack font-medium">7 шт.</span>
              </div>
              <div className="border-b border-line flex justify-between items-center pb-4 text-[12px]">
                <span className="text-txtSecondary font-medium">Гарантия</span>
                <span className="text-mainBlack font-medium">18 месяцев</span>
              </div>
            </div>
          </div>
          <div className="mt-[24px]">
            <h3 className="font-medium">Дополнительная информация</h3>
            <p
              className={`text-gray md:text-[14px] text-[12px] mt-4 leading-[1.5] `}
            >
              Lorem ipsum dolor sit amet consectetur. Aliquam ornare eget hac
              cursus. Pellentesque ullamcorper phasellus placerat pellentesque.
              Adipiscing neque lectus at congue rhoncus tincidunt nisi ac.
              Sapien ullamcorper accumsan mus faucibus suspendisse integer
              turpis eu. Habitant urna vitae dis nibh libero dictum et. Aliquam
              tortor elit egestas sit. Nunc duis sodales lobortis aliquam.
              Adipiscing tristique vulputate turpis ornare felis nisl massa nam.
              Bibendum risus malesuada proin lacinia urna maecenas. Egestas
              lobortis auctor eget sit nunc eu phasellus.
            </p>
            <div className="mt-[22px] flex items-center justify-between">
              <h2 className="md:text-[24px] text-[16px] font-semibold text-mainBlack">
                156 000 сум
              </h2>
              <button className="md:p-[18px_36px] md:text-[16px] text-[12px] p-[12px_24px] font-medium text-white rounded-[6px] bg-darkGreen">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProductPopUp;

import { BreadCrumb } from "../../components";

function Vacancies() {
  return (
    <>
      <BreadCrumb items={[{ name: "Вакансии" }]} />
      <div className="bg-white flex md:my-[100px] my-[50px] justify-center">
        <div className="md:p-[31px] p-[25px] border text-mainBlack border-line rounded-[16px]">
          <div className="max-w-[700px]">
            <h1 className="md:mb-[24px] mb-[16px] font-medium md:text-[32px] text-[26px]">ВАКАНСИИ</h1>
            <p className="md:text-[16px] text-[13px]">
              Хотите быть частью команды Nasiya Uz? Расскажите почему вы нам
              подходите и отправляйте свое резюме
            </p>
            <div className="flex md:text-[16px] text-[14px] gap-1 font-medium items-center md:flex-row flex-col md:my-[30px] my-[20px]">
              <button className="bg-darkGreen w-full md:w-max text-white md:p-[14px_33px] p-[10px_24px] md:rounded-[12px] rounded-[8px]">
                ХОЧУ РАБОТАТЬ В NASIYA.UZ
              </button>
              <button className="md:p-[14px_33px] w-full md:w-max p-[10px_24px] md:rounded-[12px] rounded-[8px] bg-[#D0D3D9] text-[#4D4F59]">
                Telegram bot - @Nasiyauz_bot
              </button>
            </div>
            <p className="md:text-[16px] text-[13px] mb-1">
              Профили работ в которых вы можете найти, то, что вам подходит:
            </p>
            <ul className="md:pl-4 pl-2 flex flex-col gap-[4px] md:text-[16px] text-[13px]">
              <li>- Доставка Uzum Market</li>
              <li>- Административный персонал</li>
              <li>- Складская логистика</li>
              <li>- Контактный центр</li>
              <li>- Управление персоналом</li>
            </ul>
            <div className="md:mt-[45px] mt-[25px] md:text-[16px] text-[13px]">
              Если у нас пока не открыта вакансия Вашей мечты - присылайте свое
              резюме в резерв, удобным для Вас способом:
            </div>
            <div className="md:text-[16px] text-[13px]">
              <span>Telegram: </span>
              <a className="text-txtSecondary2" href="">
                @HR_NASIYA
              </a>
            </div>
            <div className="md:text-[16px] text-[13px]">
              <span>Email: </span>
              <a className="text-txtSecondary2" href="">
                hr-market@nasiya.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vacancies;

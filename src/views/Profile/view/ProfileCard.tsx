import { TrashCan } from "../../../assets/icon";
import { ASSETS } from "../../../assets/img/assets";
import ProfileCardEmpty from "../../../empty/ProfileCardEmpty";
import { modalsStore } from "../../../store";
import AddCard from "../component/AddCard";
type PlasticCard = {
  cardNumber: string;
  cardName: string;
  cardImg: string; // If ASSETS.Humo is a string (URL path or file path), otherwise specify its type
};
const PlastikCard = ({ plastic }: { plastic: PlasticCard }) => {
  const formatCardNumber = (number: string) => {
    return `${number.slice(0, 4)} **** **** ${number.slice(-4)}`;
  };
  return (
    <div
      className={`p-[20px] rounded-[12px] select-none bg-buttonBg flex flex-col gap-[17px] cursor-pointer `}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-[7px]">
          <h3 className="text-[16px] font-medium text-mainBlack">
            Номер карты
          </h3>
          <p className="text-[14px] text-txtSecondary2 font-medium">
            {formatCardNumber(plastic.cardNumber)}
          </p>
        </div>
        <button>
          <TrashCan />
        </button>
      </div>
      <div className="flex justify-between">
        <p className="text-[14px] text-txtSecondary2 font-medium">
          {plastic.cardName}
        </p>
        <div className="w-[42px] h-[25px]">
          <img
            className="w-full h-full object-contain object-right"
            src={plastic.cardImg}
          />
        </div>
      </div>
    </div>
  );
};

const plasticCards: PlasticCard[] = [
  {
    cardNumber: "1234123412341234",
    cardName: "SQB",
    cardImg: ASSETS.Humo,
  },
  {
    cardNumber: "1234123412341234",
    cardName: "SQB",
    cardImg: ASSETS.uzcard,
  },
];

const ProfileCard = () => {
  const { openModal } = modalsStore();
  return (
    <>
      <div>
        <div className="flex items-center md:p-[20px] p-4 justify-center flex-col bg-[#FFFFFF] md:py-[24px] py-5 md:rounded-[18px] rounded-[14px]  border border-[#E2E3E5]">
          {plasticCards.length === 0 ? (
            <div className="my-8">
              <ProfileCardEmpty
                title="Вы еше не добавили карту"
                img={ASSETS.Vallet}
                onClick={() => openModal("card_payment")}
              />
            </div>
          ) : (
            <div className="flex flex-col w-full">
              <h2 className="text-mainBlack lg:text-[24px] text-[20px] font-semibold">
                Мои карты
              </h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] lg:mt-5 mt-4 xl:gap-[20px] gap-4">
                {plasticCards.map((plastic, i) => {
                  return <PlastikCard key={i} plastic={plastic} />;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <AddCard />
    </>
  );
};

export default ProfileCard;

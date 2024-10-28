import "./selectArea.scss";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { useState } from "react";
import RegionPopup from "./RegionPopup";
import AddressPopup from "./AddressPopup";

interface Props {
  className?: string;
}

const SelectArea = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegionPopupOpen, setIsRegionPopupOpen] = useState(false);
  const [isAddressPopupOpen, setIsAddressPopupOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);
  const openRegionPopup = () => setIsRegionPopupOpen(true);
  const closeRegionPopup = () => setIsRegionPopupOpen(false);
  const openAddressPopup = () => setIsAddressPopupOpen(true);
  const closeAddressPopup = () => setIsAddressPopupOpen(false);

  return (
    <div className={`relative ${className}`}>
      <button
        className={`p-[12px_20px] bg-buttonBg rounded-[10px] flex items-center gap-3 text-[12px] text-txtSecondary2`}
        onClick={togglePopup}
      >
        <span className="font-medium">Ташкент</span>
        <FaChevronDown className="text-darkGreen" />
      </button>

      {isOpen && (
        <div className="absolute z-10 min-w-[420px] right-0 bg-white rounded-[16px] shadow-[0_4px_14px_#0000001a] mt-3 p-4">
          {!isRegionPopupOpen && !isAddressPopupOpen ? (
            <>
              <div className="mb-5">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-[12px] text-txtSecondary2">
                    Ваш регион
                  </span>
                  <FaTimes
                    className="cursor-pointer text-txtSecondary2"
                    onClick={togglePopup}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h2 className="font-medium text-[20px] text-black">
                    Ташкент
                  </h2>
                  <button
                    className="text-[#03A5A5] text-[12px] font-medium"
                    onClick={openRegionPopup}
                  >
                    Изменить
                  </button>
                </div>
              </div>
              <div className="p-[14px] rounded-[8px] bg-buttonBg flex flex-col items-start gap-[14px]">
                <p className="text-[12px] text-txtSecondary2 font-medium">
                  Укажите ваш адрес — при выборе товаров увидите, доступна ли
                  экспресс-доставка
                </p>
                <button
                  className="font-medium rounded-lg border border-darkGreen p-[14px_44px] text-darkGreen text-[16px]"
                  onClick={openAddressPopup}
                >
                  Указать адрес
                </button>
              </div>
            </>
          ) : isRegionPopupOpen ? (
            <RegionPopup onClose={closeRegionPopup} />
          ) : (
            <AddressPopup onClose={closeAddressPopup} />
          )}
        </div>
      )}
    </div>
  );
};

export default SelectArea;

import { FaTimes } from "react-icons/fa";
import { useState } from "react";

interface Props {
  onClose: () => void;
}

const RegionPopup = ({ onClose }: Props) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);

    // Example filter logic (replace this with actual data)
    const results = [
      "Ташкент",
      "Самарканд",
      "Бухара",
      "Toshkent",
      "Samarqand",
      "Jizzax",
    ].filter((region) => region.toLowerCase().includes(value.toLowerCase()));
    setSearchResults(results);
  };

  return (
    <div className="region-popup">
      <div className="flex justify-between items-center mb-5">
        <span className="font-medium text-[20px] text-black">
          Укажите ваш регион
        </span>
        <FaTimes
          className="cursor-pointer text-txtSecondary2"
          onClick={onClose}
        />
      </div>
      <div
        className={`bg-buttonBg rounded-lg ${
          searchInput ? "border border-line" : ""
        }`}
      >
        <input
          type="text"
          className="w-full p-4 bg-transparent font-medium outline-none text-[14px]"
          placeholder="Регион или город"
          value={searchInput}
          onChange={handleSearchChange}
        />
        {searchInput && (
          <div className="rounded-lg shadow-lg p-2 border-t border-line bg-buttonBg">
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <div
                  key={index}
                  className="p-2 text-txtSecondary2 cursor-pointer"
                >
                  {result}
                </div>
              ))
            ) : (
              <div className="p-2 text-txtSecondary2">Ничего не найдено</div>
            )}
          </div>
        )}
      </div>
      <button className="bg-[#02737326] text-darkGreen rounded-lg p-[14px_32px] text-[14px] mt-4">
        Выбрать
      </button>
    </div>
  );
};

export default RegionPopup;

import { Input } from "antd";
import { SearchIcon } from "../../../assets/icon";
import { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredResults, setFilteredResults] = useState<string[]>([]);

  const searchResults = [
    "Rolex",
    "Prada",
    "MX Master S3",
    "Logitech Keys S",
    "DeepCool case",
  ];

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const results = searchResults.filter((result) =>
        result.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  return (
    <>
      <Input.Search
        className="nav-search"
        size="large"
        placeholder="Искать товары и категории"
        onInput={handleInput}
        value={inputValue}
        enterButton={
          <div className="flex items-center gap-[6px]">
            <SearchIcon />
            Поиск
          </div>
        }
      />

      {inputValue && filteredResults.length > 0 && (
        <div className="absolute top-0 z-[-1] w-full bg-white shadow-[0_4px_24px_#0000001a] rounded-[24px] px-4 pb-6 pt-[70px]">
          <div className="flex flex-col gap-[10px]">
            {filteredResults.map((result, index) => (
              <span
                key={index}
                className="cursor-pointer text-[14px] text-txtSecondary2"
              >
                {result}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Search;

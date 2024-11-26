import { Input } from "antd";
import { SearchIcon } from "../../../assets/icon";
import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { APP_ROUTES } from "../../../router";

const transliterateToLatin = (text: any) => {
  const mapping = {
      'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
      'Е': 'E', 'Ё': 'Yo', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
      'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
      'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
      'У': 'U', 'Ф': 'F', 'Х': 'X', 'Ц': 'Ts', 'Ч': 'Ch',
      'Ш': 'Sh', 'Щ': 'Shch', 'Ъ': '', 'Ы': 'Y', 'Ь': '',
      'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya',
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
      'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i',
      'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
      'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
      'у': 'u', 'ф': 'f', 'х': 'x', 'ц': 'ts', 'ч': 'ch',
      'ш': 'sh', 'щ': 'shch', 'ъ': '', 'ы': 'y', 'ь': '',
      'э': 'e', 'ю': 'yu', 'я': 'ya',
      // Qo'shimcha lotin xaritalari (faqat kerak bo'lsa)
      'Ў': 'O‘', 'ў': 'o‘', 'Қ': 'Q', 'қ': 'q', 'Ғ': 'G‘', 'ғ': 'g‘', 'Ҳ': 'H', 'ҳ': 'h'
  };

  // Har bir belgini transliteratsiya qilish
  // @ts-ignore
  return text.split('').map((char: any) => mapping[char] || char).join('');
};

const SearchContent = () => {
  const [search, setSearch] = useSearchParams()

  const location = useLocation();


  const [filteredResults, setFilteredResults] = useState<string[]>([]);
  const query = search.get("query") || "";

  const navigate = useNavigate();

  const isSearchPage = location.pathname === APP_ROUTES.SEARCH; 

  const searchResults = [
    "Rolex",
    "Prada",
    "MX Master S3",
    "Logitech Keys S",
    "DeepCool case",
  ];

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value;
    const translatedText = transliterateToLatin(value);
    setSearch({ query: translatedText });

    if (value) {
      const results = searchResults.filter((result) =>
        result.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };





  const navigateSearch = () => {
    navigate(`${APP_ROUTES.SEARCH}/?query=${query}`);
    // refetch();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      navigate(`${APP_ROUTES.SEARCH}/?query=${query}`);

      // refetch();
    }
  };
  return (
    <>
      <Input.Search
        className="nav-search"
        size="large"
        placeholder="Искать товары и категории"
        onInput={handleInput}
        onKeyDown={handleKeyDown}
     
        enterButton={
          <div onClick={navigateSearch} className="flex items-center gap-[6px]">
            <SearchIcon />
            Поиск
          </div>
        }
      />

      {search && filteredResults.length > 0 && (
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

export default SearchContent;

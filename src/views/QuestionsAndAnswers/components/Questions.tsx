import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { questions } from "../../../data/FAQdatas";

function Questions() {
  const navigate = useNavigate();
  const location = useLocation();
  const headerOffset = 80;
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  const handleClick = (id: string) => {
    navigate(`#${id}`);
  };
  return (
    <div className="sticky top-[80px] h-max 2md:hidden">
      <ul className="">
        {questions.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className="text-[#1f2026] font-semibold p-[10px_16px]"
            >
              {item.question}
            </button>
            {item.subQuestions && (
              <ul className="">
                {item.subQuestions.map((subItem) => (
                  <li key={subItem.id}>
                    <button
                      onClick={() => handleClick(subItem.id)}
                      className="text-[#1f2026] text-[14px] text-start font-normal p-[10px_16px] leading-[1.3]"
                    >
                      {subItem.question}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;

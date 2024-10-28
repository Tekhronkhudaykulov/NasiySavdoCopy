import { questions } from "../../../data/FAQdatas";

function Answers() {
  return (
    <div className="md:p-[33px] p-6 flex flex-col text-[#1F2026] md:gap-4 gap-3 border border-[#36374033]">
      {questions.map((item) => (
        <div key={item.id} className="flex flex-col md:gap-4 gap-3">
          <h2 id={item.id} className="md:text-[24px] text-[20px] font-semibold">
            {item.question}
          </h2>
          <p className="md:text-[16px] text-[12px]">{item.answer}</p>
          {item.subQuestions &&
            item.subQuestions.map((subItem) => (
              <div
                key={subItem.id}
                id={subItem.id}
                className="flex flex-col md:gap-4 gap-3"
              >
                <h3 className="md:text-[20px] text-[16px] font-semibold">
                  {subItem.question}
                </h3>
                <p
                  className="md:text-[16px] text-[12px]"
                  dangerouslySetInnerHTML={{ __html: subItem.answer }}
                ></p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default Answers;

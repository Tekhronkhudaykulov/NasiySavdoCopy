import { BreadCrumb } from "../../components";
import Answers from "./components/Answers";
import Questions from "./components/Questions";

function QuestionsAndAnswers() {
  return (
    <>
      <BreadCrumb items={[{ name: "Вопросы и ответы" }]} />
      <h1 className="text-[28px] mb-[22px] px-4 font-semibold text-[#1f2026]">
        Вопросы и ответы
      </h1>
      <div className="grid grid-cols-[260px_1fr] 2md:grid-cols-1 gap-[27px]">
        <Questions />
        <Answers />
      </div>
    </>
  );
}

export default QuestionsAndAnswers;

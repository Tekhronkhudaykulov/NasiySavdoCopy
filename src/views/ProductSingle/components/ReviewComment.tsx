import { useState } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  image: string;
  boxCount: number;
}
function ReviewComment({ review }: { review: Review }) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-[6px]">
        {[...Array(review.boxCount)].map((_, index) => (
          <div
            key={index}
            className="w-[46px] aspect-square bg-buttonBg rounded-[4px]"
          ></div>
        ))}
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="flex gap-2 items-center">
          <div className="w-[36px] aspect-square rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={review.image}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[3px]">
            <div className="flex items-center text-mainBlack">
              {Array.from({ length: 5 }).map((_, index) =>
                index < review.rating ? (
                  <IoIosStar key={index} />
                ) : (
                  <IoIosStarOutline key={index} />
                )
              )}
            </div>
            <p className="flex items-center gap-[5px] md:text-[14px] text-[12px] text-txtSecondary2 font-normal">
              {review.date} <span></span> {review.name}
            </p>
          </div>
        </div>
        <p
          className={`text-mainBlack md:text-[14px] text-[12px] leading-[1.5] ${
            show ? "" : "text-hidden-4"
          }`}
        >
          {review.comment}
        </p>
        <button
          onClick={() => setShow(!show)}
          className="text-txtSecondary2 text-[12px] font-normal flex items-center gap-2"
        >
          {show ? "Закрыть" : "Читать далше "}{" "}
          {show ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </div>
    </div>
  );
}

export default ReviewComment;

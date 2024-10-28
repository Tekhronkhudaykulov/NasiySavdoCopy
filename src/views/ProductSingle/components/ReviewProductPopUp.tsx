import { IoClose } from "react-icons/io5";
import { Star } from "../../../assets/icon";
import ReviewComment from "./ReviewComment";
import { ASSETS } from "../../../assets/img/assets";
interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  image: string;
  boxCount: number;
}
const reviews: Review[] = [
  {
    id: 1,
    name: "Usmonov Sohib",
    date: "12.05.2024",
    rating: 4,
    comment: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque obcaecati facere temporibus vel laborum repudiandae voluptates, eos expedita nostrum aspernatur laudantium vero mollitia voluptate aliquam. Doloribus, consequuntur pariatur? Veritatis, amet?
          Illo voluptas praesentium error, nisi natus dignissimos, non et consequuntur asperiores possimus illum recusandae vitae! Fuga nisi, hic qui consectetur dolor fugiat facilis eos voluptate expedita cumque, asperiores distinctio officia!`,
    image: ASSETS.ProfileImg,
    boxCount: 3,
  },
  {
    id: 2,
    name: "John Doe",
    date: "03.02.2024",
    rating: 5,
    comment: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque obcaecati facere temporibus vel laborum repudiandae voluptates, eos expedita nostrum aspernatur laudantium vero mollitia voluptate aliquam. Doloribus, consequuntur pariatur? Veritatis, amet?
          Illo voluptas praesentium error, nisi natus dignissimos, non et consequuntur asperiores possimus illum recusandae vitae! Fuga nisi, hic qui consectetur dolor fugiat facilis eos voluptate expedita cumque, asperiores distinctio officia!`,
    image: ASSETS.ProfileImg,
    boxCount: 4,
  },
  {
    id: 3,
    name: "Jane Smith",
    date: "18.07.2024",
    rating: 3,
    comment: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque obcaecati facere temporibus vel laborum repudiandae voluptates, eos expedita nostrum aspernatur laudantium vero mollitia voluptate aliquam. Doloribus, consequuntur pariatur? Veritatis, amet?
          Illo voluptas praesentium error, nisi natus dignissimos, non et consequuntur asperiores possimus illum recusandae vitae! Fuga nisi, hic qui consectetur dolor fugiat facilis eos voluptate expedita cumque, asperiores distinctio officia!`,
    image: ASSETS.ProfileImg,
    boxCount: 5,
  },
  {
    id: 4,
    name: "Ali Vali",
    date: "24.11.2024",
    rating: 2,
    comment: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque obcaecati facere temporibus vel laborum repudiandae voluptates, eos expedita nostrum aspernatur laudantium vero mollitia voluptate aliquam. Doloribus, consequuntur pariatur? Veritatis, amet?
          Illo voluptas praesentium error, nisi natus dignissimos, non et consequuntur asperiores possimus illum recusandae vitae! Fuga nisi, hic qui consectetur dolor fugiat facilis eos voluptate expedita cumque, asperiores distinctio officia!`,
    image: ASSETS.ProfileImg,
    boxCount: 2,
  },
  {
    id: 5,
    name: "Ivan Petrov",
    date: "09.01.2024",
    rating: 4,
    comment: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque obcaecati facere temporibus vel laborum repudiandae voluptates, eos expedita nostrum aspernatur laudantium vero mollitia voluptate aliquam. Doloribus, consequuntur pariatur? Veritatis, amet?
          Illo voluptas praesentium error, nisi natus dignissimos, non et consequuntur asperiores possimus illum recusandae vitae! Fuga nisi, hic qui consectetur dolor fugiat facilis eos voluptate expedita cumque, asperiores distinctio officia!`,
    image: ASSETS.ProfileImg,
    boxCount: 6,
  },
];

function ReviewProductPopUp({ setReviewPoUp }: { setReviewPoUp: any }) {
  return (
    <div className="fixed inset-0 z-[999]">
      <div
        onClick={() => setReviewPoUp(false)}
        className="bg-[#212121] absolute opacity-[.2] inset-0 w-full h-full"
      ></div>
      <div className="lg:w-[710px] md:w-[550px] w-full bg-white absolute overflow-auto aboutProductScroll right-0 h-screen top-0 rounded-[16px_0_0_0] md:p-[36px] p-5">
        <div className="min-h-screen">
          <div className="flex justify-between items-center mb-[6px]">
            <h2 className="md:text-[24px] text-[20px] font-medium">
              Оценки и отзывы
            </h2>
            <button onClick={() => setReviewPoUp(false)}>
              <IoClose className="text-[34px] text-mainBlack" />
            </button>
          </div>
          <div className="flex items-center gap-x-[4px]">
            <p className="text-gray text-[12px] font-[500]">4.9</p>
            <Star />
            <p className="text-gray text-[12px] font-[500]">123 отзывов</p>
          </div>
          <div className="mt-[24px] flex flex-col gap-4">
            {reviews.map((review) => {
              return <ReviewComment review={review} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewProductPopUp;

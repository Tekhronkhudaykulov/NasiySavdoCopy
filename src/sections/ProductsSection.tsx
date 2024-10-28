import { ReactNode, useState } from "react";
import { Card, Title } from "../components";
import SendNum from "../modal/auth/SendNum";
import SendCode from "../modal/auth/SendCode";

interface Props {
  className?: string;
  title?: ReactNode | string;
  products: any[];
}

const ProductsSection = ({ className, title, products }: Props) => {
  const [isNumberModalOpen, setIsNumberModalOpen] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);

  return (
    <>
      {isNumberModalOpen && (
        <SendNum
          setIsCodeModalOpen={setIsCodeModalOpen}
          isNumberModalOpen={isNumberModalOpen}
          setIsNumberModalOpen={setIsNumberModalOpen}
        />
      )}
      {isCodeModalOpen && (
        <SendCode
          isCodeModalOpen={isCodeModalOpen}
          setIsCodeModalOpen={setIsCodeModalOpen}
        />
      )}
      <div className={`${className}`}>
        {title ? <Title title={title} /> : null}
        <div className="grid md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-cols-2 md:gap-x-5 md:gap-y-[36px] gap-x-[8px] gap-y-[20px]">
          {products?.length
            ? products?.map((prod, idx) => (
                <Card
                  prod={prod}
                  setIsNumberModalOpen={setIsNumberModalOpen}
                  key={idx}
                />
              ))
            : "Xech nima topilmadi"}
        </div>
      </div>
    </>
  );
};

export default ProductsSection;

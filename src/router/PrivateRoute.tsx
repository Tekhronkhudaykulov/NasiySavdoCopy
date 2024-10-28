import { FC, ReactNode, useEffect, useState } from "react";
import { Footer, MobileNavbar, Navbar } from "../layouts";
import { useLocation } from "react-router-dom";
import SendNum from "../modal/auth/SendNum";
import SendCode from "../modal/auth/SendCode";

interface Props {
  child?: ReactNode;
}

const PrivateRoute: FC<Props> = ({ child }) => {
  const { pathname } = useLocation();
  const [isNumberModalOpen, setIsNumberModalOpen] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
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
      <Navbar setIsNumberModalOpen={setIsNumberModalOpen} />
      <MobileNavbar setIsNumberModalOpen={setIsNumberModalOpen} />
      <div className="h-full wrapper">{child}</div>
      <Footer />
    </>
  );
};

export default PrivateRoute;

import { IoMdMenu } from "react-icons/io";
import { Category, Inner, Search } from ".";
import { Logo } from "../../../components";
import { useState } from "react";
import MobileHeader from "./MobileHeader";

const NavbarCenter = ({
  setActiveCateg,
  activeCateg,
  setIsNumberModalOpen,
}: {
  setActiveCateg: any;
  setIsNumberModalOpen: any;
  activeCateg: any;
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="sticky top-0 left-0 w-full md:py-[15px] py-[10px] z-[99] bg-white">
      <div className="wrapper">
        <div className="flex justify-between md:justify-start gap-2 md:gap-0">
          <button
            onClick={() => setShow(true)}
            className="text-[32px] mr-5 text-txtSecondary2 2md:block hidden"
          >
            <IoMdMenu />
          </button>
          <Logo className="lg:mr-[40px] md:mr-[20px]" />
          <Category activeCateg={activeCateg} setActiveCateg={setActiveCateg} />
          <div className="w-full ml-4 mr-6 relative md:flex hidden">
            <Search />
          </div>
          <Inner setIsNumberModalOpen={setIsNumberModalOpen} />
          {show && <MobileHeader setShow={setShow} />}
        </div>
      </div>
    </div>
  );
};

export default NavbarCenter;

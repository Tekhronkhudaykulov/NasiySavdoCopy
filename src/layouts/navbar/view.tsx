import { useEffect, useState } from "react";
import { NavbarCenter, NavbarTop } from "./components";
import MultiLevelDropdown from "./components/MultiLevelDropdown";
import "./navbar.scss";
import { useLocation } from "react-router-dom";

const Navbar = ({ setIsNumberModalOpen }: { setIsNumberModalOpen: any }) => {
  const [activeCateg, setActiveCateg] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (activeCateg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeCateg]);

  useEffect(() => {
    setActiveCateg(false);
  }, [location]);

  return (
    <>
      <NavbarTop />
      <NavbarCenter setIsNumberModalOpen={setIsNumberModalOpen} setActiveCateg={setActiveCateg} activeCateg={activeCateg} />
      {activeCateg && <MultiLevelDropdown />}
    </>
  );
};

export default Navbar;

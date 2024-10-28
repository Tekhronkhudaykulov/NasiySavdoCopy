import { Link } from "react-router-dom";
import { ASSETS } from "../../assets/img/assets";
import { APP_ROUTES } from "../../router";

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link
      to={APP_ROUTES.HOME}
      className={`block ${className} lg:max-w-[150px] max-w-[140px] w-full self-center`}
    >
      <img src={ASSETS.Logo} className="w-full" alt="" />
    </Link>
  );
};

export default Logo;

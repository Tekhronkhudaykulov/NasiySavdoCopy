import { ReactNode } from "react";
import './title.scss'

interface Props {
  className?: string;
  title?: ReactNode | string;
}

const Title = ({ className, title }: Props) => {
  return <div className={`title ${className}`}>{title}</div>;
};

export default Title;

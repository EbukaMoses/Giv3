import Link  from "next/link";
import { twMerge } from "tailwind-merge";
interface Props {
  title: string;
  icon?: React.ReactNode;
  path: string;
  className?: string;
  onClick?: React.MouseEventHandler;
}

const Button = ({ title, icon, path, className, onClick }: Props) => {
  const newClassName = twMerge(
    "flex whitespace-nowrap gap-1 text-sm font-bold lg:font-semibold items-center capitalize border-0 border rounded-md py-2 px-4",
    className
  );

  return (
    <div>
      <Link href={path} className={newClassName} onClick={onClick}>
        {title} {icon && icon}
      </Link>
    </div>
  );
};

export default Button; 

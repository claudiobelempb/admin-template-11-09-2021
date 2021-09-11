import Link from "next/link";

interface ILiProps {
  url?: string;
  title: string;
  icon: any;
  onClick?: (e: any) => void;
  className?: string;
}
export default function Li(props: ILiProps) {
  const renderLink = () => {
    return (
      <a
        className={`flex flex-grow flex-col justify-center       items-center h-20 w-20 text-gray-600 dark:text-gray-200 ${props.className}`}
      >
        {props.icon}
        <span className={`text-xs font-light mt-2`}>{props.title}</span>
      </a>
    );
  };
  return (
    <li
      className={`
    hover:bg-gray-100
    dark:hover:bg-gray-800
      cursor-pointer
    `}
      onClick={props.onClick}
    >
      {props.url ? <Link href={props.url}>{renderLink()}</Link> : renderLink()}
    </li>
  );
}

import { ReactNode } from "react";

interface IContentProps {
  children?: ReactNode;
}

export default function Content(props: IContentProps) {
  return (
    <main
      className={`
      flex
      flex-col
      mt-7
      text-gray-600
      dark:text-gray-200
      flex-grow: 1;
    `}
    >
      {props.children}
    </main>
  );
}

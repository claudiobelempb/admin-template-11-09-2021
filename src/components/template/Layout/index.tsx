import { ReactNode } from "react";

import Aside from "../Aside";
import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";
import useAppData from "../../../data/hook/useAppData";
import BlockedAuthenticated from "../../BlockedAuthenticated";

interface ILayoutProps {
  title: string;
  sub_title: string;
  children?: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const { theme } = useAppData();

  return (
    <BlockedAuthenticated>
      <div className={`${theme} flex h-screen w-screen `}>
        <Aside />
        <div
          className={` flex flex-col w-full p-7 bg-gray-300 
        dark:bg-gray-800`}
        >
          <Header title={props.title} sub_title={props.sub_title} />
          <Content>{props.children}</Content>
          <Footer />
        </div>
      </div>
    </BlockedAuthenticated>
  );

  /* com função
  return blockedAuthenticated(
    <div className={`${theme} flex h-screen w-screen `}>
      <Aside />
      <div
        className={` flex flex-col w-full p-7 bg-gray-300 
        dark:bg-gray-800`}
      >
        <Header title={props.title} sub_title={props.sub_title} />
        <Content>{props.children}</Content>
        <Footer />
      </div>
    </div>
  );*/
}

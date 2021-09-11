/* eslint-disable @next/next/no-img-element */
import useAppData from "../../../data/hook/useAppData";
import ButtonDoggle from "../../ButtonDoggle";

import Title from "../Title";
import useAuthDada from "../../../data/hook/useAuthData";
import Avatar from "../../Avatar";

interface IHeaderPorps {
  title: string;
  sub_title: string;
}

export default function Header(props: IHeaderPorps) {
  const { theme, doggleTheme } = useAppData();
  const { user } = useAuthDada();

  return (
    <header
      className={`
        flex
        justify-center
        items-center
      `}
    >
      <div>
        <Title title={props.title} sub_title={props.sub_title} />
      </div>
      <div className={`flex flex-grow justify-end`}>
        <ButtonDoggle theme={theme} doggleTheme={doggleTheme} />
      </div>
      <Avatar imagemUrl={user?.imagemUrl ?? "/images/avatar.svg"} />
    </header>
  );
}

import { IconMoon, IconSun } from "../icons";

interface IButtonDoggleProps {
  theme: string;
  doggleTheme: () => void;
}

export default function ButtonDoggle(props: IButtonDoggleProps) {
  return props.theme === "dark" ? (
    <div
      onClick={props.doggleTheme}
      className={`
      hidden sm:flex
      justify-center
      items-center
      bg-gradient-to-r
      from-yellow-300
      to-yellow-600
      w-14 lg:w-24 h-8
      cursor-pointer
      p-1
      rounded-full
    `}
    >
      <div
        className={`
        flex
        items-center
        justify-center
        bg-white
        text-yellow-600
        rounded-full
        w-6
        h-6
      `}
      >
        {IconSun}
      </div>
      <div
        className={`
          hidden lg:flex
          items-center
          tex-white
          ml-4
        `}
      >
        <span className={`text-white`}>Light</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.doggleTheme}
      className={`
      hidden sm:flex
      justify-center
      items-center
      bg-gradient-to-r
      from-gray-500
      to-gray-900
      w-14 lg:w-24 h-8
      cursor-pointer
      p-1
      rounded-full
    `}
    >
      <div
        className={`
          hidden lg:flex
          items-center
          tex-white
          mr-4
          
        `}
      >
        <span className={`text-gray-300`}>Dark</span>
      </div>
      <div
        className={`
        flex
        items-center
        justify-center
        text-yellow-300
        bg-black
        rounded-full
        w-6
        h-6
      `}
      >
        {IconMoon}
      </div>
    </div>
  );
}

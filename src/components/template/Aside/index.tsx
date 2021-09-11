import Brand from "../Brand";
import Li from "../Li";

import { IconAdjust, IconNotification, IconClose, IconHome } from "../../icons";
import useAuthDada from "../../../data/hook/useAuthData";

export default function Aside() {
  const { logout } = useAuthDada();
  return (
    <aside
      className={`
      flex flex-col 
      bg-gray-200 text-gray-700
      dark:bg-gray-900 dark:text-gray-200
    `}
    >
      <Brand url={"/"} title={"Brand"} isImage={true} />
      <ul className={`flex-grow`}>
        <Li icon={IconHome} title={"Home"} url={"/"} />
        <Li icon={IconAdjust} title={"Settings"} url={"/settings"} />
        <Li
          icon={IconNotification}
          title={"Notification"}
          url={"/notifications"}
        />
      </ul>
      <ul>
        <Li
          icon={IconClose}
          title={"Logout"}
          onClick={logout}
          className={`
          text-red-600 dark:text-red-600  
          hover:bg-red-400 hover:text-white
          dark:hover:text-white
          `}
        />
      </ul>
    </aside>
  );
}

import { createContext, ReactNode, useEffect, useState } from "react";

// type Theme = "dark" | "";

interface IAppContextProps {
  theme?: string;
  doggleTheme?: () => void;
}

interface IAppProvideProps {
  children?: ReactNode;
}

const AppContext = createContext<IAppContextProps>({});

export function AppProvider(props: IAppProvideProps) {
  const [theme, setTheme] = useState("");

  function doggleTheme() {
    const newTheme = theme === "" ? "dark" : "";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    const themeSave = localStorage.getItem("theme");
    setTheme(themeSave);
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        doggleTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;

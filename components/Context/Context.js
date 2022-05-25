import { useState, createContext, useContext, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [show_nav, set_Nav] = useState(false);
  const [search, setSearch] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    setOpenSearch(!openSearch);
  };
  let theme;
  let switchTheme;
  let clickedClass;
  let lightTheme;
  let darkTheme;
  let ele;
  if (typeof window === "object") {
    clickedClass = "clicked";
    lightTheme = "light";
    darkTheme = "dark";
    let body = document.body;

    if (localStorage) {
      theme = localStorage.getItem("theme");
    }
    if (theme === lightTheme || theme === darkTheme) {
      body.classList.add(theme);
      ele = <FaMoon />;
    } else {
      body.classList.add(lightTheme);
      ele = <FaMoon />;
    }

    switchTheme = (e) => {
      if (theme === darkTheme) {
        body.classList.replace(darkTheme, lightTheme);
        ele = <FaMoon />;
        e.target.classList.remove(clickedClass);
        localStorage.setItem("theme", "light");

        theme = lightTheme;
      } else {
        body.classList.replace(lightTheme, darkTheme);
        ele = <FaSun />;
        e.target.classList.add(clickedClass);
        localStorage.setItem("theme", "dark");

        theme = darkTheme;
      }
    };
  }

  const showNav = () => {
    set_Nav(!show_nav);
  };
  const closeNav = () => {
    set_Nav(false);
  };

  return (
    <AppContext.Provider
      value={{
        switchTheme,
        theme,
        clickedClass,
        lightTheme,
        darkTheme,
        ele,
        show_nav,
        showNav,
        closeNav,
        search,
        handleSearch,
        handleClick,
        openSearch
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};

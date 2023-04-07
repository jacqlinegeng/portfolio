import React from "react";
import { PropTypes } from 'prop-types';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [themename, setthemename] = React.useState("light");

  const toggletheme =() => {
    themename === "light" ? setthemename("dark") : setthemename("light");
  };

  return (
    <ThemeContext.Provider value={[{ themename, toggletheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { ThemeProvider, ThemeContext };
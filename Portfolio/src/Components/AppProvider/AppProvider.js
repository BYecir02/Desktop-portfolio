import React from "react";
import { ThemeProvider } from "@emotion/react";
import { themes } from "../../Themes/themes";
import { useState } from "react";

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark); // Thème par défaut (sombre)

  return (
    <ThemeProvider theme={theme}>
      {React.cloneElement(children, { setTheme, theme })}
    </ThemeProvider>
  );
};

export default AppProvider;
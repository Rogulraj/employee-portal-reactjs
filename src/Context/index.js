import React from "react";

const AppContext = React.createContext({
  theme: "",
  setTheme: () => {},
});

export default AppContext;

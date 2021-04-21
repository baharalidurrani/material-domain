import React from "react";
import { NavDrawer } from "./components/NavDrawer/NavDrawer";
import { CustomMuiTheme } from "./theme/CustomMuiTheme";

function App() {
  const [state, setState] = React.useState<null | "light" | "dark">(null);
  React.useEffect(() => {
    console.log("*********App useEffect*********");
    setTimeout(() => {
      setState("light");
    }, 5000);
    setTimeout(() => {
      setState("dark");
    }, 20000);
  }, []);
  return (
    <CustomMuiTheme themeState={state}>
      <NavDrawer />
    </CustomMuiTheme>
  );
}

export default App;

import React from "react";
import { NavDrawer } from "./components/NavDrawer/NavDrawer";
import { CustomMuiTheme } from "./theme/CustomMuiTheme";

function App() {
  return (
    <CustomMuiTheme>
      <NavDrawer />
    </CustomMuiTheme>
  );
}

export default App;

import React from "react";
import { NavDrawer } from "./components/NavDrawer/NavDrawer";
import { AppRouting } from "./routes/AppRouting";
import { CustomMuiTheme } from "./theme/CustomMuiTheme";

function App() {
  return (
    <CustomMuiTheme>
      {/* <AppRouting /> */}
      <NavDrawer />
    </CustomMuiTheme>
  );
}

export default App;

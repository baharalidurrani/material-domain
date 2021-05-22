import React from "react";
import { AppRouting } from "./routes/AppRouting";
import { CustomMuiTheme } from "./theme/CustomMuiTheme";

function App() {
  return (
    <CustomMuiTheme>
      <AppRouting />
    </CustomMuiTheme>
  );
}

export default App;

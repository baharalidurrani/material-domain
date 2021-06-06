import React from "react";
import { AppRouting } from "./routes/AppRouting";
import { CustomMuiTheme } from "./theme/CustomMuiTheme";

function App() {
  console.log("App Rendered 🚀🚀🚀");
  return (
    <CustomMuiTheme>
      <AppRouting />
    </CustomMuiTheme>
  );
}

export default App;

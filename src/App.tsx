import React from "react";
import { AppRouting } from "./routes/AppRouting";
import { CustomMuiTheme } from "./theme/CustomMuiTheme";

type Props = {};

export function App({}: Props): React.ReactElement {
  console.log("App Rendered 🚀🚀🚀");
  return (
    <CustomMuiTheme>
      <AppRouting />
    </CustomMuiTheme>
  );
}

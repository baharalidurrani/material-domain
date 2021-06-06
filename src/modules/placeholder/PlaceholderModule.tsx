import React from "react";
// import { AppLayout } from "src/components/appLayout/AppLayout";
import { ModuleRouter } from "src/components/molecules";
import { PlaceholderRoute } from "./placeholder.routes";

export function PlaceholderModule() {
  console.log("PlaceholderModule");

  return (
    // <AppLayout>
    <ModuleRouter moduleRoute={PlaceholderRoute} />
    // </AppLayout>
  );
}

import React from "react";
import { AppLayout } from "src/components/appLayout/AppLayout";
import { ModuleRouter } from "src/components/molecules";
import { HomeRoute } from "./home.routes";

export function HomeModule() {
  console.log("HomeModule");

  return (
    <AppLayout>
      <ModuleRouter moduleRoute={HomeRoute} />
    </AppLayout>
  );
}

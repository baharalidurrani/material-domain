import React from "react";
import { ModuleRouter } from "src/components/molecules";
import { AuthRoute } from "./auth.routes";

export function AuthModule() {
  console.log("AuthModule");

  return <ModuleRouter moduleRoute={AuthRoute} />;
}

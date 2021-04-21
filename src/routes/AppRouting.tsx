import React from "react";
import { BrowserRouter } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export function AppRouting(props: Props) {
  return <BrowserRouter>{props.children}</BrowserRouter>;
}

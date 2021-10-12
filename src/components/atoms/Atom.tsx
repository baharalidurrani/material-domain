import React from "react";
import Typography from "@mui/material/Typography";

interface Props {
  name: string;
}
export function Atom(props: Props) {
  return <Typography variant="h5">{props.name}</Typography>;
}

import React from "react";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";

type Props = {};

export function AboutModule({}: Props): React.ReactElement {
  console.log("AboutModule Rendered");
  return (
    <Container>
      <Typography variant="h1" align="center">
        AboutModule Coming Soon...
      </Typography>
      <Typography variant="h6" align="center">
        Welcome to the most Efficient, Elegant and Easy to Excel production ready React template of
        2021 that one can <del>ever</del> never find on the web.
      </Typography>
    </Container>
  );
}

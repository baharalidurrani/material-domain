import React from "react";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";

type Props = {};

export function AboutModule({}: Props): React.ReactElement {
  console.log("AboutModule Rendered");

  return (
    <Container>
      <Box m={6}>
        <Typography variant="h2" align="center">
          AboutModule Coming Soon...
        </Typography>
      </Box>
      <Typography variant="body1" align="center">
        Welcome to the most Efficient, Elegant and Easy to Excel production ready React template of
        2021 that one can <del>ever</del> never find on the web.
      </Typography>
    </Container>
  );
}

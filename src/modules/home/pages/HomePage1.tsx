import React from "react";
import { Box, Container, Typography } from "@mui/material";

type Props = {};

export function HomePage1({}: Props): React.ReactElement {
  console.log("HomePage1 Rendered");
  return (
    <Container>
      <Box mt={6}>
        <Typography variant="h2" align="center">
          Full Stack Developer
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="body2" align="center">
          Typescript | JavaScript | React | Node
        </Typography>
      </Box>
      <Box mt={6}>
        <Typography variant="body1" align="center">
          A passionate Software Engineer whose dream is to work on a highly scaled application which
          is used by millions of users, an application that is developed using the cutting edge
          technologies.
        </Typography>
        <Typography variant="body1" align="center">
          I strongly follow the conventions of a technology that I work on so that my work is neat,
          efficient, readable & reusable.
        </Typography>
        <Typography variant="body1" align="center">
          I am willing to work both remotely and in person as well.
        </Typography>
      </Box>
    </Container>
  );
}

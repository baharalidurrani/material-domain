import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from "src/app-redux/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "src/app-redux/hooks";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <Container>
      <Typography variant="h1" align="center">
        Counter
      </Typography>

      <Box m={10}>
        <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
          <Grid item>
            <IconButton
              color="primary"
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
              size="large"
            >
              <RemoveCircleOutlineOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h3">{count}</Typography>
          </Grid>
          <Grid item>
            <IconButton
              color="primary"
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
              size="large"
            >
              <AddCircleOutlineOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
        <TextField
          type="number"
          size="small"
          label="Set increment amount"
          variant="outlined"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button
          color="primary"
          variant="outlined"
          size="large"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </Button>
        <Button
          color="primary"
          variant="outlined"
          size="large"
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </Button>
        <Button
          color="primary"
          variant="outlined"
          size="large"
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </Button>
      </Grid>
    </Container>
  );
}

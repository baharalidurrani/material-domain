import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "src/app-redux/counter/counterSlice";
import { useAppSelector, useAppDispatch } from "src/app-redux/hooks";

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
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Grid item>
            <IconButton
              color="primary"
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
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
            >
              <AddCircleOutlineOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Grid container direction="row" justify="space-evenly" alignItems="center">
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

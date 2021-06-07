import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { App } from "./App";
import { store } from "./app-redux/store";

test("renders the word root", () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getAllByText(/bahar/i)[0]).toBeInTheDocument();
});

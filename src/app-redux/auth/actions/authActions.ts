import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { clearToken, getToken } from "src/common/utils/tokenManager.util";
import { AuthState } from "../authSlice";

export const handleLogin = (state: AuthState, { payload }: PayloadAction<string>) => {
  state.status = "idle";
  state.TOKEN = payload;
};

export const loginAction = createAsyncThunk(
  "@@auth/loginAction",
  async ({ username }: { username: string }) => {
    const TOKEN = `username: ${username}`;
    localStorage.setItem("TOKEN", TOKEN);
    return await new Promise<string>((res) => {
      setTimeout(() => {
        res(TOKEN);
      }, 1000);
    });
  }
);

export const currentUserAction = createAsyncThunk("@@auth/currentUserAction", async () => {
  const TOKEN = getToken();
  if (TOKEN) return TOKEN;
  else throw new Error("Unable to get TOKEN from localStorage");
});

export const logOutAction = createAsyncThunk("auth/logOutAction", async () => {
  clearToken();
});

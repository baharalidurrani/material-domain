import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { clearToken, setToken } from 'src/common/utils/tokenManager.util';
import { AuthState } from '../authSlice';

export const handleLogin = (state: AuthState, { payload }: PayloadAction<string>) => {
  state.status = 'idle';
  state.TOKEN = payload;
};

export const loginAction = createAsyncThunk(
  '@@auth/loginAction',
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  async ({ email, password }: { email: string; password: string }, { dispatch }) => {
    // Mimic sleep function
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const TOKEN = `LOGIN API CALL TODO IMPLEMENT HERE ${email + password}`;

    // Dispatch Profile Action here
    // void dispatch(setProfileAction('TOKEN.data'));
    setToken(TOKEN);
    return TOKEN;
  }
);

interface ISignUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export const signUpAction = createAsyncThunk(
  '@@auth/signUpAction',
  async ({ firstName, lastName, email, password }: ISignUp) => {
    const success = `SignUp API CALL TODO IMPLEMENT HERE ${firstName + lastName + email + password}`;

    setToken(success);
    return success;
  }
);

export const logOutAction = createAsyncThunk('auth/logOutAction', () => {
  // global.google?.accounts.id.disableAutoSelect();
  clearToken();
  // void dispatch(clearProfileAction());
});

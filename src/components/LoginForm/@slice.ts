import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from '../../utils/API'

// Define a type for the slice state
export interface Form {
  email: string;
  password: string;
}
export interface LoginFormState {
  email: string;
  password: string;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
export interface Response {
  type: string;
  message: {
    token: string;
  }
}
// Define the initial state using that type
const initialState: LoginFormState = {
  email: '',
  password: '',
  loading: 'idle'
}

export const loginUser = createAsyncThunk(
  'login/auth',
  async (data: Form, thunkAPI) => {
    const postOptions = {
      body: JSON.stringify({ email: data.email, password: data.password }),
      method: 'POST',
    };
    const response = await fetchData('/api/login/', postOptions);
    return await (response.json()) as Response;
  })

export const loginFormSlice = createSlice({
  name: 'login',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeEmail: (state, action:PayloadAction<string>) => {
      state.email = action.payload
    },
    changePassword: (state, action:PayloadAction<string>) => {
      state.password = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = 'pending'
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.password = '';
      state.email = '';
      localStorage.setItem('token', action.payload.message.token);
    });
  }
})

export const { changeEmail, changePassword } = loginFormSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectLogin = (state: RootState) => state.loginForm.login;
//export const selectPassword = (state: RootState) => state.loginForm.password;

export default loginFormSlice.reducer

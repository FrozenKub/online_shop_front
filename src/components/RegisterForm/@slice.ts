import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchData} from '../../utils/API'

// Define a type for the slice state
export interface Form {
    email: string;
    username: string;
    password: string;
}

export interface RegisterFormState {
    email: string;
    username: string;
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
const initialState: RegisterFormState = {
    email: '',
    username: '',
    password: '',
    loading: 'idle'
}

export const registerUser = createAsyncThunk(
    'login/auth',
    async (data: Form, thunkAPI) => {
        const postOptions = {
            body: JSON.stringify({name: data.username, email: data.email, password: data.password}),
            method: 'POST',
        };
        const response = await fetchData('/api/login/', postOptions);
        return await (response.json()) as Response;
    })

export const registerFormSlice = createSlice({
    name: 'register',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        changeUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        changeEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        changePassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(registerUser.pending, (state, action) => {
            state.loading = 'pending'
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.password = '';
            state.email = '';
            localStorage.setItem('token', action.payload.message.token);
        });
    }
})

export const {changeEmail, changePassword, changeUsername} = registerFormSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectLogin = (state: RootState) => state.loginForm.login;
//export const selectPassword = (state: RootState) => state.loginForm.password;

export default registerFormSlice.reducer

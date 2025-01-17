import {createBrowserHistory} from "history";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {connectRouter} from "connected-react-router";
import counterReducer from './components/Counter/@slice';
import loginFormReducer from './components/LoginForm/@slice';
import registerFormReducer from './components/RegisterForm/@slice';
import navBarReducer from './components/Navigation/@slice'

export const history = createBrowserHistory();

const middleware = getDefaultMiddleware({thunk: true})

const reducer = {
  router: connectRouter(history),
  counter: counterReducer,
  loginForm: loginFormReducer,
  registerForm: registerFormReducer,
  NavBar: navBarReducer,
  // auth:
}

export const store = configureStore({
  reducer,
  middleware
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

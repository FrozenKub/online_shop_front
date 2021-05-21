import * as React from 'react';
import Nav from "../../components/Navigation";
import LoginForm from '../../components/LoginForm';
import {ThemeProvider} from "@material-ui/core";
import theme from '../../themes/main'

export const Login: React.FC = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Nav/>
                <LoginForm/>
            </ThemeProvider>
        </div>
    );

}

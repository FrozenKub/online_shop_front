import * as React from 'react';
import Nav from "../../components/Navigation";
import RegisterForm from '../../components/RegisterForm';
import {ThemeProvider} from "@material-ui/core";
import theme from '../../themes/main'

export const Register: React.FC = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Nav/>
                <RegisterForm/>
            </ThemeProvider>
        </div>
    );

}
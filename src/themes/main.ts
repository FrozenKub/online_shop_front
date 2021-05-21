import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#9db794',
            main: '#85A67A',
            dark: '#5d7455',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ecafc3',
            main: '#E89CB5',
            dark: '#a26d7e',
            contrastText: '#000',
        },
    },
});

export default theme
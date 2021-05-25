import * as React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeEmail, changePassword, changeUsername ,registerUser} from './@slice';
import {Button, TextField, Box} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Routes from "../../pages/routes";
import {Redirect} from "react-router-dom";

const LoginForm: React.FC = () => {
    const email = useAppSelector(state => state.registerForm.email);
    const username = useAppSelector(state => state.registerForm.username);
    const password = useAppSelector(state => state.registerForm.password);
    const status = useAppSelector(state => state.registerForm.loading)

    const dispatch = useAppDispatch();

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: theme.spacing(1),
                '& .MuiTextField-root': {
                    margin: theme.spacing(1),
                    width: '70ch',
                },
            },
        }),
    );

    const classes = useStyles();

    if (status == "succeeded"){
        return <Redirect to {Routes.LOGIN} />
    }

    return (
        <form className={classes.root} noValidate autoComplete="off"
              color='primary'>
            <div>{status}</div>
            <div><TextField
                id="standard-username-input"
                label="Username"
                type="username"
                autoComplete="current-username"
                variant="filled"
                value={username}
                onChange={(event) => dispatch(changeUsername(event.target.value))}
            /></div>
            <div><TextField
                id="standard-email-input"
                label="Email"
                type="email"
                autoComplete="current-email"
                variant="filled"
                value={email}
                onChange={(event) => dispatch(changeEmail(event.target.value))}
            /></div>
            <div><TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                value={password}
                onChange={(event) => dispatch(changePassword(event.target.value))}
            /></div>

            <Button color="secondary" variant='contained'
                    onClick={
                        () => dispatch(registerUser({username, email, password}))}>Зарегаться</Button>
        </form>

    )
}

export default LoginForm;

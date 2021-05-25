import * as React from 'react';
import {InputGroup} from '@blueprintjs/core';
import s from './LoginForm.module.scss'
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeEmail, changePassword, loginUser} from './@slice';
import {Button, TextField, Box} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const LoginForm: React.FC = () => {
    const email = useAppSelector(state => state.loginForm.email);
    const password = useAppSelector(state => state.loginForm.password);
    const status = useAppSelector(state => state.loginForm.loading)

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

    return (
        <form className={classes.root} noValidate autoComplete="off"
              color='primary'>
            <div>{status}</div>
            <Box>
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
                            () => {
                                localStorage.setItem("token", JSON.parse(dispatch(loginUser({email, password}))).token);
                            }}>Войти</Button>
            </Box>
        </form>

    )
}

export default LoginForm;

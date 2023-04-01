import { useState, useEffect } from 'react';
import '../App.sass';
import { Stack, Typography, Button, Card, CardContent, FormControl, Input, InputLabel, CardActions, Alert, TextField } from '@mui/material';
import { sendLoginRequest } from '../controllers/AuthController';

function Login() {
    useEffect(() => {
        document.title = 'Авторизация - IceMail';
    }, []);

    const [data, setData] = useState({
        login: "",
        password: ""
    });

    return (
        <div className="Login">
            <Stack
                alignItems="center"
                justifyContent="center"
            >
                <Alert severity="error" id="message" className="message-hidden" sx={{
                    minWidth: 270,
                    mb: 1
                }}>Обнаружены пустые поля</Alert>
                <Card sx={{ minWidth: 300 }}>
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                    >
                        <CardContent>
                            <Stack
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                    Авторизация
                                </Typography>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <TextField
                                            type="email"
                                            label="Почта"
                                            id="registration-email-input"
                                            onChange={(event) => setData((prev) => ({...prev, login: event.target.value}))}
                                        />
                                    </FormControl>
                                </Typography>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <TextField
                                            type="password"
                                            label="Пароль"
                                            id="registration-password-input"
                                            onChange={(event) => setData((prev) => ({...prev, password: event.target.value}))}
                                        />
                                    </FormControl>
                                </Typography>
                            </Stack>
                        </CardContent>
                        <CardActions sx={{ pt: 2.5 }}>
                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => sendLoginRequest({
                                    "login": data.login,
                                    "password": data.password
                                })}
                                className="login-link"
                                sx={{ minWidth: 200, minHeight: 30 }}
                            >Войти</Button>
                        </CardActions>
                    </Stack>
                </Card>
            </Stack>
        </div>
    );
}

export default Login;
import { useState, useEffect } from 'react';
import '../App.sass';
import { Stack, Card, CardContent, Typography, FormControl, InputLabel, Input, Button, TextField, CardActions, Checkbox, FormControlLabel, Alert } from '@mui/material';
import { sendRegistrationRequest } from '../controllers/AuthController';

function Registration() {
    useEffect(() => {
        document.title = 'Регистрация - IceMail';
    }, []);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [rules, setRules] = useState(false);

    const [fieldsNullHidden, setFieldsNullHidden] = useState(true);
    const [rulesNotAcceptedHidden, setRulesNotAcceptedHidden] = useState(true);

    return (
        <div className="Registration">
            <Stack
                alignItems="center"
                justifyContent="center"
            >
                <Alert severity="error" id="message-fields-null" className="message-hidden" sx={{
                    minWidth: 270,
                    mb: 1
                }}>Обнаружены пустые поля</Alert>
                <Alert severity="error" id="message-rules-not-accepted" className="message-hidden" sx={{
                    minWidth: 270,
                    mb: 1
                }}>Необходимо принять правила</Alert>
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
                                    Регистрация
                                </Typography>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <TextField
                                            type="text"
                                            label="Имя"
                                            id="registration-name-input"
                                            onChange={(event) => setName(event.target.value)}
                                        />
                                    </FormControl>
                                </Typography>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <TextField
                                            type="text"
                                            label="Фамилия"
                                            id="registration-surname-input"
                                            onChange={(event) => setSurname(event.target.value)}
                                        />
                                    </FormControl>
                                </Typography>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <TextField
                                            type="text"
                                            label="Логин"
                                            id="registration-login-input"
                                            onChange={(event) => setLogin(event.target.value)}
                                        />
                                    </FormControl>
                                </Typography>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <TextField
                                            type="email"
                                            label="Почта"
                                            id="registration-email-input"
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                    </FormControl>
                                </Typography>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <TextField
                                            type="password"
                                            label="Пароль"
                                            id="registration-password-input"
                                            onChange={(event) => setPassword(event.target.value)}
                                        />
                                    </FormControl>
                                </Typography>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <TextField
                                            type="password"
                                            label="Повтор пароля"
                                            id="registration-repeat-password-input"
                                            onChange={(event) => setPasswordRepeat(event.target.value)}
                                        />
                                    </FormControl>
                                </Typography>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <FormControlLabel control={<Checkbox onChange={(event) => setRules(event.target.checked)}/>} label="Я принимаю правила" />
                                    </FormControl>
                                </Typography>
                            </Stack>
                        </CardContent>
                        <CardActions sx={{ pt: 2.5 }}>
                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => sendRegistrationRequest({
                                    "name": name,
                                    "surname": surname,
                                    "login": login,
                                    "email": email,
                                    "password": password,
                                    "password-repeat": passwordRepeat,
                                    "rules": rules,
                                    "fieldsNullHidden": fieldsNullHidden,
                                    "setFieldsNullHidden": setFieldsNullHidden,
                                    "rulesNotAcceptedHidden": rulesNotAcceptedHidden,
                                    "setRulesNotAcceptedHidden": setRulesNotAcceptedHidden
                                })}
                                className="login-link"
                                sx={{ minWidth: 200, minHeight: 30 }}
                            >Зарегистрироваться</Button>
                        </CardActions>
                    </Stack>
                </Card>
            </Stack>
        </div>
    );
}

export default Registration;
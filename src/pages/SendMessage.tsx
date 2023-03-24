import { useState, useEffect } from 'react';
import { Stack, Alert, Card, CardContent, Typography, FormControl, InputLabel, Input, CardActions, Button, TextField } from '@mui/material';
import { sendMessageRequest } from '../controllers/MessageController';

function SendMessage() {
    useEffect(() => {
        document.title = 'Отправить письмо - IceMail';
    }, []);
    
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [signature, setSignature] = useState('');
    const [category, setCategory] = useState('');

    return (
        <div className="SendMessage">
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
                                    Отправить письмо
                                </Typography>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <TextField
                                            type="email"
                                            label="Почта"
                                            id="send-mail-email-input"
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                    </FormControl>
                                </Typography>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <TextField
                                            type="text"
                                            label="Тема"
                                            id="send-mail-subject-input"
                                            onChange={(event) => setSubject(event.target.value)}
                                        />
                                    </FormControl>
                                </Typography>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <TextField
                                            id="send-mail-body-input"
                                            label="Текст"
                                            multiline
                                            rows={4}
                                            onChange={(event) => setBody(event.target.value)}
                                        />
                                    </FormControl>
                                </Typography>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <TextField
                                            type="text"
                                            label="Подпись"
                                            id="send-mail-signature-input"
                                            onChange={(event) => setSignature(event.target.value)}
                                        />
                                    </FormControl>
                                </Typography>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <TextField
                                            type="text"
                                            label="Категория"
                                            id="send-mail-category-input"
                                            onChange={(event) => setCategory(event.target.value)}
                                        />
                                    </FormControl>
                                </Typography>
                            </Stack>
                        </CardContent>
                        <CardActions sx={{ pt: 2.5 }}>
                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => sendMessageRequest({
                                    "email": email,
                                    "subject": subject,
                                    "body": body,
                                    "signature": signature,
                                    "category": category
                                })}
                                sx={{ minWidth: 200, minHeight: 30 }}
                            >Отправить</Button>
                        </CardActions>
                    </Stack>
                </Card>
            </Stack>
        </div>
    );
}

export default SendMessage;
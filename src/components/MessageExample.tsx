import { Stack, Alert, Card, CardContent, Typography, FormControl, InputLabel, Avatar, Input, TextField, CardActions, Button } from '@mui/material';

function MessageExample() {
    return (
        <div className="MessageExample">
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
                                <Stack
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Avatar sx={{ bgcolor: "purple" }}>B</Avatar>
                                    <Typography sx={{ fontWeight: "bold" }}>B@ice.ru</Typography>
                                </Stack>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <TextField
                                            InputProps={{
                                                readOnly: true
                                            }}
                                            label="Тема"
                                            type="text"
                                            id="read-mail-subject"
                                            value="Тема"
                                        />
                                    </FormControl>
                                </Typography>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <TextField
                                            InputProps={{
                                                readOnly: true
                                            }}
                                            id="read-mail-body"
                                            label="Текст"
                                            multiline
                                            rows={4}
                                            value="Краткое описание&#13;Краткое описание&#13;Краткое описание"
                                        />
                                    </FormControl>
                                </Typography>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <TextField
                                            InputProps={{
                                                readOnly: true
                                            }}
                                            label="Подпись"
                                            type="text"
                                            id="read-mail-signature"
                                            value="Подпись"
                                        />
                                    </FormControl>
                                </Typography>
                                <Typography sx={{ pt: 2.5 }}>
                                    <FormControl>
                                        <TextField
                                            InputProps={{
                                                readOnly: true
                                            }}
                                            label="Категория"
                                            type="text"
                                            id="read-mail-category"
                                            value="Тестовое письмо"
                                        />
                                    </FormControl>
                                </Typography>
                            </Stack>
                        </CardContent>
                        <CardActions sx={{ pt: 2.5 }}>
                            <Button
                                variant="contained"
                                size="small"
                                sx={{ minWidth: 200, minHeight: 30 }}
                                onClick={() => document.location = '/profile'}
                            >&#8592;Назад</Button>
                        </CardActions>
                    </Stack>
                </Card>
            </Stack>
        </div>
    );
}

export default MessageExample;
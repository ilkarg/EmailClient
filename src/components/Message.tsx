import { Stack, Card, CardContent, Avatar, Typography } from '@mui/material';
import '../App.sass';

function Message() {
    return (
        <div className="Message" onClick={() => document.location = '/message'}>
            <Stack
                justifyContent="center"
                alignItems="center"
            >
                <Card sx={{
                    mt: 1,
                    width: {
                        xs: 340,
                        sm: 500,
                        md: 700,
                        lg: 900,
                        xl: 1200
                    },
                    height: 70
                }}>
                    <CardContent>
                        <Stack
                            alignItems="center"
                            direction="row"
                        >
                            <Avatar
                                sx={{
                                    bgcolor: "purple"
                                }}
                            >B</Avatar>
                            <Typography
                                sx={{ 
                                    fontWeight: "bold",
                                    fontSize: {
                                        xs: 20,
                                        sm: 20,
                                        md: 20,
                                        lg: 20,
                                        xl: 20
                                    },
                                    pl: {
                                        xs: 1,
                                        sm: 1,
                                        md: 1,
                                        lg: 1,
                                        xl: 1
                                    }
                                }}
                            >Тема</Typography>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: 20,
                                        sm: 20,
                                        md: 20,
                                        lg: 20,
                                        xl: 20
                                    },
                                    pl: {
                                        xs: 1.3,
                                        sm: 1.3,
                                        md: 1.3,
                                        lg: 1.3,
                                        xl: 1.3
                                    }
                                }}
                            >Краткое содержание</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </div>
    );
}

export default Message;
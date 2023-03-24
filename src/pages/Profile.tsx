import { useEffect, useState } from 'react';
import Message from "../components/Message";
import { Stack, Button, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { Link } from 'react-router-dom';
import '../App.sass';

function Profile() {
    const [category, setCategory] = useState('');

    useEffect(() => {
        document.title = 'Профиль - IceMail';
    }, []);
    
    return (
        <div className="Profile">
            <Stack
                justifyContent="center"
                alignItems="center"
            >
                <Stack direction="row">
                    <Link to="/send-message" className="send-message-button">
                        <Button variant="contained"
                            sx={{
                                width: {
                                    md: 700,
                                    lg: 200,
                                    xl: 200
                                }
                            }}
                        >Написать письмо</Button>
                    </Link>
                    <FormControl>
                        <InputLabel id="mail-category-label">Категория</InputLabel>
                        <Select
                            labelId="mail-category-label"
                            id="mail-category"
                            value={category}
                            label="Категория"
                            onChange={(event) => setCategory(event.target.value)}
                            sx={{
                                ml: 1.5,
                                height: 40,
                                width: {
                                    md: 700,
                                    lg: 200,
                                    xl: 200
                                }
                            }}
                        >
                            <MenuItem value={1}>Тестовое письмо</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>

                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </Stack>
        </div>
    );
}

export default Profile;
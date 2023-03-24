import { useState } from 'react';
import { Box, Tabs, Tab, Stack, Typography } from '@mui/material';
import Registration from '../components/Registration';
import Login from '../components/Login';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function allyProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Auth() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className="Auth">
            <Stack
                justifyContent="center"
                alignItems="center"
            >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Авторизация" {...allyProps(0)} />
                        <Tab label="Регистрация" {...allyProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Login />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Registration />
                </TabPanel>
            </Stack>
        </div>
    );
}

export default Auth;
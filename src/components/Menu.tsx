import { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import '../App.sass';

function MenuAppBar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    
    let handleClose = () => {
      setAnchorEl(null);
    };

    let location: string = document.location.toString().substring(
        document.location.toString().lastIndexOf("/"),
        document.location.toString().length
    );

    let handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    let renderMenu = (auth: boolean) => {
        if (auth) {
            return (
                <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Avatar 
                      sx={{
                        backgroundColor: "green",
                        width: 30,
                        height: 30
                      }}
                    >i</Avatar>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        ml: {
                          xs: 0.3,
                          sm: 0.3,
                          md: 0.3,
                          lg: 0.3,
                          xl: 0.3
                        }
                      }}
                    >ilya@ice.ru</Typography>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={() => document.location = '/profile'}>Профиль</MenuItem>
                  <MenuItem onClick={() => document.location = '/'}>Выход</MenuItem>
                </Menu>
              </div>
            );
        } else {
          return (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => document.location = '/auth'}>Войти</MenuItem>
              </Menu>
            </div>
          );
        }
    }
  
    let authorizedLink: string[] = [
      "/profile", "/send-message", "/message"
    ];

    return (
      <div className="Menu">
        <Box sx={{ flexGrow: 1, m: -1, mb: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, display: "none" }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                IceMail
              </Typography>
              { renderMenu(authorizedLink.indexOf(location) != -1)}
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  }

  export default MenuAppBar;
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Me from '../../images/profile-img/Snapchat-1577513548.jpg'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import {Link, Outlet} from 'react-router-dom'
import './Nav.css'



const pages = [<Link to='/'>Home</Link> , <Link to='/About'>About</Link>, 'Services', 'Progress', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Nav2 = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="fixed" className='animate__animated animate__lightSpeedInRight' sx={{ background: '#fff',  boxShadow: '2px 3px 5px #ccc', height:'80px', alignItems:'cemter', display:'flex', justifyContent:'center'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Dancing Script',
              fontWeight: 800,
              letterSpacing: '.1rem',
              color: 'var(--primary-color)',
              textDecoration: 'none',
              paddingLeft: '30px',
            }}
          >
            Space Online
          </Typography>

          <Box sx={{ flexGrow: '1', display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className='icon-color'/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="./"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Dancing Script',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'var(--primary-color)',
              textDecoration: 'none',
            }}
          >
          Space Online
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems:'center', justifyContent: 'center'} }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'var(--primary-color)', display: 'block', fontFamily: 'Aleo', textAlign: 'center', textTransform:'capitalize', fontWeight:'400'}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex', marginRight:'20px' } }}>
            <IconButton size="large" aria-label="show 4 new mails" sx={{ color:'var(--primary-color)'}}>
              <Badge badgeContent={4} color="error" >
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error" sx={{ color:'var(--primary-color)'}}>
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={Me} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '60px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{ width:'200px'}}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Nav2
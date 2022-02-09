import { makeStyles } from "@material-ui/core";
import React from 'react';
import { AppBar, Toolbar, Box, IconButton, Typography, Menu, Container, Avatar, MenuItem, Tooltip } from '@mui/material';
import HeaderButtons from "./HeaderButtons";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { handleDrawerVisibility } from "../../components/redux/action";
import { HANDLE_LOGIN_VISIBILITY } from "../../components/redux/actions-type";
import { useDispatch } from "react-redux";



const useStyle = makeStyles({
    header: {
        background: '#2874f0',
        height: 55,
     position:"sticky",
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        color: '#FFFFFF',
        textDecoration: 'none'
    },
    container: {
        display: 'flex',

    },
    logo: {
        width: 75,
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4,
    },
    subHeading: {
        fontSize: 10,
        fontStyle: "italic",
    }
})

const ResponsiveAppBar = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const classes = useStyle();
    const dispatch = useDispatch();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const history = useHistory();
  

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const Logout = () => {
        localStorage.clear();
        history.push("/");
    }
    const handleLoginOpen = (status) => {
        localStorage.clear();
        history.push("/");
        dispatch(handleDrawerVisibility(HANDLE_LOGIN_VISIBILITY, status));
      };
    return (
        <Box style={{position:"-webkit-sticky",bottom:20}}>
<AppBar position="static" className={classes.header}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/" className={classes.component}>
                        <img src={logoURL} alt="" className={classes.logo} />
                        <Box className={classes.container}>

                            <Typography className={classes.subHeading}>Explore Plus</Typography>
                            <img src={subURL} alt="" className={classes.subURL} />

                        </Box>
                    </Link>
                    <SearchBar />
                    <HeaderButtons />
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings" style={{ marginBottom: 10 }}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            </IconButton>
                        </Tooltip>
                        {localStorage.getItem("email","password") &&   <Menu
                            sx={{ mt: '45px' }}
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

                            <MenuItem onClick={handleCloseUserMenu}>
                                
                                <Typography textAlign="center" onClick={() => handleLoginOpen(true)}> Logout</Typography>
                            </MenuItem>

                        </Menu>}
                      
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
        </Box>
        
    );
};
export default ResponsiveAppBar;

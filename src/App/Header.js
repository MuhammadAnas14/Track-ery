import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Avatar,
} from '@material-ui/core';
import { HomeRounded, AccountCircle, MenuRounded } from '@material-ui/icons';

import Typography from '@material-ui/core/Typography';
import SideBar from './SideBar';
// import './app.css';
// misc
import {
  authMenus,
  noAuthMenus,
  toolTipIcons,
} from '../Common/DefaultValues/iconButtonArrays';


const Header = (props) => {
  const { userDetails, classes, isAuthenticated, history, signOut } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [sideBar, setSideBar] = useState(false);
  const handleRouteChange = (path) => {
    if (path === 'https://github.com/MuhammadAnas14/Track-ery/') {
      window.location.replace(path);
    } else {
      history.push(path);
    }
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuClick = (path) => {
    handleClose();
    if (path === '/account') {
      handleRouteChange(path);
      window.location.reload();
    } else {
      handleRouteChange(path);
    }
  };
  const handleSignOut = () => {
    handleClose();
    signOut();
  };
  const handleSideBarSelect = (path) => {
    if (!path) {
      signOut();
    } else {
      if (path === '/account') {
        handleRouteChange(path);
        window.location.reload();
      } else if (path === '/meals') {
        console.log('Coming soon');
      } else {
        handleRouteChange(path);
      }
    }
    setSideBar(false);
  };
  const theme = useTheme();
  const showMenuIcons = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <SideBar
        handleClose={() => setSideBar(false)}
        classes={classes}
        show={sideBar && !showMenuIcons}
        isAuthenticated={isAuthenticated}
        handleSideBarSelect={handleSideBarSelect}
      />
      <AppBar position='fixed'>
        <Toolbar disableGutters className={classes.menuBarLayout}>
          <div className={classes.menuBarLeft}>
            {/* display sidebar menu on small device */}
            {!showMenuIcons && (
              <IconButton onClick={() => setSideBar(true)} color='inherit'>
                <MenuRounded />
              </IconButton>
            )}
             <Typography variant="h5" style={{fontFamily: 'Montserrat', fontWeight:700, margin:'10px'}} color='inherit' onClick={() => handleRouteChange('/')}>
                Track-ery.
              </Typography>
          </div>
          <div className={classes.menuBarRight}>
              <Typography variant="h7" color='inherit' className={classes.navlinks} onClick={() => handleRouteChange('/map') }>
                Explore
              </Typography>
              <Typography variant="h7" color='inherit' className={classes.navlinks} onClick={() => handleRouteChange('https://github.com/MuhammadAnas14/Track-ery/')}>
                Source Code
              </Typography>
            {/* search bar, copied style from material ui */}
            {/* <div className={classes.search}> */}
            {/*   <div className={classes.searchIcon}> */}
            {/*     <Search /> */}
            {/*   </div> */}
            {/*   <InputBase */}
            {/*     placeholder='Search…' */}
            {/*     classes={{ */}
            {/*       root: classes.inputRoot, */}
            {/*       input: classes.inputInput */}
            {/*     }} */}
            {/*     inputProps={{ 'aria-label': 'search' }} */}
            {/*   /> */}
            {/* </div> */}

            {/* if big device, display */}
            {/* {showMenuIcons ? ( */}
              <>
                {/* {toolTipIcons.map((menuItem, index) => (
                  <Tooltip key={index} title={menuItem.title}>
                     */}
                    {/* <IconButton
                      color='inherit'
                      onClick={() => handleRouteChange(menuItem.path)}
                      style={{
                        opacity: menuItem.disable ? '0.5' : '1',
                      }}
                    >
                      {menuItem.icon}
                      
                    </IconButton> */}
                  {/* </Tooltip>
                ))} */}

                {/* small simple menu */}
                {/* <Tooltip title='Account'>
                  <IconButton
                    onClick={handleClick}
                    style={{ color: 'white' }}
                  >
                    {isAuthenticated ? (
                      <Avatar
                        style={{ width: '1.6rem', height: '1.6rem' }}
                        src={userDetails.photoUrl}
                      />
                    ) : (
                      <AccountCircle />
                    )}
                  </IconButton>
                </Tooltip> */}
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {isAuthenticated
                    ? authMenus.map((item, index) => (
                        <MenuItem
                          onClick={
                            item.path
                              ? () => handleMenuClick(item.path)
                              : handleSignOut
                          }
                          key={index}
                        >
                          {item.text}
                        </MenuItem>
                      ))
                    : noAuthMenus.map((item, index) => (
                        <MenuItem
                          key={index}
                          onClick={() => handleMenuClick(item.path)}
                        >
                          {item.text}
                        </MenuItem>
                      ))}
                </Menu>
              </>
            {/* ) : ( */}
              {/* <Avatar
                variant='square'
                // src={HeaderLogo}
                className={classes.headerLogo}
              /> */}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
  userDetails: PropTypes.object.isRequired,
};

export default withRouter(Header);

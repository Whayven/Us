import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import logo from '../../assets/logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links: {
    textDecoration: 'none',
    color: 'inherit'
  }
}));

export default function Navigation() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (

    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            aria-controls="main-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="main-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/" className={classes.links}>Home</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/journal" className={classes.links}>Journal</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/gallery" className={classes.links}>Gallery</Link>
            </MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            My Awesome Website
          </Typography>
          <img src={logo} style={{ height: 'auto', width: 'auto', maxHeight: '62px', maxWidth: '250px', position: 'absolute', left: '50%' }} alt="logo" />
          <Button color="inherit">
            <Link to="/signin" className={classes.links}>Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>


  );
}

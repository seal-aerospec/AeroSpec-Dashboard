// ./assets/UI_component
import MenuIcon from '../assets/UI_component_svg/MenuIcon';
import NotificationIcon from '../assets/UI_component_svg/NotificationIcon';

// Material UI Imports
import AppBar from '@material-ui/core/AppBar';

import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import Suggestion from  '../assets/Suggestion';

function Topbar({menu, handleOpen, handleClose, handleChange, openMenu, closeMenu, modalOpen,
  smallScreen, setSmallScreen}) {

  const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: '#FFFFFF',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      position: 'relative',
    },
    appBarShift: {
      width: '84%',
      marginLeft: '16%',
      // [theme.breakpoints.down('md')]: {
      //   width: '70%',
      //   marginLeft: '30%',
      // },
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  }));

  const classes = useStyles();

  return (
      <AppBar
      elevation={1} 
      className={clsx(classes.appBar, {
        [classes.appBarShift]: menu,
      })}
    >
      <Toolbar>
        <Grid item container>
          <Grid item>
            <IconButton
              edge="start"
              color="relative"
              aria-label="menu"
              onClick={menu ? closeMenu : openMenu}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              edge="start"
              href="/alerts"
            >
              <NotificationIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Suggestion 
          handleOpen={handleOpen}
          handleClose={handleClose}
          handleChange={handleChange}
          modalOpen={modalOpen}
        />
        
      </Toolbar>
    </AppBar>
  )
}

export default Topbar;
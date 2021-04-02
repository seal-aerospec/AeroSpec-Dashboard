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

function Topbar({menuCollapse, handleOpen, handleClose, collapseClick, handleChange, modalOpen}) {

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
        [classes.appBarShift]: menuCollapse,
      })}
    >
      <Toolbar>
        <Grid item container>
          <Grid item>
            <IconButton
              edge="start"
              color="relative"
              aria-label="menu"
              onClick={collapseClick}
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
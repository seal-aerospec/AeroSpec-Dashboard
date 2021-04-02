// ./assets/UI_component
import MenuIcon from '../assets/UI_component_svg/MenuIcon';
import NotificationIcon from '../assets/UI_component_svg/NotificationIcon';
import suggestionIcon from '../assets/UI_component/suggestions.png';

// Material UI Imports
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

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
    hide: {
      display: 'none',
    },
    suggestionbutton: {
      color: '#6389bf',
      backgroundColor: '#e8eef6',
      marginLeft: 'auto',
      outline: 'none'
    },
    suggestionBackDrop: {
      background: 'rgba(0,0,0,0.2)'
    },
    suggestion: {
      borderRadius: '2vh',
      height: '70vh',
      width: '70vh',
      textAlign: 'center'
    },
    uploadField: {
      borderRadius: '2vh',
      height: '40%',
      width: '50%',
      backgroundColor: 'white',
      borderStyle: 'dashed',
      borderWidth: '2px',
      borderColor: '#c7cdd4',
      marginBottom: '3vh',
      boxShadow: 'none'
    },
    suggestionText: {
      height: '50%',
    },
    cancelButton: {
      height: '7vh',
      backgroundColor: "#FFFFFF",
      padding: '12px 24px',
      margin: theme.spacing(1),
      borderRadius: '5em',
      fontSize: '16px',
      color: '#486EAB',
      textTransform: 'none',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: '#486EAB',
    },
    saveButton: {
      height: '7vh',
      backgroundColor: "#486EAB",
      padding: '12px 24px',
      margin: theme.spacing(1),
      borderRadius: '5em',
      fontSize: '16px',
      color: '#FFFFFF',
      textTransform: 'none',
      borderStyle: 'solid',
      borderWidth: '1px',
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
        <Button
          size="medium"
          className={classes.suggestionbutton}
          onClick={handleOpen}
        >
          <img src={suggestionIcon} alt="suggestion icon"/>
          &nbsp;Suggestions
        </Button>
        <Dialog PaperProps={{
          classes: {
            root: classes.suggestion
          }
        }} BackdropProps={{
          classes: {
            root: classes.suggestionBackDrop
          }
        }} open={modalOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Submit Suggestion</DialogTitle>
          <DialogContent>
          <Button variant="contained"
          component="label" className={classes.uploadField}>
            Upload Screenshot
          <input type="file" onChange={handleChange} hidden/>
          </Button>
          <TextField className={classes.suggestionText} label="Write Suggestion here.."
          rows="5" type="search" variant="outlined" fullWidth multiline/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className={classes.cancelButton}>
              Cancel
            </Button>
            <Button onClick={handleClose} className={classes.saveButton}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Toolbar>
    </AppBar>
  )
}

export default Topbar;
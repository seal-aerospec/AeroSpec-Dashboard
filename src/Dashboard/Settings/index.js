import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

export default function Settings() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid xs={12} container direction="column">
        <Grid item>
          <h1>Settings</h1>
        </Grid>
      </Grid>
    </div>
  );
}
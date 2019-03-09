import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  availability: {
    height: "38vh",
    width: "100%"
  },
  paper: {
    height: 20,
    width: 20
  },
  available: {
    height: 20,
    width: 20,
    backgroundColor: "green"
  },
  notAvailable: {
    height: 20,
    width: 20,
    backgroundColor: "red"
  }
});

class Availability extends Component {
  render() {
    const { classes, availability } = this.props;
    const days = Object.keys(availability);
    return (
      <>
        <Grid
          container
          className={classes.availability}
          justify="center"
          spacing={8}
        >
          {days.map(day => (
            <Grid key={day} item>
              <Paper
                className={
                  availability[day] ? classes.available : classes.notAvailable
                }
              >
                {day}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Availability);

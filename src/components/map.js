import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  map: {
    height: "100vh",
    // padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Map extends Component {
  render() {
    const { classes } = this.props;
    return <Paper className={classes.map}>Mapa</Paper>;
  }
}

export default withStyles(styles)(Map);

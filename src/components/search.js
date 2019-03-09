import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  search: {
    height: "60vh",
    width: "100%"
  }
});

class Search extends Component {
  render() {
    const { classes } = this.props;
    return <Paper className={classes.search}>Busqueda</Paper>;
  }
}

export default withStyles(styles)(Search);

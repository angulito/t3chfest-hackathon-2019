import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  resource: {
    height: "40vh",
    width: "100%"
  }
});

class ResourceInfo extends Component {
  render() {
    const { classes, info } = this.props;
    return <Paper className={classes.resource}>{info.name}</Paper>;
  }
}

export default withStyles(styles)(ResourceInfo);

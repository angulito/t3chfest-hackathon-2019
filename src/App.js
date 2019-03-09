import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

import "./App.css";
import api from "./api";
import ResourceInfo from "./components/resource-info";
import Search from "./components/search";
import Map from "./components/map";

const styles = theme => ({
  app: { textAlign: "center", minHeight: "100vh", flexGrow: 1, display: "flex" }
});

class App extends Component {
  state = { name: "" };
  componentDidMount() {
    api.call("https://swapi.co/api/people/1").then(r => {
      this.setState(r);
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={12} style={{ minWidth: "100%" }}>
                <Search />
              </Grid>
              <Grid item xs={12} style={{ minWidth: "100%" }}>
                <ResourceInfo info={{ name: "nombre" }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <Map />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);

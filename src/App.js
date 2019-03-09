import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import "./App.css";
import api from "./api";
import ResourceInfo from "./components/resource-info";
import Search from "./components/search";
import MapContainer from "./components/map-container";

const styles = theme => ({
  app: { textAlign: "center", minHeight: "100vh", flexGrow: 1, display: "flex" }
});

class App extends Component {
  state = { data: [] };
  componentDidMount() {
    api.call("https://swapi.co/api/people/1").then(r => {
      this.setState({
        data: [
          {
            latitude: 39.42703038057047,
            longitude: -2.418160750578398,
            type: "arado",
            id: 1,
            price: 51.96548949779538,
            availability: {
              L: true,
              M: true,
              X: true,
              J: false,
              V: true,
              S: false,
              D: true
            }
          }
        ]
      });
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
          spacing={8}
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
                <ResourceInfo info={this.state.data[0]} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <MapContainer locations={this.state.data} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);

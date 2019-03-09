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
  state = { data: [], currentOption: null };
  componentDidMount() {
    api.call("/api/rent-items").then(r => {
      this.setState({
        data: r
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
          <Grid item xs={12} sm={3}>
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
                <ResourceInfo info={this.state.currentOption} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={9}>
            <MapContainer
              locations={this.state.data}
              onSelect={loc => this.setState({ currentOption: loc })}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);

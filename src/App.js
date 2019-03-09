import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

import "./App.css";
import api from "./api";
import ResourceInfo from "./components/resource-info";
import MapContainer from "./components/map-container";

const styles = theme => ({
  app: {
    textAlign: "center",
    flexGrow: 1,
    display: "flex"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  iconPersonContainer: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end"
  }
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
      <>
        <AppBar position="static">
          <Toolbar>
            <MenuIcon />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Grow and Harvest
            </Typography>
            <div className={classes.iconPersonContainer}>
              <IconButton
                aria-owns={"menu-appbar"}
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.app}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={8}
          >
            {this.state.currentOption ? (
              <Grid item xs={12} sm={3}>
                <Grid
                  container
                  direction="column"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <Grid
                    item
                    xs={12}
                    style={{ marginTop: "15px", minWidth: "100%" }}
                  >
                    <ResourceInfo
                      info={this.state.currentOption}
                      onClose={() => this.setState({ currentOption: null })}
                    />
                  </Grid>
                </Grid>
              </Grid>
            ) : null}
            <Grid item xs={12} sm={this.state.currentOption ? 9 : 12}>
              <MapContainer
                locations={this.state.data}
                onSelect={loc => this.setState({ currentOption: loc })}
              />
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(App);

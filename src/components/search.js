import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  search: {
    height: "30vh",
    width: "100%",
    marginTop: "2px",
    flexWrap: "wrap"
  },
  input: {
    width: "90%",
    margin: theme.spacing.unit
  },
  textField: {
    marginLeft: 4,
    marginRight: 4
  }
});

class Search extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.search}>
        Search
        <Input
          className={classes.input}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <TextField
          id="date"
          label="From"
          type="date"
          defaultValue="2018-03-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="date"
          label="To"
          type="date"
          defaultValue="2018-04-06"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(Search);

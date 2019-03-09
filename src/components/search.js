import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Input from '@material-ui/core/Input';
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';


const styles = theme => ({
  search: {
    height: "60vh",
    width: "100%",
    marginTop: "10%",
    flexWrap: 'wrap'
  },
  input: {
    width: "90%",
    margin: theme.spacing.unit,
  },
});

class Search extends Component {
  render() {
    const { classes } = this.props;
    return  <div className={classes.search}>
       <Paper>Búsqueda

       <Input
          className={classes.input}
          startAdornment={
            <InputAdornment 
            position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
       </Paper>
    </div>
  }
}

export default withStyles(styles)(Search);

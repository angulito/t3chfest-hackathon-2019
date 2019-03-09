import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import Availability from "./availability";

const styles = theme => ({
  resource: {
    height: "68vh",
    width: "100%"
  },
  media: {
    height: 180
  },
  title: {
    textTransform: "capitalize"
  },
  price: {
    fontSize: 17,
    fontWeight: 500
  },
  button: {
    width: 36,
    height: 36,
    position: "relative",
    top: "5px",
    marginRight: "5px",
    float: "right"
  }
});

class ResourceInfo extends Component {
  componentDidMount() {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#insertion-point-jss")
    );
  }
  render() {
    const { classes, info, onClose } = this.props;
    return info ? (
      <Card className={classes.resource}>
        <Fab
          size="small"
          color="secondary"
          aria-label="Add"
          className={classes.button}
          onClick={onClose}
        >
          <Icon className="fa fa-times" />
        </Fab>
        <CardMedia
          className={classes.media}
          image={require("../assets/images/" + info.type + ".jpg")}
          title={info.type}
        />
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {info.type}
          </Typography>
          <Typography component="p">{info.description}</Typography>
          <hr />
          <br />
          <Typography component="p" className={classes.price}>
            Price: {info.price.toFixed(2)} €
          </Typography>
          <br />
          <Availability availability={info.availability} />
        </CardContent>
      </Card>
    ) : (
      <div />
    );
  }
}

export default withStyles(styles)(ResourceInfo);

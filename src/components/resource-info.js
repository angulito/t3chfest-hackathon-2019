import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
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
  }
});

class ResourceInfo extends Component {
  render() {
    const { classes, info } = this.props;
    return info ? (
      <Card className={classes.resource}>
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

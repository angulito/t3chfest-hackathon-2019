import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Availability from "./availability";

const styles = theme => ({
  resource: {
    height: "40vh",
    width: "100%"
  },
  media: {
    height: 100
  }
});

class ResourceInfo extends Component {
  render() {
    const { classes, info } = this.props;
    return info ? (
      <Card className={classes.resource}>
        <CardMedia
          className={classes.media}
          image="https://s3-eu-west-1.amazonaws.com/topmaquinaria-static/aimages/7f8/1d8/57a/8b2/55f/ac4/9934/standard/fe237e1c-a60e-4a92-afc7-dcf3333d106a.jpg?1514597246"
          title="Tractor"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {info.type}
          </Typography>
          <Typography component="p">
            Price: {info.price.toFixed(2)} €
          </Typography>
          <Availability availability={info.availability} />
        </CardContent>
      </Card>
    ) : (
      <div />
    );
  }
}

export default withStyles(styles)(ResourceInfo);

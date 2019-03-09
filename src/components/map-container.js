import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { withStyles } from "@material-ui/core/styles";

import {
  aradoIcon,
  tractorIcon,
  pivotIcon,
  remolqueIcon
} from "../custom-icons";

const styles = {
  mapContainer: {
    height: "100%",
    margin: "4px"
  }
};

const icons = {
  arado: aradoIcon,
  tractor: tractorIcon,
  pivot: pivotIcon,
  remolque: remolqueIcon
};
class MapContainer extends Component {
  render() {
    const { locations, onSelect, classes } = this.props;
    return locations.length ? (
      <div className={classes.mapContainer}>
        <Map
          center={[locations[0].latitude, locations[0].longitude]}
          zoom={15}
          mouseDrag={"none"}
          mouseWheel={"none"}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {locations.map(loc => (
            <Marker
              position={[loc.latitude, loc.longitude]}
              icon={icons[loc.type]}
              key={loc.id}
              onClick={() => onSelect(loc)}
            >
              {/* <Popup>
                <span>{loc.type}</span>
              </Popup> */}
            </Marker>
          ))}
        </Map>
      </div>
    ) : (
      <div>loading ...</div>
    );
  }
}

export default withStyles(styles)(MapContainer);

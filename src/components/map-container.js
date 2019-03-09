import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import {
  aradoIcon,
  tractorIcon,
  pivotIcon,
  remolqueIcon
} from "../custom-icons";

const icons = {
  arado: aradoIcon,
  tractor: tractorIcon,
  pivot: pivotIcon,
  remolque: remolqueIcon
};
class MapContainer extends Component {
  render() {
    const { locations, onSelect } = this.props;
    return locations.length ? (
      <div style={{ height: "100vh" }}>
        <Map center={[locations[0].latitude, locations[0].longitude]} zoom={12}>
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

export default MapContainer;

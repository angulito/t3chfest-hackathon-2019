import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

class MapContainer extends Component {
  render() {
    const locations = this.props.locations;
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
              className="map__reactleaflet"
              key={loc.id}
            >
              <Popup>
                <span>{loc.type}</span>
              </Popup>
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

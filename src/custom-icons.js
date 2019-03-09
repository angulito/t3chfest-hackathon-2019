import L from "leaflet";

export const aradoIcon = new L.Icon({
  iconUrl: require("./assets/arado.png"),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [30, 15],
  shadowUrl: "./assets/marker-shadow.png",
  shadowSize: [68, 95],
  shadowAnchor: [20, 92]
});

export const tractorIcon = new L.Icon({
  iconUrl: require("./assets/tractor.png"),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 25],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92]
});

export const pivotIcon = new L.Icon({
  iconUrl: require("./assets/pivot.png"),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 25],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92]
});

export const remolqueIcon = new L.Icon({
  iconUrl: require("./assets/remolque.png"),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 25],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92]
});

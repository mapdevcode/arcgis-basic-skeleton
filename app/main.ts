/// <reference path="../node_modules/dojo-typings/index.d.ts" />
/// <reference path="../node_modules/@types/arcgis-js-api/index.d.ts" />

import EsriMap = require("esri/Map")
import MapView = require("esri/views/MapView")

import { MapController } from "../app/MapController"
import { hello } from "../app/HelloWorld"

let map = new MapController('map','topo')

map.view.when((view) => {
  view.goTo([-1.2,52.1])
})

// let map = new EsriMap({
//   basemap: "streets"
// })

// let view = new MapView({
//   map: map,
//   container: "map",
//   center: [-80.6161, 28.6091],
//   zoom: 14
// })

console.log(hello())

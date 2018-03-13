/// <reference path="../node_modules/dojo-typings/index.d.ts" />
/// <reference path="../node_modules/@types/arcgis-js-api/index.d.ts" />

import Map = require("esri/Map")
import View = require("esri/views/View")
import MapView = require("esri/views/MapView")

export class MapController{

    public map: Map

    public view: MapView

    constructor(div: string, basemap: string = "streets"){

        this.map = new Map({
            basemap: basemap
        })
        
        this.view = new MapView({
            map: this.map,
            container: div,
            center: [-80.6161, 28.6091],
            zoom: 14
        })
    }

    centerAt(lat: number, lon: number) {
        this.view.goTo(lon,lat)
    }
}

export default MapController
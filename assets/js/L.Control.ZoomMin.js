var maxZoom = 7;
var minZoom = 3;
var defaultZoom = 5;

L.Control.ZoomMin = L.Control.Zoom.extend({
  options: {
    position: "topleft",
    zoomInText: "+",
    zoomInTitle: "Zoom in",
    zoomOutText: "-",
    zoomOutTitle: "Zoom out",
    zoomMinText: "Reset Map View",
    zoomMinTitle: "Reset Map View"
  },

  onAdd: function (map) {
    var zoomName = "leaflet-control-zoom"
      , container = L.DomUtil.create("div", zoomName + " leaflet-bar leaflet-control")
      , options = this.options

    this._map = map

    this._zoomInButton = this._createButton(options.zoomInText, options.zoomInTitle,
     zoomName + '-in leaflet-bar-part leaflet-bar-part-top', container, this._zoomIn, this)

    this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,
     zoomName + '-out leaflet-bar-part', container, this._zoomOut, this)

    this._zoomMinButton = this._createButton(options.zoomMinText, options.zoomMinTitle,
     zoomName + '-min leaflet-bar-part leaflet-bar-part-bottom', container, this._zoomMin, this)

    this._updateDisabled()
    map.on('zoomend zoomlevelschange', this._updateDisabled, this)

    return container
  },

  _zoomMin: function () {
//    this._map.setZoom(this._map.getMinZoom());
    this._map.setView([7, 115.64], 5); // Reset Map View to default
    geojson.resetStyle(lastClickedLayer);
    lastClickedLayer = null; // Clear last clicked layer
    initPieChart(); // Reset pie charts in bottom panel
  },

  _updateDisabled: function () {
    var map = this._map
      , className = "leaflet-disabled"

    L.DomUtil.removeClass(this._zoomInButton, className)
    L.DomUtil.removeClass(this._zoomOutButton, className)
    L.DomUtil.removeClass(this._zoomMinButton, className)

    if (map._zoom === minZoom) {
      L.DomUtil.addClass(this._zoomOutButton, className)
    }

    if (map._zoom === maxZoom) {
      L.DomUtil.addClass(this._zoomInButton, className)
    }

//    if (map._zoom === defaultZoom) {
//      L.DomUtil.addClass(this._zoomMinButton, className)
//    }
  }
})
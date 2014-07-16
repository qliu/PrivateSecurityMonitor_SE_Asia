// Global variable declaration
var lastClickedLayer;  // record last clicked layer
var geojson;           // load geojson data

// Add base map
var map = L.map('map',{worldCopyJump:true,zoomControl:false});
map.setView([7, 115.64], 5);
map.worldCopyJump = true;
var basemap = L.tileLayer(
  'http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
  attribution: '<a href="http://content.stamen.com/dotspotting_toner_cartography_available_for_download">Stamen Toner</a>, <a href="http://www.openstreetmap.org/">OpenStreetMap</a>, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 7,
  minZoom: 3
});
basemap.addTo(map);

// Add custom zoom control
map.addControl(new L.Control.ZoomMin());

// Load Southeast Asia countries
L.geoJson(seasia_countries).addTo(map);

// Leaflet Conrols
// Information Window
var info = L.control();
info.onAdd = function (map){
  this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
  this.update();
  return this._div;
};
// Update the information window based on hovered/clicked feature properties
info.update = function (props) {
  this._div.innerHTML = '<h4>Number of Contractors</h4>'
                      + (props ? '<b>' + props.country + '</b><br />' + props.sum_contractors: 'Hover over a country');
};

// Map Styles
// 4-color palette for choropleth map
function getColor(d) {
  return d > 10000 ? '#800026' :
         d > 1000  ? '#E31A1C' :
         d > 100   ? '#FD8D3C' :
         d > 0   ? '#FED976' :
         null;
}
// Old 7  color palette
//function getColor(d) {
//  return d > 100 ? '#800026' :
//         d > 50  ? '#BD0026' :
//         d > 40  ? '#E31A1C' :
//         d > 30  ? '#FC4E2A' :
//         d > 20   ? '#FD8D3C' :
//         d > 10   ? '#FEB24C' :
//         d > 0   ? '#FED976' :
//         null;
//}

// Set map style
function style(feature) {
  return {
    fillColor: getColor(feature.properties.sum_contractors),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '0',
    fillOpacity: 0.7
  };
}

// Update information window
function updateInfo(e){
  var layer = e.target;
  info.update(layer.feature.properties);
}

// Function on map feature click
function highlightFeature(e) {
  // Reset style of last clicked map feature
  if (lastClickedLayer) { geojson.resetStyle(lastClickedLayer); }
  // Highlight clicked map feature
  var layer = e.target;
  layer.setStyle({
    weight: 1,
    color: '#999',
    dashArray: '',
    fillOpacity: 0.7
  });
  // Trick for IE to bring clicked feature to front
  if (!L.Browser.ie && !L.Browser.opera) { layer.bringToFront(); }
  lastClickedLayer = layer;
  // Center to clicekd feature at default zoom level (5)
  map.setView(e.target.getBounds().getCenter(),5);
  // map.fitBounds(e.target.getBounds());
  // Open bottom panel to show statistics of clicked feature
  openBottomPanel();
  info.update(layer.feature.properties);
}

// Add event handler to each map feature
function onEachFeature(feature, layer) {
  layer.on({
    mouseover: updateInfo,
//    mouseout: resetHighlight,
    click: highlightFeature
  });
}

geojson = L.geoJson(seasia_countries, {
	style: style,
	onEachFeature: onEachFeature
}).addTo(map);

// Legend control
var legend = L.control({position: 'topright'});
legend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'legend'),
  grades = [1,100,1000,10000],
  labels = [];
  div.innerHTML += "<h4>Number of Contractors</h4>";
  // loop through value intervals and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
      '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
      grades[i] + '&nbsp' + (grades[i + 1] ? '&ndash;' + '&nbsp'  + grades[i + 1] + '<br>' : '+');
    }
  return div;
};


// Help button to start feature tour
var helpBtn = L.control({position: 'topright'});
helpBtn.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'help-btn');
  return this._div;
};
helpBtn.addTo(map);
$(".help-btn").attr("id","feature-helpbtn");
$(".help-btn").attr("title","Show Tutorial").hover(
  function() {
    $(this).css("cursor","pointer").css("background-color","#E4E4E4");
  },
  function() {
    $(this).css("cursor","auto");
    if($(".info").length) {$(this).css("background-color","#C1C1C1");}
    else {$(this).css("background-color","#FFF");}
    }
);
$(".help-btn").click(function(){
  hopscotch.endTour(); // end current running tour if exists
  hopscotch.startTour(featureTour,1)
});

// Legend button to show/hide legend
var legendBtn = L.control({position: 'topright'});
legendBtn.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'legend-btn');
  return this._div;
};
legendBtn.addTo(map);
$(".legend-btn").attr("title","Show Legend").hover(
  function() {
    $(this).css("cursor","pointer").css("background-color","#E4E4E4");
  },
  function() {
    $(this).css("cursor","auto");
    if($(".legend").length) {$(this).css("background-color","#C1C1C1");}
    else {$(this).css("background-color","#FFF");}
  }
);
$(".legend-btn").click(function(){
  if ($(".legend").length) {
    $(this).attr("title","Show Legend").css("background-color","#C1C1C1");
    map.removeControl(legend);
  }
  else {
    $(this).attr("title","Hide Legend")
    map.addControl(legend);
  }
});

// Information button to show/hide information window
var infoBtn = L.control({position: 'topright'});
infoBtn.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info-btn');
  return this._div;
};
infoBtn.addTo(map);
$(".info-btn").attr("title","Show Information Window").hover(
  function() {
    $(this).css("cursor","pointer").css("background-color","#E4E4E4");
  },
  function() {
    $(this).css("cursor","auto");
    if($(".info").length) {$(this).css("background-color","#C1C1C1");}
    else {$(this).css("background-color","#FFF");}
  }
);
$(".info-btn").click(function(){
  if ($(".info").length) {
    $(this).attr("title","Show Information Window").css("background-color","#C1C1C1");
    map.removeControl(info);
  }
  else {
    $(this).attr("title","Hide Information Window")
    map.addControl(info);
  }
});

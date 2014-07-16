// Toggle bottom panel on button click
$('#toggle-bottom-panel-button').click(function(){
  $('#toggle-bottom-panel-button').toggleClass("collapse","slow");
  $('#bottom-panel-content-container').slideToggle("slow");
  // Initial Pie Chart
  initPieChart();
});

// Open bottom panel on map feature click
function openBottomPanel(){
  $('#toggle-bottom-panel-button').addClass("collapse","slow");
  $('#bottom-panel-content-container').slideDown("slow");
  // Initial Pie Chart
  initPieChart();
}

var featureTour = {
    id: "tour-on-load",
    showPrevButton : "true",
    steps:[
        {
            title: "Zoom-in",
            content: "Click this button to zoom-in the map.",
            target: "feature-zoomin",
            placement: "right",
            yOffset: "center",
            arrowOffset: "center"
        },
        {
            title: "Zoom-out",
            content: "Click this button to zoom-out the map.",
            target: "feature-zoomout",
            placement: "right",
            yOffset: "center",
            arrowOffset: "center",        
        },
        {
            title: "Reset Map View",
            content: "Click this button to reset the map view to the default one.",
            target: "feature-zoommin",
            placement: "right",
            yOffset: "center",
            arrowOffset: "center",
        }, 
        {
            title: "Show Map Legend",
            content: "Click this button to show the map legend.",
            target: "feature-legendbtn",
            placement: "left",
            yOffset: "center",
            arrowOffset: "center",
        },
        {
            title: "Show Map Information",
            content: "Click this button to open the information window, where mapped value of the country shape will show upon mouse hovering.",
            target: "feature-infobtn",
            placement: "left",
            yOffset: "center",
            arrowOffset: "center",          
        },
        {
            title: "Country Statistics",
            content: "Click this button to show a panel of country statistics. You can also click on a country to see the statistics.",
            target: "toggle-bottom-panel-button",
            placement: "top",
            xOffset: "center",
            arrowOffset: "center",   
        },
        {
            title: "Map",
            content: "Hover over a country to see the mapped value in the information window. Click a country to show the country statistics.",
            target: "feature-mapshp",
            placement: "top",
            xOffset: "center",
            arrowOffset: "center",      
        },
        {
            title: "Help",
            content: "Click help button to show this feature tour again.",
            target: "feature-helpbtn",
            placement: "left",
            YOffset: "center",
            arrowOffset: "10",        
        }
    ]
};

init = function() {
  var startBtnId = 'feature-helpbtn',
      calloutId = 'startTourCallout',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

  if (state && state.indexOf('tour-on-load:') === 0) {
    // Already started the tour at some point!
    hopscotch.startTour(featureTour);
  }
  else {
    // Looking at the page for the first(?) time.
    setTimeout(function() {
      mgr.createCallout({
        id: calloutId,
        target: "feature-helpbtn",
        placement: "left",
        title: "Welcome to Private Security Monitor website",
        content: "Click the help button to start by taking a short tour of website features. Close the pop-up to quit the feature tour at any step.",
        yOffset: "center",
        arrowOffset: "center",        
        bubbleWidth: "400",
        bubblePadding: "30"
      });
    }, 1);
  }
};

init();
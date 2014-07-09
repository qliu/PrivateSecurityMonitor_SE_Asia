endTour = function() {
    hopscotch.endTour()
}

var featureTour = {
    id: "tour-on-load",
    showPrevButton : "true",
    steps:[
        {
            target: "banner",
            placement: "bottom",
            title: "First time here?",
            content: "<br/> \
                      You can start by taking a short tutorial \
                      of webiste features.<br/><br/> \
                      Close the pop-up window to end tutorial at any step.<br/><br/> \
                      If you skip the tutorial, \
                      you can always come back <br/> by clicking the help button \
                      <img src='assets/images/icon_help.png' \
                      style='height:20px;width:20px;'/> at the top-right corner.<br/><br/>",
            xOffset: "center",
            arrowOffset: "center",        
            width: "400",
            padding: "20",
            showCTAButton: "true",
            ctaLabel: "Skip Tutorial",
            onCTA: endTour,
        },
        {
            title: "Zoom In",
            content: "Click this button to zoom in.",
            target: "feature-zoomin",
            placement: "right",
            yOffset: "center",
            arrowOffset: "center"
        },
        {
            title: "Zoom Out",
            content: "Click this button to zoom out.",
            target: "feature-zoomout",
            placement: "right",
            yOffset: "center",
            arrowOffset: "center",        
        },
        {
            title: "Reset Map View",
            content: "Click this button to reset the map view.",
            target: "feature-zoommin",
            placement: "right",
            yOffset: "center",
            arrowOffset: "center",
        }, 
        {
            title: "Show Map Legend",
            content: "Click this button to show the map legend.<br/> \
                      Click again to hide the map legend.",
            target: "feature-legendbtn",
            placement: "left",
            yOffset: "center",
            arrowOffset: "center",
        },
        {
            title: "Show Map Information",
            content: "Click this button to open the information window.<br/> \
                      Hover over a country on the map to see the mapped value.<br/> \
                      Click again to hide the information window.",
            target: "feature-infobtn",
            placement: "left",
            yOffset: "center",
            arrowOffset: "center", 
            width: "350",         
        },
        {
            title: "Country Statistics",
            content: "Click this button to show a panel of country statistics.<br/> \
                      You can also click on a country in the map to show the panel.<br/> \
                      Click again to hide the panel.",
            target: "toggle-bottom-panel-button",
            placement: "top",
            xOffset: "center",
            arrowOffset: "center",
            width: "375",
        },
        {
            title: "Interactive Map",
            content: "Hover over a country to see the mapped value in the information window.<br/><br/> \
                      * Click <img src='assets/images/icon_info.png' style='height:20px;width:20px;'/> \
                      to open information window if it's hidden.<br/><br/>\
                      Click on a country to show the country's statistics.<br/><br/>",
            target: "feature-mapshp",
            placement: "top",
            xOffset: "center",
            arrowOffset: "center",
            width: "450",      
        },
        {
            title: "Website Tutorial",
            content: "Click help button to see this tutorial again.",
            target: "feature-helpbtn",
            placement: "left",
            YOffset: "center",
            arrowOffset: "10",        
        }
    ]
};

hopscotch.startTour(featureTour);

//endTour = function() {
//    hopscotch.startTour(featureTour);
////    hopscotch.endTour()
//}
//
//init = function() {
//  var startBtnId = 'feature-helpbtn',
//      calloutId = 'startTourCallout',
//      mgr = hopscotch.getCalloutManager(),
//      state = hopscotch.getState();
//
//  if (state && state.indexOf('tour-on-load:') === 0) {
//    // Already started the tour at some point!
//    hopscotch.startTour(featureTour);
//  }
//  else {
//    // Looking at the page for the first(?) time.
//    setTimeout(function() {
//      mgr.createCallout({
//        id: calloutId,
//        target: "feature-helpbtn",
//        placement: "left",
//        title: "Welcome to Private Security Monitor website",
//        content: "Click help button <img src='assets/images/icon_help.png' style='height:20px;width:20px;'/> to take a short tutorial of website features.<br/>Close the pop-up window to quit the tutorial at any step.",
//        yOffset: "center",
//        arrowOffset: "center",        
//        bubbleWidth: "400",
//        bubblePadding: "20",
//        showCTAButton: "true",
//        ctaLabel:"Start Tutorial",
//        onCTA: endTour,
//      });
//    }, 1000);
//  }
//};
//
//init();
var featureTour = {
    id: "tour-on-load",
    steps:[
        {
            title: "Zoom-in",
            content: "Click this button to zoom-in the map.",
            target: "feature-zoomin",
            placement: "right"
        },
        {
            title: "Zoom-out",
            content: "Click this button to zoom-out the map.",
            target: "feature-zoomout",
            placement: "right"
        },
        {
            title: "Reset Map View",
            content: "Click this button to reset the map view to the default one.",
            target: "feature-zoommin",
            placement: "right"
        }, 
        {
            title: "Show Map Legend",
            content: "Click this button to show the map legend.",
            target: "feature-legendbtn",
            placement: "left"
        },
        {
            title: "Show Map Information",
            content: "Click this button to open the information window, where mapped value of the country shape will show upon mouse hovering.",
            target: "feature-infobtn",
            placement: "left"
        },
        {
            title: "Country Statistics",
            content: "Click this button to show a panel of country statistics.",
            target: "toggle-bottom-panel-button",
            placement: "top"        
        }        
    ]
};

hopscotch.startTour(featureTour);
// Global variable declaration
var pie1 // pie chart 1 - type of client
var pie2 // pie chart 2 - type of service

// Bottom panel visualizations
// D3 charts
// d3pie 0.1.3 http://d3pie.org/
function initPieChart(){
  var pie1Data,
      chart1Data,
      pie2Data,
      chart2Data,
      featureProperties;
  if (lastClickedLayer) {
    featureProperties = lastClickedLayer.feature.properties;
  }
  else {
    featureProperties = seasia_countries["features"][0]["properties"]
  }
  // Bottom Panel Text
  var textContent = "<h3>" + featureProperties.country + "</h3>"
                  + "<p><img src='assets/images/icon_military.png' title='Number of Contractors'><b>" 
                  + featureProperties.sum_contractors + "</b></p>"
                  + "<p><img src='assets/images/icon_death.png' title='Total Deaths'> <b>"
                  + featureProperties.deaths + "</b> "
                  + " <img src='assets/images/icon_injury.png' title='Total Injuries'> <b>"
                  + featureProperties.injuries + "</b></p>"
  $('#bottomChartTextContainer').html(textContent);
  // Pie Chart 1 - Type of Clients
  var tocPrivate, tocGovernment, tocOther, tocNoData, tocSum=0;
  tocPrivate = featureProperties["toc_private"] ? featureProperties["toc_private"] : 0;
  tocGovernment = featureProperties["toc_government"] ? featureProperties["toc_government"] : 0;
  tocOther = featureProperties["toc_other"] ? featureProperties["toc_other"] : 0;
  tocNoData = featureProperties["toc_nodata"] ? featureProperties["toc_nodata"] : 0;
  tocSum = tocPrivate+tocGovernment+tocOther+tocNoData;
  chart1Data = {
                "Private": tocPrivate,
                "Government": tocGovernment,
                "Other": tocOther,
                "NoData": tocNoData
  };
  pie1Data = [
    {
      "label": "Private",
      "value": chart1Data["Private"],
      "color": "#994040"
    },
    {
      "label": "Government",
      "value": chart1Data["Government"],
      "color": "#9b8050"
    },
    {
      "label": "Other",
      "value": chart1Data["Other"],
      "color": "#6d9b45"
    },
    {
      "label": "No Data",
      "value": chart1Data["NoData"],
      "color": "#7f7f77"
    }
  ];
  if (pie1) {pie1.destroy();pie1=null;}
  pie1 = new d3pie("pieChart1", {
    "header": {
      "title": {
        "text": "",
        "fontSize": 16,
        "font": "verdana"
      },
      "subtitle": {
        "color": "#999999",
        "fontSize": 10,
        "font": "verdana"
      },
      "titleSubtitlePadding": 20
    },
    "footer": {
      "color": "#999999",
      "fontSize": 11,
      "font": "open sans",
      "location": "bottom-center"
    },
    "size": {
      "canvasHeight": 180,
      "canvasWidth": 280,
      "pieInnerRadius": "26%",
      "pieOuterRadius": "90%"
    },
    "data": { "content": pie1Data },
    "labels": {
      "outer": { "pieDistance": 10 },
      "inner": { "hideWhenLessThanPercentage": 10 },
      "mainLabel": { "font": "verdana" },
      "percentage": {
        "color": "#e1e1e1",
        "font": "verdana",
        "decimalPlaces": 0
      },
      "value": {
        "color": "#e1e1e1",
        "font": "verdana"
      }
    },
    "effects": {
      "pullOutSegmentOnClick": {
        "effect": "linear",
        "speed": 400,
        "size": 8
      }
    },
    "misc": {
      "gradient": {
        "enabled": true,
        "percentage": 90,
        "color": "#827d7d"
      },
      "canvasPadding": {
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0
      }
    },
    "callbacks":{
      onMouseoverSegment: function(info){
        var left = $("#"+info.segment.id).offset().left+$("#"+info.segment.id).width()/2;
        var top = $("#"+info.segment.id).offset().top+$("#"+info.segment.id).height()/2;
        var labelText = Math.round(info.data.value/tocSum*100);
        d3.select("#tooltip")
            .style("left",left+"px")
            .style("top",top+"px")
            .style("opacity",1)
            .select("#tooltip-value")
              .text(labelText);
        },
        onMouseoutSegment: function(){ d3.select("#tooltip").style("opacity",0); }
    }
  });

  // Pie Chart 2 - Type of Services
  var tosAO, tosUO, tosUMAT, tosLOG, tosAS, tosUS, tosPAT,
      tosCP, tosITG, tosOther, tosNoData, tosSum=0;
  tosAO = featureProperties["tos_ao"] ? featureProperties["tos_ao"] : 0;
  tosUO = featureProperties["tos_uo"] ? featureProperties["tos_uo"] : 0;
  tosUMAT = featureProperties["tos_umat"] ? featureProperties["tos_umat"] : 0;
  tosLOG = featureProperties["tos_log"] ? featureProperties["tos_log"] : 0;
  tosAS = featureProperties["tos_as"] ? featureProperties["tos_as"] : 0;
  tosUS = featureProperties["tos_us"] ? featureProperties["tos_us"] : 0;
  tosPAT = featureProperties["tos_pat"] ? featureProperties["tos_pat"] : 0;
  tosCP = featureProperties["tos_cp"] ? featureProperties["tos_cp"] : 0;
  tosITG = featureProperties["tos_itg"] ? featureProperties["tos_itg"] : 0;
  tosOther = featureProperties["tos_other"] ? featureProperties["tos_other"] : 0;
  tosNoData = featureProperties["tos_nodata"] ? featureProperties["tos_nodata"] : 0;
  tosSum = tosAO + tosUO + tosUMAT + tosLOG + tosAS + tosUS + tosPAT + tosCP
         + tosITG + tosOther + tosNoData;
  chart2Data = {
    "AO": featureProperties["tos_ao"],
    "UO": featureProperties["tos_uo"],
    "UMAT": featureProperties["tos_umat"],
    "LOG": featureProperties["tos_log"],
    "AS": featureProperties["tos_as"],
    "US": featureProperties["tos_us"],
    "PAT": featureProperties["tos_pat"],
    "CP": featureProperties["tos_cp"],
    "ITG": featureProperties["tos_itg"],
    "Other": featureProperties["tos_other"],
    "NoData": featureProperties["tos_nodata"],
  }
  pie2Data = [
    {
      "label": "AO",
      "value": chart2Data["AO"],
      "color": "#994040"
    },
    {
      "label": "UO",
      "value": chart2Data["UO"],
      "color": "#9b8050"
    },
    {
      "label": "UMAT",
      "value": chart2Data["UMAT"],
      "color": "#949645"
    },
    {
      "label": "LOG",
      "value": chart2Data["LOG"],
      "color": "#6b9944"
    },
    {
      "label": "AS",
      "value": chart2Data["AS"],
      "color": "#459654"
    },
    {
      "label": "US",
      "value": chart2Data["US"],
      "color": "#3c846f"
    },
    {
      "label": "PAT",
      "value": chart2Data["PAT"],
      "color": "#47849e"
    },
    {
      "label": "CP",
      "value": chart2Data["CP"],
      "color": "#597ab7"
    },
    {
      "label": "ITG",
      "value": chart2Data["ITG"],
      "color": "#5f4699"
    },
    {
      "label": "Other",
      "value": chart2Data["Other"],
      "color": "#96459b"
    },
    {
      "label": "No Data",
      "value": chart2Data["NoData"],
      "color": "#7f7f77"
    }
  ]
  if (pie2) { pie2.destroy(); pie2=null; }
  pie2 = new d3pie("pieChart2", {
    "header": {
      "title": {
        "text": "",
        "fontSize": 16,
        "font": "verdana"
      },
      "subtitle": {
        "color": "#999999",
        "fontSize": 10,
        "font": "verdana"
      },
      "titleSubtitlePadding": 20
    },
    "footer": {
      "color": "#999999",
      "fontSize": 11,
      "font": "open sans",
      "location": "bottom-center"
    },
    "size": {
      "canvasHeight": 180,
      "canvasWidth": 250,
      "pieInnerRadius": "26%",
      "pieOuterRadius": "90%"
    },
    "data": {
      "content": pie2Data
    },
    "labels": {
      "outer": { "pieDistance": 10 },
      "inner": { "hideWhenLessThanPercentage": 10 },            
      "mainLabel": { "font": "verdana" },
      "percentage": {
        "color": "#e1e1e1",
        "font": "verdana",
        "decimalPlaces": 0
      },
      "value": {
        "color": "#e1e1e1",
        "font": "verdana"
      }
    },
    "effects": {
      "pullOutSegmentOnClick": {
        "effect": "linear",
        "speed": 400,
        "size": 8
      }
    },
    "misc": {
      "gradient": {
        "enabled": true,
        "percentage": 90,
        "color": "#827d7d"
      },
      "canvasPadding": {
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0
      }
    },
    "callbacks":{
      onMouseoverSegment: function(info){
        var left = $("#"+info.segment.id).offset().left+$("#"+info.segment.id).width()/2;
        var top = $("#"+info.segment.id).offset().top+$("#"+info.segment.id).height()/2;
        var labelText = Math.round(info.data.value/tosSum*100);
        d3.select("#tooltip")
            .style("left",left+"px")
            .style("top",top+"px")
            .style("opacity",1)
            .select("#tooltip-value")
              .text(labelText);
      },
      onMouseoutSegment: function(){ d3.select("#tooltip").style("opacity",0); }
    }        
  });
}
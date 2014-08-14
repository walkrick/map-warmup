// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//

$(document).on('ready', function() {
  var map;
  AmCharts.ready(function() {
    map                  = new AmCharts.AmMap();
    map.pathToImages     = "http://www.amcharts.com/lib/3/images/";
    map.panEventsEnabled = true;
    map.backgroundColor  = "#535364";
    map.backgroundAlpha  = 1;
    map.zoomControl.panControlEnabled  = false;
    map.zoomControl.zoomControlEnabled = false;

    var dataProvider     = {
      mapVar: AmCharts.maps.usaHigh,
      getAreasFromMap: true,
      areas: []
    };

    map.dataProvider     = dataProvider;
    map.areasSettings    = {
      autoZoom: true,
      color: "#CDCDCD",
      colorSolid: "#5EB7DE",
      selectedColor: "#5EB7DE",
      outlineColor: "#666666",
      rollOverColor: "#88CAE7",
      rollOverOutlineColor: "#FFFFFF"
    };

    map.write("mapdiv");
  });
})

// All javascript for timeline features appear here
$( document ).ready(function( ) {

  // Just so we know jQuery is working in timeline.js
  console.log("asset: timeline.js is running with jquery");

  // object creation
  var htmlTimelineEntity = {
    index: undefined,
    animation_type: undefined, // fly or fade
    animation_direction: undefined, // top, bottom, left, right
    x_value: undefined, // x-value of position
    y_value: undefined, // y-value of position
    year: undefined, // we need this to work out when elements show/hide
    layer: undefined, // just to see what is on what - may be used
    set: {
      animation: function(animation_in, animation_out, animation_direction) {
        this.animation_type = animation_type;
        this.animation_direction = animation_direction;
      },
      coordinates: function(x_value, y_value) {
        this.x_value = x_value;
        this.y_value = y_value;
      },
      year: function(year) {
        this.year = year;
      },
      layer: function(layer) {
        this.layer = layer;
      }
    }
  };

  // empty array to store historic elements that animate
  var historicElements = [];

  // scan through each element and create a historic object
  $( "html-historic-element" ).each(function( ) {

    // create an object for each element to be used later
    // and add it to the array.

  });

  // let's see if we've saved this data properly
  console.log();


});

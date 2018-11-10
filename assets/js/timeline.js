// All javascript for timeline features appear here
$( document ).ready(function( ) {

  // Just so we know jQuery is working in timeline.js
  console.log("asset: timeline.js is running with jquery");

  // object constructor
  function htmlTimelineEntity(index, animation_type, animation_direction, x_value, y_value, layer, year) {
    this.index = index;
    this.animation_type = animation_type;
    this.animation_direction = animation_direction;
    this.x_value = x_value;
    this.y_value = y_value;
    this.layer = layer;
    this.year = year;
  };

  // empty array to store historic elements that animate
  var historicElements = [];

  // scan through each element and create a historic object
  // docs for $().each() at https://api.jquery.com/each/
  $( ".html-historic-element" ).each(function( index ) {

    console.log("RUNNUNG LOOp");

    // access the html element
    var historic_el = $( ".html-historic-element" ).index( index );

    console.log(historic_el);

    // populate this with the information.

    // sets the animation porperties to be used later
    var animation_type = $( this ).attr( "animation-type" );
    var animation_direction = $( this ).attr( "animation-direction" );

    // sets the coordinates - not needed at the moment
    var x_value = $( this ).attr( "x-value" );
    var y_value = $( this ).attr( "y-value" );

    // sets the layer - not needed at the moment
    var layer = $( this ).attr( "layer" );

    // sets the year
    var year = $( this ).attr( "year" );

    // create an object for each element to be used later.
    historicElementItem = new htmlTimelineEntity(index, animation_type, animation_direction, x_value, y_value, layer, year);

    // add this object to the array.
    historicElements.push( historicElementItem );

    // DEBUG: checking if object is made
    console.log( historicElementItem );

  });

  // let's see if we've saved this data properly
  console.log( historicElements );


});

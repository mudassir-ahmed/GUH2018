

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

    //console.log("RUNNUNG LOOp");

    // access the html element
    var historic_el = $( ".html-historic-element" ).index( index );

    //console.log(historic_el);

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
    // console.log( historicElementItem );

  });

  // let's see if we've saved this data properly
  // console.log( historicElements );

  // lets get the height of the browser window frame body
  var browserViewportHeight = $("#ie-window-frame-body").height();

  // console.log("fake viewport height dsfdsf: " + browserViewportHeight);

  // this is the element that gets scrolled to see the the different years
  var timelineScrollableElement = $("#ie-window-frame-body-inner");

  var scrollPercentagePrevious = undefined;

  timelineScrollableElement.scroll(function() {

    var scrollHeight = document.getElementById("ie-window-frame-body-inner").scrollHeight;

    // scroll amount between 0 and 1
    var scrollPercentage = ( timelineScrollableElement.scrollTop() / ( scrollHeight - timelineScrollableElement.height() ) );

    if( scrollPercentagePrevious != undefined ) {

      var scrollDirection = scrollPercentagePrevious > scrollPercentage ? "past" : "future";

      // console.log(scrollDirection);

    }

    // updates each time scroll event fired
    scrollPercentagePrevious = scrollPercentage;

    // update current year
    // base year + (percentage scrolled * years to current date)
    // gives you the current time travelled year
    var currentYear = 1990 + Math.round( (2018 - 1990) * scrollPercentage );
    $( "#ie-window-frame-current-year-content" ).text( currentYear );

    // lets morph the page layout/design depending on what the year is
    // and what direction in time you are travelling (past or future)

    if ( scrollDirection == "past" ) {

      //console.log("travelling to past")

    }

    if ( scrollDirection == "future" ) {

      //console.log("travelling to future");

    }

    addCSSClassesToElementsBasedOnYear( currentYear, historicElements ); // either 1990, 2000, 2018

  });

  // get rid of elements that are not of this year upon start up
  // starts at 1990
  addCSSClassesToElementsBasedOnYear( 1990, historicElements );

  function addCSSClassesToElementsBasedOnYear( currentYear, historicElements) {
    // only one condition can be true in one point in time
    if ( currentYear == 1990 || currentYear == 2000 || currentYear == 2018 ) {

      for (var i = 0; i < historicElements.length; i++) {

        var historicItem = historicElements[i];

        if( historicItem.year == currentYear ) {

          morphHTMLElement(historicItem, true);

          console.log("TRY TO SHOW: " + historicItem.year);

        } else {

          morphHTMLElement(historicItem, false);

          console.log("TRY TO HIDE: " + historicItem.year);

        }

      }

    }
  }

  function morphHTMLElement(historicElementObject, show) {

    //console.log(historicElementObject);

    // class made in the following syntax
    // html-historic-element-animate-<transition_style>-<timeline_direction>-<direction_if_appicable>

    var showHide = show ? "show" : "hide";

    var className = "html-historic-element-animate-" + historicElementObject.animation_type + "-" + showHide;

    var invertShowHide = !show ? "show" : "hide";

    var invertClassName = "html-historic-element-animate-" + historicElementObject.animation_type + "-" + invertShowHide;

    console.log(historicElementObject.year + " needs class " + className)

    if (historicElementObject.animation_type != "fade") {

      // add animate direction to class name

    }

    // https://api.jquery.com/eq-selector/
    $( ".html-historic-element:eq(" + historicElementObject.index + ")" ).removeClass( invertClassName );
    $( ".html-historic-element:eq(" + historicElementObject.index + ")" ).addClass( className );

  }


});

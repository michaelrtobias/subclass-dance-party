$(document).ready(function() {
  window.dancers = [];
  $('#scatterBtn').hide();
  window.isLineDancing = false;
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var left = window.isLineDancing ? 100 : $('body').width() * Math.random();

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      left,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('#lineDancing').on('click', function(event) {
    window.dancers.forEach(function(dancer) {
      dancer.lineUp();
    });
    window.isLineDancing = true;
    $('#lineDancing').hide();
    $('#scatterBtn').show();
    $('.swapperDancer').stop();
    $('.FadeDancer').stop();
  }); // event?

  $('#scatterBtn').on('click', function() {
    window.dancers.forEach(function(dancer) {
      dancer.scatter();
    });
    window.isLineDancing = false;
    $('#lineDancing').show();
    $('#scatterBtn').hide();
  });
});


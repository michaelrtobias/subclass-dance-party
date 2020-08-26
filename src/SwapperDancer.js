var SwapperDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).addClass('swapperDancer');
};


SwapperDancer.prototype = Object.create(Dancer.prototype);

SwapperDancer.prototype.constructor = SwapperDancer;


SwapperDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var me = this;

  // this.left += Math.floor(Math.random() * 300 - 150);
  // if (!window.isLineDancing) {
  //   this.top += Math.floor(Math.random() * 300 - 150);
  // } else {
  //   this.top = 100;
  // }
  // if (this.left < 0) {
  //   this.left = 50;
  // }
  // if (this.left > $('body').width()) {
  //   this.left = $('body').width() - 50;
  // }
  // if (this.top < 0) {
  //   this.top = 50;
  // }
  // if (this.top > $('body').height()) {
  //   this.top = $('body').height() - 50;
  // }
  // this.$node.animate({ left: `${this.left}`, top: `${this.top}`});

  var closestDancer, shortestDistance;
  window.dancers.forEach(function(dancer) {
    if (dancer !== me) {
      var leftDistance = me.left - dancer.left;
      var topDistance = me.top - dancer.top;
      var totalDistance = Math.sqrt(Math.pow(leftDistance, 2) + Math.pow(topDistance, 2));
      if (totalDistance < shortestDistance || shortestDistance === undefined) {
        closestDancer = dancer;
        shortestDistance = totalDistance;
      }
    }
  });
  if (closestDancer !== undefined) {
    var oldThisTop = me.top;
    var oldThisLeft = window.isLineDancing ? 100 : me.left;
    me.top = closestDancer.top;
    me.left = window.isLineDancing ? 100 : closestDancer.left;
    closestDancer.top = oldThisTop;
    closestDancer.left = window.isLineDancing ? 100 : oldThisLeft;
    me.$node.animate({ left: `${me.left}`, top: `${me.top}`});
    closestDancer.$node.animate({ left: `${closestDancer.left}`, top: `${closestDancer.top}`});
  }
};
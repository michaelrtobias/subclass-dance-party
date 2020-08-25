var FadeOutDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).addClass('FadeDancer');
};

FadeOutDancer.prototype = Object.create(Dancer.prototype);
FadeOutDancer.prototype.constructor = FadeOutDancer;

FadeOutDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.$node.fadeOut();
  this.$node.fadeIn();
};

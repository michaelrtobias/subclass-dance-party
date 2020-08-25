describe('rainbowDancer', function() {
  var rainbowDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rainbowDancer = new RainbowDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rainbowDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node change color randomly', function() {
    sinon.spy(rainbowDancer.$node, 'css');
    rainbowDancer.step();
    expect(rainbowDancer.$node.css.called).to.be.true;
  });

  it('should have a different color after step is invoked', function() {
    var lastColor = $(rainbowDancer.$node).css('border-color');
    rainbowDancer.step();
    var currentColor = $(rainbowDancer.$node).css('border-color');
    expect(lastColor).to.be.not.equal(currentColor);
  });


  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rainbowDancer, 'step');
      expect(rainbowDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(rainbowDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(rainbowDancer.step.callCount).to.be.equal(2);
    });
  });
});
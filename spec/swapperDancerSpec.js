describe('swapperDancer', function () {
  var swapperDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    swapperDancer = new SwapperDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(swapperDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node swap places with another node', function() {
    window.dancers.push(new BlinkyDancer);
    var oldLeft = swapperDancer.left;
    var oldTop = swapperDancer.top;
    swapperDancer.step();
    expect(swapperDancer.top).to.not.equal(oldTop);
    expect(swapperDancer.left).to.not.equal(oldLeft);
  });


  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(swapperDancer, 'step');
      expect(swapperDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(swapperDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(swapperDancer.step.callCount).to.be.equal(2);
    });
  });
});
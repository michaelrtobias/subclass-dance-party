describe('fadeOutDancer', function () {
  var fadeOutDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fadeOutDancer = new FadeOutDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(fadeOutDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fade in and out', function() {
    sinon.spy(fadeOutDancer.$node, 'fadeOut');
    sinon.spy(fadeOutDancer.$node, 'fadeIn');
    fadeOutDancer.step();
    expect(fadeOutDancer.$node.fadeOut.called).to.be.true;
    expect(fadeOutDancer.$node.fadeIn.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(fadeOutDancer, 'step');
      expect(fadeOutDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(fadeOutDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(fadeOutDancer.step.callCount).to.be.equal(2);
    });
  });











});
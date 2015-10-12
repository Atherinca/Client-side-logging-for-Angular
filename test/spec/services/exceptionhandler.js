'use strict';

describe('Service: exceptionhandler', function () {

  // load the service's module
  beforeEach(module('angularLogApp'));

  // instantiate service
  var exceptionhandler;
  beforeEach(inject(function (_exceptionhandler_) {
    exceptionhandler = _exceptionhandler_;
  }));

  it('should do something', function () {
    expect(!!exceptionhandler).toBe(true);
  });

});

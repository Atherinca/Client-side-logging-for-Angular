'use strict';

describe('Service: stacktraceservice', function () {

  // load the service's module
  beforeEach(module('angularLogApp'));

  // instantiate service
  var stacktraceservice;
  beforeEach(inject(function (_stacktraceservice_) {
    stacktraceservice = _stacktraceservice_;
  }));

  it('should do something', function () {
    expect(!!stacktraceservice).toBe(true);
  });

});

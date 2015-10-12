'use strict';

describe('Service: errorlogservice', function () {

  // load the service's module
  beforeEach(module('angularLogApp'));

  // instantiate service
  var errorlogservice;
  beforeEach(inject(function (_errorlogservice_) {
    errorlogservice = _errorlogservice_;
  }));

  it('should do something', function () {
    expect(!!errorlogservice).toBe(true);
  });

});

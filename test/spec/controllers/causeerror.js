'use strict';

describe('Controller: CauseerrorCtrl', function () {

  // load the controller's module
  beforeEach(module('angularLogApp'));

  var CauseerrorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CauseerrorCtrl = $controller('CauseerrorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CauseerrorCtrl.awesomeThings.length).toBe(3);
  });
});

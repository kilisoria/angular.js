'use strict';

describe('Service: club', function () {

  // load the service's module
  beforeEach(module('soccerTimeApp'));

  // instantiate service
  var club;
  beforeEach(inject(function (_club_) {
    club = _club_;
  }));

  it('should do something', function () {
    expect(!!club).toBe(true);
  });

});

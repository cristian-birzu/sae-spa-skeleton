'use strict';

require('source-map-support/register');

var _fetch = require('fetch');

var baseHref = 'https://api.github.com';

describe('the API', function () {
  beforeEach(function () {});

  it('fetch github users', function (done) {
    (0, _fetch.fetchUrl)(baseHref + '/users', function (err, meta, body) {
      var users = JSON.parse(body);
      var user = users[0];

      expect(user).toHaveMember('login');
      expect(user).toHaveMember('id');
      expect(user).toHaveMember('avatar_url');


      expect(users).toEqual(jasmine.any(Array));
      expect(user.login).toEqual(jasmine.any(String));
      expect(user.id).toEqual(jasmine.any(Number));
      expect(user.avatar_url).toEqual(jasmine.any(String));

      done();
    });
  });
});
//# sourceMappingURL=api.spec.js.map

import 'source-map-support/register';
import {fetchUrl} from 'fetch';

const baseHref = 'https://api.github.com';

describe('the API', () => {
  beforeEach(() => {});

  it('fetch github users', (done) => {
    //fetches an array of Users
    fetchUrl(`${baseHref}/users`, (err, meta, body)=> {
      let users = JSON.parse(body);
      let user = users[0];

      expect(user).toHaveMember('login');
      expect(user).toHaveMember('id');
      expect(user).toHaveMember('avatar_url');
      // [...] can add more expectations as needed

      expect(users).toEqual(jasmine.any(Array));
      expect(user.login).toEqual(jasmine.any(String));
      expect(user.id).toEqual(jasmine.any(Number));
      expect(user.avatar_url).toEqual(jasmine.any(String));
      // [...]
      done();
    });
  });
});

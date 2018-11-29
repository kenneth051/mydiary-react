import LoggedInUser from '../common/getToken';

test('set token in local storage', () => {
  expect(LoggedInUser('token', 'username'));
});


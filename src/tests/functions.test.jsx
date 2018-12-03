import LoggedInUser from '../common/getToken';
import ProtectedRoute from '../common/AuthToken';

test('set token in local storage', () => {
  expect(LoggedInUser('token', 'username'));
});

test('set token in local storage', () => {
  expect(ProtectedRoute('token'));
});

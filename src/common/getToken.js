const LoggedInUser = (token, username) => {
  if (token && username) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }
};
export default LoggedInUser;

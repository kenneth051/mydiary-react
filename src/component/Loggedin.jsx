import React from 'react';

const LoggedinUser = () => (
  <div className="row">
    <div className="col-lg-5 color">
 LOGGED IN AS:
    {' '}
    {localStorage.getItem('username')}
    </div>
  </div>
);

export default LoggedinUser;

import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div className="row">
    <div className="col-lg-4 links"><center><Link to="/createEntry">CREATE AN ENTRY</Link></center></div>
    <div className="col-lg-4 links"><center><Link to="/allEntries">ALL ENTRIES</Link></center></div>
    <div className="col-lg-4 links"><center><Link to="">PROFILE</Link></center></div>
  </div>
);
export default Menu;

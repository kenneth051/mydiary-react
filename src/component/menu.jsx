import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div className="row">
    <div className="col-lg-6 col-m-6 col-sm-6 col-xs-6 links height"><center><Link to="/createEntry">CREATE AN ENTRY</Link></center></div>
    <div className="col-lg-6 col-m-6 col-sm-6 col-xs-6 links"><center><Link to="/allEntries">ALL ENTRIES</Link></center></div>
  </div>
);
export default Menu;

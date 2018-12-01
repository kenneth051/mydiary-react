import React from 'react';
import { Link } from 'react-router-dom';
function logout() {
  localStorage.clear();
  window.location = '/';
}
const Menu = () => (
  <div className="row">
    <div className="col-lg-4 col-m-4 col-sm-12 col-xs-12 links height"><br /><center><Link to="/createEntry">CREATE AN ENTRY</Link></center></div>
    <div className="col-lg-4 col-m-4 col-sm-12 col-xs-12 links height"><br /><center><Link to="/allEntries">ALL ENTRIES</Link></center></div>
    <div className="col-lg-4 col-m-4 col-sm-12 col-xs-12 height"><center><button type="button" class="logout"onClick={()=>{logout()}}>LOGOUT</button></center></div>
  </div>
);
export default Menu;

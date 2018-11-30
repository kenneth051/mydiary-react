import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import RegistrationForm from '../component/Register';
import LoginForm from '../component/login';

const Landingpage = props => (
  <div>
    <Navbar />
    <div className="container">

      <div className="row color">
        <div className="col-lg-3" />
        <div className="col-lg-6 welcome">
          <center>
            WELCOME TO OUR ONLINE FREE DIARY
            <br />
            KEEP ALL YOUR DAILY MEMORIES IN ONE PLACE
          </center>
        </div>
        <div className="col-lg-3" />
      </div>
      <br />
      <div className="row2">TO GET STARTED, REGISTER WITH US OR LOGIN</div>
      <div className="landing-row">
        <div className="row">
          <div className="col-lg-4" />
          <div className="col-lg-4">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item ">
                <a className="nav-link link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">REGISTER</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">LOGIN</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <RegistrationForm />
              </div>
              <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <LoginForm {...props} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="fixed-bottom link">
        <Footer />
      </div>
    </div>
  </div>
);

export default Landingpage;

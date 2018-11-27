import React, { Component } from 'react';
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import RegistrationForm from '../component/login'
import LoginForm from '../component/register'
class Landingpage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar />
                <div className="container">

                    <div className="row color">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 welcome">
                        <center> WELCOME TO OUR ONLINE FREE DIARY<br /> 
                        KEEP ALL YOUR DAILY MEMORIES IN ONE PLACE </center>
                        </div>
                        <div className="col-lg-3"></div>
                    </div><br />
                    <div class ="row2">TO GET STARTED, REGISTER WITH US OR LOGIN</div>
                    <div className="landing-row">
                    <div class="row">
                        <div class="col-lg-4">
                        </div>
                        <div class="col-lg-4">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item ">
                                    <a class="nav-link link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">REGISTER</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">LOGIN</a>
                                </li>
                            </ul>
                                <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <LoginForm />
                                </div>
                                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <RegistrationForm />
                                </div>
                                </div>
                        </div>
                    </div></div>
                    <div className="fixed-bottom link">
                <Footer />
                </div>
                </div>
            </div>
         );
    }
}
 
export default Landingpage;
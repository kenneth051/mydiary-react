import React, { Component } from 'react';
class RegistrationForm extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <form >
                   <div class="form-group">
                        <input type="text" className="form-control border-0" placeholder="Enter Firstname"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control border-0" placeholder="Enter Lastname"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control border-0" placeholder="Enter Username"/>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control border-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control border-0" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control border-0" id="exampleInputPassword1" placeholder="Enter Password Again"/>
                    </div>
                    <center><button type="submit" class="btn btn-success">CREATE ACCOUNT</button></center>
                </form>

            </div>
         );
    }
}
 
export default RegistrationForm;
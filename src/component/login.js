import React, { Component } from 'react';
class LoginForm extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <form >
                    <div class="form-group">
                        <input type="text" class="form-control border-0" placeholder="Enter Username"/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control border-0" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <center><button type="submit" class="btn btn-success">LOGIN</button></center>
                </form>

            </div>
         );
    }
}
 
export default LoginForm;
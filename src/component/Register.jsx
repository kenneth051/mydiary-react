import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    signUpUser, loginUser,
  } from '../actions/AuthAction';
  import LoggedInUser from '../common/getToken';

class RegistrationForm extends Component {
    state = {
        firstname: "",
        lastname:"",
        username:"",
        email:"",
        password: "",
        password1: "",
        gender: "",
        message:"",
        load:"",
    } 
    change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.setState({load:true});
        const data={
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            username:this.state.username,
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender,
          }
          if(this.state.password!== this.state.password1){
              this.setState({
                message:"passwords don't match",
                load:false
              })   
        }else{
            this.props.signUpUser(data);
            this.componentDidUpdate=()=>{
            if(this.props.user.user.status_code ===201){
                const logindata={
                    username:this.state.username,
                    password: this.state.password,
                }
                this.props.loginUser(logindata);
                
            }

        }
    }
        }  
    render() {
        if(this.props.user.user.token){
            LoggedInUser(this.props.user.user.token,this.state.username)
        }
        let loaddata;
        loaddata=this.state.message||this.props.user.user.message;
        return ( 
            <div>
                <form method="POST"onSubmit={this.handleSubmit}>
                   <div className="form-group">
                        <input type="text" name="firstname" className="form-control border-0" onChange={this.change} placeholder="Enter Firstname" required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="lastname" className="form-control border-0" onChange={this.change}placeholder="Enter Lastname" required/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="username" className="form-control border-0" onChange={this.change}placeholder="Enter Username" required/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control border-0" onChange={this.change} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" className="form-control border-0" onChange={this.change} placeholder="Password" required/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password1"  className="form-control border-0"  onChange={this.change} placeholder="Enter Password Again" required/>
                    </div>
                    <div className="form-group">
                        <select className="form-control" name="gender" onChange={this.change} required>
                            <option disabled selected>Select your gender</option>
                            <option value ="male">Male</option>
                            <option value ="female">Female</option>
                        </select>
                    </div>
                    <center><button type="submit" className="btn btn-success" >CREATE ACCOUNT</button></center>
                </form>
                {this.props.user.user.status_code ===400 || this.state.message ||this.props.user.user.status_code ===409 ?
                <div className="error">{this.props.user.user.message}{this.state.message}</div>:""}
                {this.state.load===true && !loaddata?
                <div class="lds-dual-ring"></div>:""
                }
                {this.state.message=""}
            </div>
         );
    }
}
const mapStateToProps= state =>({
    user:state.users,
})
 
export default connect(
    mapStateToProps,
    {
        signUpUser, loginUser,
    }
  )(RegistrationForm);

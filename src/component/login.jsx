import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    loginUser,
  } from '../actions/AuthAction';
  import LoggedInUser from '../common/getToken';
class LoginForm extends Component {
    state = {
        username:"",
        password: "",
        message:"",
    } 

    Change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        const data={
            username:this.state.username,
            password: this.state.password,

          }
         this.props.loginUser(data)
        } 
        componentDidUpdate=()=>{
        if(this.props.user.user.token){
            const { history } = this.props;
            history.push("/createEntry");}
         }
    render() {
        if(this.props.user.user.token){
            LoggedInUser(this.props.user.user.token,this.state.username)
        }
        return ( 
            <div>
                <form method="POST" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="username" className="form-control border-0" onChange={this.Change} placeholder="Enter Username" required/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" className="form-control border-0" id="exampleInputPassword1" onChange={this.Change} placeholder="Password" required/>
                    </div>
                    <center><button type="submit" className="btn btn-success">LOGIN</button></center>
                </form>
                {this.props.user.user.status_code ===403 ?
                <div className="error">{this.props.user.user.message}{this.state.message}</div>:""}

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
        loginUser,
    }
  )(LoginForm);

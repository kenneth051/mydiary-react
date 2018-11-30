import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import EntryForm from './EntryForm';
import Menu from './menu';
import {
    CreateEntries, UpdateEntries
  } from '../actions/AuthAction';

class Main extends Component {
    state = { 
        title:"",
        body:""
     }
     onchange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleChange=(text, medium)=> {
        this.setState({body: text});
      }
      
      onhandleSubmit=(event)=>{
        event.preventDefault()
        const data={
            title:this.state.title,
            body:this.state.body,
          }
          if(this.props.action_to_main === "create_entry"){
          this.props.CreateEntries(data);
        }else if(this.props.action_to_main === "update_entry"){
            this.props.UpdateEntries(data, this.props.id);
        }
          this.componentDidUpdate=()=>{
          if(this.props.entry.entry.status_code === 201 || this.props.entry.entry.status_code=== 200){    
            const { history } = this.props;
            history.push("/allEntries");
          }
        }
        }
        componentDidUpdate(prevProps){
            if(this.props.title !== prevProps.title){
                this.setState({
                    body:this.props.body,
                    title:this.props.title
                })
        }
          }

    render() { 
        const status_code=this.props.entry.entry.status_code === 400 || this.props.entry.entry.status_code===409;
        const message = this.props.entry.entry.message;
        return ( 
            <div>
                <Navbar />
                <div className="container">
                <Menu /><br />
                <EntryForm
                actionType={this.props.actionType} 
                buttonAction={this.props.buttonAction}
                change={this.onchange}
                handleChange={this.handleChange}
                onhandleSubmit={this.onhandleSubmit}
                title={this.props.title}
                body={this.props.body}
                />
                {status_code ?
                <div class="error">{message}</div>:"none"}
                </div>
                <div className="fixed-bottom link">
                <Footer />
                </div>
            </div>
         );
    }
}
const mapStateToProps= state =>({
    entry:state.entries,
})

export default connect(
    mapStateToProps,
    {
        CreateEntries, UpdateEntries
    }
  )(Main);

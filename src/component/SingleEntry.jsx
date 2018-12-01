import React, { Component } from 'react';
import {connect} from 'react-redux';
import renderHTML from 'react-render-html';
import Navbar from './Navbar'
import Footer from './Footer';
import Menu from './menu';
import LoggedinUser from './Loggedin';
import {
    singleEntry,
  } from '../actions/AuthAction';
class ViewEntry extends Component {
    state = { 
        title:"",
        body:""
     }
     componentWillMount(){
        if (this.props.match.params.id) {
            const id = this.props.match.params.id;
            this.props.singleEntry(id)
          }
     }
     goUpdate=(id)=>{
        window.location=window.location=`/entry/${id}/edit`}

    render() { 
       const entry=this.props.entry.entry.result;
       let showEntry;
       let entry_id;
       if(entry){
        entry_id = entry[0].id;
        showEntry = entry.map(entry => (
        <div key={entry.id}>
        <div className="title"><center>{entry.title}</center></div><hr />
        <div className="word_wrap">{renderHTML(entry.body)}</div>
        <hr />
        <div className="row entry_footer">
                <div className="col-lg-4"><center>CREATED DATE: {entry.entry_date}</center></div><div class="col-lg-4"><center>CREATED TIME: {entry.entry_time}</center></div><div class="col-lg-4"><center>UPDATED ON: {entry.updated}</center></div>
        </div>
        </div>
      ));}
    return ( 
            <div>
                < Navbar />
                <div className="container">
                <LoggedinUser/>
                <Menu /><br />
                <div className="jumbotron">
                <div className="row">
                <div className="col-lg-5"></div>
                <div className="col-lg-5"></div>
                <div className="col-lg-2"><button className="btn btn-success" onClick={()=>{this.goUpdate(entry_id)}}>EDIT ENTRY</button></div>
                </div>
                 {showEntry}
                 </div>
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
        singleEntry
    }
  )(ViewEntry);

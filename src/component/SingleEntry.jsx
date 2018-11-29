import React, { Component } from 'react';
import {connect} from 'react-redux';
import renderHTML from 'react-render-html';
import Navbar from './Navbar'
import Footer from './Footer';
import Menu from './menu';
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
        const { history } = this.props;
        history.push(`/entry/${id}/edit`);}

    render() { 
       const entry=this.props.entry.entry.result;
       let showEntry;
       let entry_id;
       if(entry){
        entry_id = entry[0].id;
        showEntry = entry.map(entry => (
        <div key={entry.id}>
        <p class="title"><center>{entry.title}</center></p><hr />
        <div className="word_wrap">{renderHTML(entry.body)}</div>
        <hr />
        <div class="row entry_footer">
                <div class="col-lg-4"><center>CREATED DATE: {entry.entry_date}</center></div><div class="col-lg-4"><center>CREATED TIME: {entry.entry_time}</center></div><div class="col-lg-4"><center>UPDATED ON: {entry.updated}</center></div>
        </div>
        </div>
      ));}
    return ( 
            <div>
                < Navbar />
                <div class="container">
                <Menu /><br />
                <div class="jumbotron">
                <div class="row">
                <div class="col-lg-5"></div>
                <div class="col-lg-5"></div>
                <div class="col-lg-2"><button className="btn btn-success" onClick={()=>{this.goUpdate(entry_id)}}>EDIT ENTRY</button></div>
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

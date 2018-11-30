import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import Navbar from './Navbar'
import Footer from './Footer';
import Menu from './menu';
import {
    fetchEntries,
  } from '../actions/AuthAction';
class GetEntries extends Component {
    state = { 
        title:"",
        body:""
     }
     componentWillMount(){
         this.props.fetchEntries()
     }

    render() { 
       const data=this.props.entry.entries.result;
       console.log(data)
       let showArticles;
       if(data){
        showArticles = data.map(entry => (
        <div key={entry.id}>
            <div class="card">
            <Link to={`/entry/${entry.id}`}>
            <div class="card-header title">{entry.title}</div>
              </Link>
                <p class="card-body entry_body truncate">{renderHTML(entry.body)}</p> 
                <div class="card-footer">
                    <div class="row entry_footer">
                        <div class="col-lg-4">CREATED DATE: {entry.entry_date}</div>
                        <div class="col-lg-4">CREATED TIME: {entry.entry_time}</div>
                        <div class="col-lg-4">UPDATED AT: {entry.updated}</div>
                    </div>
                </div>
            </div><br />
        </div>
      ));
    }

        return ( 
            <div>
                <Navbar />
                <div class="container">
                <Menu /><br />
                <div className="scroll">
                {showArticles}
                </div>
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
        fetchEntries
    }
  )(GetEntries);

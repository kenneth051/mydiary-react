import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import Navbar from './Navbar'
import Footer from './Footer';
import LoggedinUser from './Loggedin';
import Menu from './menu';
import {
    fetchEntries,
  } from '../actions/AuthAction';
class GetEntries extends Component {
    state = { 
        title:"",
        body:"",
        load:true,
     }
     componentDidMount(){
         this.props.fetchEntries()
     }

    render() {
        console.log(this.props.entry.entries.result)
       const data=this.props.entry.entries.result;
       let showArticles;
       if(data){
        showArticles = data.map(entry => (
        <div key={entry.id}>
            <div className="card">
            <Link to={`/entry/${entry.id}`}>
            <div className="card-header title">{entry.title}</div>
              </Link>
                <p className="card-body entry_body truncate">{renderHTML(entry.body)}</p> 
                <div className="card-footer">
                    <div className="row entry_footer">
                        <div className="col-lg-4">CREATED ON: {entry.entry_date}</div>
                        <div className="col-lg-4">CREATED AT: {entry.entry_time}</div>
                        <div className="col-lg-4">UPDATED AT: {entry.updated}</div>
                    </div>
                </div>
            </div><br />
        </div>
      ));
    }

        return ( 
            <div>
                <Navbar />
                <div className="container">
                <LoggedinUser/>
                <Menu /><br />
                <div className="scroll">
                {this.state.load ===true &&this.props.entry.entries.result ===undefined?
                <center><div class="lds-dual-ring color">ENTRIES LOADING...</div></center>:""
                }
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

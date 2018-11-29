import React, { Component } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import Editor from 'react-medium-editor';
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');
class EntryForm extends Component {
    state = { };
    render() { 
        return ( 
                 <div><div className="entry_row">{this.props.actionType}</div>
                     <div class="jumbotron">
                <form method="POST" onSubmit={this.props.onhandleSubmit}>
                    <div class="form-group">
                        <input type="text" name="title" className="form-control border-0" defaultValue={this.props.title} onChange={this.props.change} placeholder="Title here" required/>
                    </div>
                    <div class="form-group"> 
                    <Editor
                    text={this.props.body}
                    placeholder="body here"
                    onChange={this.props.handleChange}
                    style={{ padding: 10 }}
                    options={{toolbar: {buttons: ['bold', 'italic', 'underline','anchor','h2','h3','highlighter']},}}
                    
                    />
                    </div>
                    <center><button type="submit" class="btn btn-success">{this.props.buttonAction}</button></center>
                </form>
            </div>
            </div>
         );
    }
}
 
export default EntryForm;

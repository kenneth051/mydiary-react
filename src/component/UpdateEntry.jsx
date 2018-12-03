import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './Main';
import {
  singleEntry,
} from '../actions/AuthAction';

export class UpdateEntry extends Component {
  componentWillMount() {
    this.props.singleEntry(this.props.match.params.id);
  }

  render() {
    if (this.props.entry.result) {
      const data = this.props.entry.result[0];
      this.title = data.title;
      this.body = data.body;
    }
    return (
      <div>
            <Main
              actionType="UPDATE THIS ENTRY"
              buttonAction="UPDATE ENTRY"
              action_to_main="update_entry"
              title={this.title}
              body={this.body}
              id={this.props.match.params.id}
              {...this.props}
            />
          </div>
    );
  }
}

const mapStateToProps = state => ({
  entry: state.entries.entry,
});

export default connect(
  mapStateToProps,
  {
    singleEntry,
  },
)(UpdateEntry);

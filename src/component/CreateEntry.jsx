import React from 'react';
import Main from './Main';
const CreateEntries = props => (
  <div>
    <Main
                actionType="CREATE A NEW ENTRY"
                buttonAction="CREATE ENTRY"
                action_to_main="create_entry"
                {...props}
              />
  </div>
);

export default CreateEntries;

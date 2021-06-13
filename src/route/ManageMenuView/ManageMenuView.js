import React from 'react';

import TextInput from 'react-autocomplete-input';

import "./ManageMenuView.css";
import 'react-autocomplete-input/dist/bundle.css';

const ManageMenuView = () => {
    return(
        <div>
            ManageMenu Layout

            <TextInput
                onRequestOptions={this.handleRequestOptions}
                options={{
                    "": ["aa", "ab", "abc", "abcd"]
                }}
                matchAny={true}
                trigger={[""]} />
        </div>
    );
}
 
export default ManageMenuView;
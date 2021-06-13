import React from 'react';

import TextInput from 'react-autocomplete-input';

import "./ManageMenuView.css";
import 'react-autocomplete-input/dist/bundle.css';

const ManageMenuView = () => {
    return(
        <div>
            ManageMenu Layout

            <TextInput trigger={["@", "@@"]} options={{"@": ["aa", "ab", "abc", "abcd"], "@@": ["az", "ar"]}} />
        </div>
    );
}
 
export default ManageMenuView;
import React from 'react';

import TextInput from 'react-autocomplete-input';

import "./ManageMenuView.css";
import 'react-autocomplete-input/dist/bundle.css';

const ManageMenuView = () => {
    return(
        <div>
            ManageMenu Layout

            <TextInput
                options={{
                    "": ["돼지고기 김치볶음", "돼지고기 청경채볶음", "된장찌개", "돼지고기 김치찌개", "햄소시지찌개", "쌀밥", "현미밥"]
                }}
                matchAny={true}
                trigger={[""]} />
        </div>
    );
}
 
export default ManageMenuView;
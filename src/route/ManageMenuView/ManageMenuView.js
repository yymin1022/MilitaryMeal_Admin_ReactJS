import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import "./ManageMenuView.css";

const ManageMenuView = () => {
    this.menuList = [
        {menu: "돼지고기 김치볶음"},
        {menu: "돼지고기 청경채볶음"},
        {menu: "김치찌개"},
        {menu: "된장찌개"},
        {menu: "호박된장찌개"},
        {menu: "배추김치"},
        {menu: "열무김치"},
        {menu: "쌀밥"},
        {menu: "현미밥"},
        {menu: "Pizza"},
        {menu: "Spaghetti"},
    ]

    return(
        <div>
            ManageMenu Layout

            <Autocomplete
                options={this.menuList}
                getOptionLabel={(option) => 
                    option.menu}
                style={{width: 300}}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        label="Input Menu Name"
                        variant="outlined" />
                } />
        </div>
    );
}
 
export default ManageMenuView;
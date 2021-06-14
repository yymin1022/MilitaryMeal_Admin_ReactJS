import React, {useState} from "react";
import {Link} from "react-router-dom";

import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./ManageMenuView.css";

const ManageMenuView = () => {
    const [menuStr, setMenu] = useState("");

    const menuList = [
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
            <Autocomplete
                options={menuList}
                getOptionLabel={(option) => 
                    option.menu}
                style={{width: 300}}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        label="Input Menu Name"
                        variant="outlined" />
                }
                
                onChange={(event, value, reason) => {
                    setMenu(value.menu);
                }}/>
            
            <Button onClick={() => {
                console.log({menuStr});
            }}>Add this Menu to Filter</Button>
        </div>
    );
}
 
export default ManageMenuView;
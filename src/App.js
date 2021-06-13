import React,{useEffect} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";

import DefaultLayout from "./layout/Default";
import RouteLayout from "./layout/RouteLayout";

import ApproveUserView from "./route/ApproveUserView";
import MainView from "./route/MainView";
import ManageMenuView from "./route/ManageMenuView";
import RankView from "./route/RankView";
// import axios from "axios";

import "./App.css";

const App = () => {
    // useEffect(() => {
    //   axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    //   axios.post("https://mnd-meal-api.defcon.or.kr/login", {username:"user", password:"123"})
    //   .then((response)=>{
    //     console.log(response)
    //   })
    //   return true;
    // }, []);
    return(
        <Router>
            <Switch>
                <RouteLayout
                    exact
                    path="/"
                    layout={DefaultLayout}
                    component={MainView} />
                <RouteLayout
                    exact
                    path="/approve"
                    layout={DefaultLayout}
                    component={ApproveUserView} />
                <RouteLayout
                    exact
                    path="/manage"
                    layout={DefaultLayout}
                    component={ManageMenuView} />
                <RouteLayout
                    exact
                    path="/rank"
                    layout={DefaultLayout}
                    component={RankView} />
            </Switch>
        </Router>
    );
}

export default App;
import React,{useEffect} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";

import DefaultLayout from "./layout/Default";
import RouteLayout from "./layout/RouteLayout";

import MainView from "./route/MainView";
// import axios from "axios";

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
            </Switch>
        </Router>
    );
}

export default App;
import React, { Component } from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import { saveState } from '../redux/store'
//************ Components   ********************/
import Results from './results';
import Details from './details';
import Formik from "./formik";
import Publications from "./publications";

class Root extends Component{
    state = {
        isMobile: false
    }
    componentDidMount() {
        window.addEventListener('unload', saveState)
    }
    render() {
        return (
            <Switch>
                <Route path="/results" component={Results}/>
                <Route path="/details/:itemId" component={Details}/>
                <Route path="/formik" component={Formik}/>
                <Route path="/publications" component={Publications}/>
                <Redirect from="/" to="/results" />
            </Switch> 
        );
    }
}

export default Root;
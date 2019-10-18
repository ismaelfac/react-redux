import React, { Component } from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import { saveState } from '../redux/store'
//************ Components   ********************/
import Results from '../components/results';
import Details from '../components/details';

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
                <Redirect from="/" to="/results" />
            </Switch> 
        );
    }
}

export default Root;
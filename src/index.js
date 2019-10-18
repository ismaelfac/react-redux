import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store, { saveState } from './redux/store';
//************ Components   ********************/
import Results from './components/results';
import Details from './components/details';

class Root extends Component {
    componentDidMount() {
        window.addEventListener('unload', saveState)
    }
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/results" component={Results}/>
                        <Route path="/details/:itemId" component={Details}/>
                        <Redirect from="/" to="/results" />
                    </Switch> 
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));

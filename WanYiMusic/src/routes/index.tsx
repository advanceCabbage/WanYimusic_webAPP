import * as React from 'react';
import {HashRouter, Route,Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import App from '../containers/App'
import A from '../views/A'
import B from '../views/B'
const history = createBrowserHistory();
export default(
    <Route path="/" component={App}>
        <Route path="A" component={A}></Route>
        <Route path="B" component={B}></Route>
    </Route>
)
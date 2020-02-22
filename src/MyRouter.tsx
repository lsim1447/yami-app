import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Cards from './routes/Cards';
import Home from './routes/Home';
import PageNotFound from './routes/PageNotFound';

class MyRouter extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cards" component={Cards} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        );
    }
}

export default MyRouter;
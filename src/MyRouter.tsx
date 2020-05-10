import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AllCards from './routes/AllCards';
import Deck from './routes/Deck';
import Home from './routes/Home';
import PageNotFound from './routes/PageNotFound';
import Test from './routes/Test';

class MyRouter extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/all-cards" component={AllCards} />
                    <Route exact path="/test" component={Test} />
                    <Route exact path="/my-deck" component={Deck} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        );
    }
}

export default MyRouter;
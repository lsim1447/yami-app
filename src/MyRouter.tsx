import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AllCards from './routes/AllCards';
import Categories from './routes/Categories';
import Home from './routes/Home';
import MyDeck from './routes/MyDeck';
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
                    <Route exact path="/categories" component={Categories} />
                    <Route exact path="/my-deck" component={MyDeck} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        );
    }
}

export default MyRouter;
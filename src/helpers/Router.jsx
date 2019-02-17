import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../components/About';
import Team from '../components/Team';

class Router extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path="/(|about)/" exact component={About} />
                <Route path="/team" exact component={Team} />
            </Switch>
        )
    }
}

export default Router;
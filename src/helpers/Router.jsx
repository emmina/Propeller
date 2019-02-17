import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../components/About';

class Router extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path="/(|about)/" exact component={About} />
            </Switch>
        )
    }
}

export default Router;
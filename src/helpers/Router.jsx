import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../components/About';
import Team from '../components/Team';
import Projects from '../components/Projects';

class Router extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path="/(|about)/" exact component={About} />
                <Route path="/team" exact component={Team} />
                <Route path="/projects" exact component={Projects} />
            </Switch>
        )
    }
}

export default Router;
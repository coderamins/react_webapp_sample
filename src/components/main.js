import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Tutorials from './tutorialspage';
import About from './aboutpage';
import Contact from './contactpage';

const Main =() =>(
    <Switch>
        <Route exact path="/" component={Tutorials} />
        <Route path="/tutorials" component={Tutorials} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main;
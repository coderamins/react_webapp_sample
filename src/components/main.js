import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Tutorials from './tutorialspage';
import About from './aboutpage';
import Contact from './contactpage';

const Main =() =>(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/tutorials" component={Tutorials} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main;
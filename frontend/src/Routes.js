import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import App from './App';
import Create from './Create';
import PostView from './PostView';
import PostUpdate from './PostUpdate';
import LoginView from './LoginView';
import PrivateRoute from './PrivateRoute';

const Routes=()=>{

    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            <PrivateRoute path="/create" exact component={Create}/>
            <Route path="/login" exact component={LoginView}/>
            <Route path="/post/:slug" exact component={PostView}/>
            <PrivateRoute path="/post/update/:slug" exact component={PostUpdate}/>
        </Switch>
        </BrowserRouter>
    );

};

export default Routes;

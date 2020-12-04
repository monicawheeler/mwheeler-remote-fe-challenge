import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import '../styles/global/variables.css';
import '../styles/global/typography.css';
import '../app/index.css';

import { HeaderBar, Alert } from '@/_components';
import { Users } from '@/users';

function App() {
    const { pathname } = useLocation();
    return (
        <>
            <HeaderBar />
            <Alert />
            <Switch>
                <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                <Route exact path="/">
                    <Redirect to="/users" />
                </Route>
                <Route path="/users" component={Users} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    );
}

export { App }; 
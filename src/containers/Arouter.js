import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import A from './a';

export default class Acontainer extends Component {
    render() {
        const { match } = this.props;
        console.log(match.path)
        return (
            <Switch>
                <Route path={`${match.path}/b`} render={() => (<div>123</div>)}/>
                <Route exact={true} path={`${match.path}`} component={A} />
            </Switch>
        );
    }
}
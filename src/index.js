/**
 * Created by xuqinrui on 2017/11/20.
 */
import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Acontainer from './containers/Arouter'
import counter from './reducers';
import rootSaga from './sagas';
import './style.less'

const OtherComponent = lazy(() => new Promise(resolve =>
    setTimeout(() =>
            resolve(
                // 模拟ES Module
                {
                    // 模拟export default
                    default: function render() {
                        return <div>Other Component</div>
                    }
                }
            ),
        3000
    )
));

const mapStateToProps = state => ({count:state.countContainer.counter.count});
const logger = (store) => {
    return (next) => {
        console.log(next)
        return (action) => {
            // console.log('dispatching', action)
            let result = next(action)
            console.log('next state', store.getState())
            return result
        }
    }
}

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};
let sagaMiddleware = createSagaMiddleware();
const store = createStore(counter, {}, bindMiddleware([logger,sagaMiddleware]));
sagaMiddleware.run(rootSaga);

class App extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = () => {
            this.props.dispatch({type:'INCREMENT_ASYNC'})
        }
    }
    componentWillReceiveProps(nextProps){
        // console.log(nextProps)
    }

    render(){
        const { count } = this.props;
        return (


                <div className={`square`} onClick={this.handleClick} >{`${count}`}
                    Hello World

                    <DefaultPropsTestComponent />
                </div>



        );

    }
}

class DefaultPropsTestComponent extends React.Component {


    render(){
        return <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
            <div>testSomething</div>
        </Suspense>

    }
}


App = connect(mapStateToProps)(App);
ReactDOM.render((
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>

    </Provider>
   
    ), document.getElementById('content')
);
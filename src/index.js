/**
 * Created by xuqinrui on 2017/11/20.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import counter from './reducers';
import a, { printMe } from './print';
import Lion from 'test-es6';
import './style.less'
console.log(a, printMe)
console.log(new Lion())

const store = createStore(counter);
store.subscribe(()=>{console.log(store.getState())})

const mapStateToProps = state => ({count:state});


class App extends React.Component{
    constructor(){
        super();
        this.handleClick = () => {
            this.props.dispatch({type:'INCREMENT'})
            console.log(this.props);
        }
    }
    componentWillReceiveProps(nextProps){
        // console.log(nextProps)
    }

    componentDidMount(){}

    render(){
        const { count } = this.props;
        return (<div className={`square`} onClick={this.handleClick} >{`${count}`}


        </div>);
    }
}


App = connect(mapStateToProps)(App);
ReactDOM.render((
    <Provider store={store} >
        <App />
    </Provider>
   
    ), document.getElementById('content')
);
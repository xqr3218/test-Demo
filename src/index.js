/**
 * Created by xuqinrui on 2017/11/20.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(){
        super();

    }

    componentDidMount(){
        let Prom = new Promise(function(resolve,reject){
            reject("this is wrong")
        });
        try{
            // Prom.then(()=>{},(err)=>{
            //     alert(err+'1');
            // }).catch((err) => {
            //     alert(err)
            // })
        }catch(err){
            alert(err+'2');
        }
        
    }

    render(){
        return (<span></span>);
    }
}

ReactDOM.render((
    <App />
    ), document.getElementById('content')
);
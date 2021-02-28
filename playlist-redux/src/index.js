import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import reducer from './reducer';
import App from './app';
/*创建一个store
* reducer是一个回调函数，包含两个对象参数，state和action
 */
let store = createStore (reducer);



ReactDOM.render (
    <Provider store={store}>
        <App pp={"test Data!"}/>
    </Provider> , document.getElementById ( 'root' ) );



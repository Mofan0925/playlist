import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPage from './ReduxPage';
console.log('ReduxPage :',new ReduxPage().say());
ReactDOM.render (
<div>
<h1>欢迎使用redux!</h1> 
<hr/>
<ReduxPage/>


</div> ,document.getElementById ( 'root' ) );
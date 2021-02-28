import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Link,Switch,Route} from "react-router-dom";
import Home from "./Home";
import Add from "./Add";

/*Path:要渲染的URL，没有Path属性的时候将匹配任意路由
 * Component：要渲染的组件
 * exact: 精确匹配
 * strict： 严格匹配、考虑路径结尾的/
 * */
export default class App extends React.Component{
    render () {
        return (
        <BrowserRouter>
            <div id="musicApp">
               <nav>
                   <Link to="/">首页</Link>
                   <span> | </span>
                   <Link to="/add">添加</Link>
               </nav>
                <Switch>
                 <Route path="/add" component={Add}/>
                 <Route path="/" component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('root'));



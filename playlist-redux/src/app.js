/**
 * Created by Administrator on 2019/12/11.
 */
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Home from "./Home";
import Add from "./add";

class App extends React.Component{
    render(){
        return (
                <div id="musicApp">
                    <BrowserRouter>
                        <Switch>
                          <Route path="/add" component={Add}/>
                          <Route path="/" render={(e)=>{
                           if(this.props.data.length < 1){
                                return <Redirect to="/add" />
                            }
                            return  <Home route={e}/>
                          }}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            )
    }
}
export default connect((state)=>
/*state是store, props组件自身的props;
* 返出去的state还是store，包含原有store+props;
* */
   state
)(App);
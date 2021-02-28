/**
 * Created by Administrator on 2019/12/10.
 */
import React from 'react';
import {Link, Route} from "react-router-dom";

class All extends React.Component {
    render () {
        return (<div>所有列表</div>);
    }
}
class Like extends React.Component {
    render () {
        return (<div>收藏列表</div>);
    }
}

export default class Home extends React.Component {
    render () {
        return (<div>
            <h2>播放列表</h2>

            <div>
                <Link to="/">所有列表</Link>
                <span> | </span>
                <Link to="/like">收藏列表</Link>
            </div>

             <Route path="/" exact component={All}/>
             <Route path="/like" component={Like}/>


        </div>)

    }
}
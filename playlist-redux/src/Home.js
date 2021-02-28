/**
 * Created by Administrator on 2019/12/10.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link,Route,Redirect} from "react-router-dom";
import Main from "./main";
import Foot from "./footer";

class Home extends React.Component {
    render () {
        let props = this.props;
        let pathname=props.route.location.pathname;

        return (
            <div>
              <header className="title">{pathname==="/" ? "播放":"收藏"}列表</header>
               <Link to="/add"  className="addLink align-right">添加歌曲</Link>
                <Route path="/" exact component={Main}/>
                <Route path="/like"  render={(e)=>{
                   if(props.data.filter((item)=>item.like).length < 1 ){
                      return <Redirect to='/'/>
                   }
                   return <Main location={e.location}/>
                }}/>
                <Foot pathname={pathname}/>
           </div>
        )

    }
}
export default connect((state)=>state)(Home)
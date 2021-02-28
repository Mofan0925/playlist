/**
 * Created by Administrator on 2019/12/10.
 */
import React from 'react';
import {Link,Route,Redirect} from "react-router-dom";
import Main from "./main";
import Footer from "./footer";

export default class Home extends React.Component {
    render () {
        let props = this.props;
        let data = props.data;
        let selectData = data.filter((val)=>val.selected);
        let likeData = data.filter((val)=>val.like);
        return (
            <div>
            <header className="title">{props.pathname==="/"? "播放":"收藏"}列表</header>
              <Link to="/add" className="addLink align-right">添加歌曲</Link>
             <Route path="/" exact render={()=>{
                    return(<Main
                           data={data}
                          isCheckAll = {props.isCheckAll}
                          checkAll = {props.checkAll}
                            setCheck = {props.setCheck}
                            setLike = {props.setLike}
                            remove = {props.remove}
                          />)
                }}/>
             <Route path="/like" render={()=>{
                 if(likeData.length===0){
                     return <Redirect to="/" />
                 }
                    return(<Main
                           data={likeData}
                          isCheckAll = {props.isCheckAll}
                          checkAll = {props.checkAll}
                            setCheck = {props.setCheck}
                            setLike = {props.setLike}
                            remove = {props.remove}
                          />)
                }}/>
             <Footer
                    pathname ={props.pathname}
                    length = {data.length}
                    selectLength = {selectData.length}
                    likeLength = {likeData.length}
                    removeSelect = {props.removeSelect}
                    likeSelect = {props.likeSelect}
                    cancelLikeSelect = {props.cancelLikeSelect}
                />
           </div>
        )

    }
}
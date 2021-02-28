import React from "react";
import {connect} from 'react-redux';
import List from "./list";

class Main extends React.Component {
    render(){
        let data = this.props.data;
        return (
            <table className="main" style={{ display:data.length? "table":"none"}}>
                <thead>
                <tr>
                    <th>
                        <input
                            type="checkbox"
                            id="checkAll"
                            checked={this.props.isCheckAll}
                            onChange={(e)=>{
                                this.props.dispatch({
                                    type: "CHECK_ALL",
                                    check: e.target.checked
                                })
                             }}/>
                        <label htmlFor="checkAll">全选</label>
                    </th>
                    <th>歌曲</th>
                    <th>歌手</th>
                    <th>收藏</th>
                    <th>删除</th>
                </tr>
                </thead>
                <tbody>
                {data.map((val)=>{
                    return (<List
                        key={val.id}
                        index = {val.id}
                        />)
                })}
                </tbody>
            </table>
        );
    }
}
export default connect((state,props)=>{

      let isCheckAll=()=>{
         for(var i=0; i<state.data.length; i++){
             if(!state.data[i].selected){
                 return false;
             }
         }
          return true;
      }
    //return Object.assign({},state,{isCheckAll:isCheckAll()});
   console.log(state);
    let pathName = props.location.pathname;
    if(pathName === "/"){
        return Object.assign({},state,{isCheckAll});
    }

    if(pathName === "/like"){
        let data = {};
        data.data = state.data.filter((item)=>item.like);
        return Object.assign({},data,{isCheckAll});
    }

} )(Main);
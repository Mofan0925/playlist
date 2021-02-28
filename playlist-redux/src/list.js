import React from "react";
import {connect} from 'react-redux';

class List extends React.Component {
    render(){
        let data = this.props.data;
        console.log(this.props);

        return (
            <tr className={(data.selected?"selected":"")+ (data.like?" like":"")}>
                <td>
                    <input
                        type="checkbox"
                        checked = {data.selected}
                        onChange = {(e)=>{
                          this.props.dispatch({
                            type:"CHECK",
                            id:data.id,
                            checked:e.target.checked
                          })
                        }}
                        />
                </td>
                <td>{data.title}</td>
                <td>{data.singer}</td>
                <td>
                    <input
                        type="checkbox"
                        checked = {data.like}
                        onChange = {(e)=>{
                           this.props.dispatch({
                            type:"LIKE",
                            id:data.id,
                            checked:e.target.checked
                           })
                        }}/>
                </td>
                <td>
                    <span onClick ={()=>{
                    this.props.dispatch({
                      type:'REMOVE',
                      id:data.id,
                    })}}>X</span>
                </td>
            </tr>
        );
    }
}
export default connect((state,props)=>{
   let data={};
    state.data.forEach((item)=>{
         if(item.id===props.index){
             data.data = item;
         }
    })
    return data;
})(List)

/**
 * Created by Administrator on 2019/12/6.
 */
import React from 'react';

export default class List extends React.Component {
    constructor(){
        super(...arguments);
        this.remove=this.remove.bind(this);
    }
    remove(){
        this.props.remove(this.props.index);
    }
    render () {
        let data=this.props.data;
       return (<tr className={(data.selected?"selected": "")+(data.like?" like":"")}>
            <td ><input type="checkbox"
                        checked ={data.selected}
                        onChange={(e)=>{
                         this.props.setCheck(this.props.index,e.target.checked);
                        }}
                /></td>
            <td>{data.title}</td>
            <td>{data.singer}</td>
            <td><input type="checkbox"
                       checked ={data.like}
                       onChange={(e)=>{
                          this.props.setLike(this.props.index,e.target.checked);
                       }}
                /></td>
            <td><span onClick={this.remove}>X</span></td>
        </tr>)
    }
}

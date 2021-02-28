import React from 'react';
import List from './list'
export default class Main extends React.Component {
    render () {
        return (
            <table className="main">
                <thead>
                <tr>
                    <th>
                        <input type="checkbox" id="checkAll"
                               checked={this.props.isCheckAll}
                               onChange={(e)=>{     //onchange事件，监控check
                                    this.props.checkAll(e.target.checked); //调用父元素的方法
                                }}/>
                        <label htmlFor="checkAll" >全选</label>
                    </th>
                    <th>歌曲</th>
                    <th>歌手</th>
                    <th>收藏</th>
                    <th>删除</th>
                </tr>
                </thead>
                <tbody>{
                    this.props.data.map ( ( item , index )=> {
                        return <List data={item}
                                     key={index}
                                     index={index}
                                     setCheck={this.props.setCheck}
                                     setLike={this.props.setLike}
                                     remove = {this.props.remove}/>
                    } )
                }</tbody>
            </table>
        )
    }
}



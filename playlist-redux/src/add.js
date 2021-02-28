/**
 * Created by Administrator on 2019/12/10.
 */
import React from 'react';
import {connect} from 'react-redux';
class Add extends React.Component{
    constructor(){
        super(...arguments);
        this.state = {
            title: "",
            singer: ""
        };
        this.getback=this.getback.bind(this);
        this.addData=this.addData.bind(this);
    }
    getback(){
        this.props.history.goBack();
    }
    addData () {
        let singer="*";
        let state=this.state;
        if(state.title !=="" || state.singer !==""){
            if(state.title==="" ) {
                state.title=singer;
            }
            if(state.singer==="" ) {
                state.singer=singer;
            }
            this.props.dispatch({
                type:"ADD",
                title:state.title,
                singer: state.singer,
            })  //调用父元素的方法通过参数将子元素里面的数据传递给父元素
            this.setState({        //将输入框内容清掉
                title: "",
                singer: ""
            });
            this.props.history.push("/");
        }else{
            this.refs.pp.style.display="block";
        }
    }
    render(){
        return (
            <header>
                <h2 className="title">播放列表</h2>
                {this.props.data.length!==0 ? <span className="backLink" onClick={this.getback}>返回</span>:""}
                <input type="text"
                       placeholder="输入歌曲名字"
                       value={this.state.title}
                       onChange={
                         (e)=>{
                             this.setState({
                                title: e.target.value
                              });
                          }
                      }/>
                <input
                    type="text"
                    placeholder="输入歌手名字"
                    value={this.state.singer}
                    onChange={(e)=>{
                    this.setState({
                        singer: e.target.value
                    });
                }}
                    />
                <input
                    type="button"
                    value="添加音乐"
                    onClick={this.addData}
                    />
                <p ref="pp" className="pp">请输入歌曲名或者歌手名字!</p>
            </header>
        );
    }
}

export default connect((state)=>state)(Add);
import React from 'react';
export default class Header extends React.Component {
    constructor () {
        super ( ...arguments );
        this.state = {
            title : "" ,
            singer : ""
        };
        this.addData=this.addData.bind(this);
    }

    addData () {
        let singer="*";
        let state=Object.assign(this.state);
        if(state.title !=="" || state.singer !==""){
           if(state.title==="" ) {
               state.title=singer;
             }
           if(state.singer==="" ) {
              state.singer=singer;
            }
        this.props.add(state);  //调用父元素的方法通过参数将子元素里面的数据传递给父元素
         this.setState({        //将输入框内容清掉
                title: "",
                singer: ""
            });
        }

     }

    render () {
        return (<header>
            <h2 className="title">播放列表</h2>
            <input type="text" placeholder="输入歌曲名字" value={this.state.title}
                   onChange={(e)=>{
                                 this.setState({
                                    title: e.target.value
                                 })
                              }}/>
            <input type="text" placeholder="输入歌手名字" value={this.state.singer}
                   onChange={(e)=>{
                                 this.setState({
                                     singer: e.target.value
                                  })
                              }}/>
            <input type="button" value="添加音乐" onClick={this.addData}/>
        </header>)
    }
}




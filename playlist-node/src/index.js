import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

export default class App extends React.Component{
    constructor() {
        super ( ...arguments );
        this.state={listState: true,data:[{
            id:0,
            title: "111",
            singer: "111",
            selected: false,
            like: true,
        },{
            id:1,
            title: "222",
            singer: "222",
            selected: false,
            like: false,
        },{
            id:2,
            title: "333",
            singer: "333",
            selected: false,
            like: false,
        }]};
        this.now=this.state.data.length;
        this.setCheckAll=this.setCheckAll.bind(this);
        this.setCheck=this.setCheck.bind(this);
        this.setLike=this.setLike.bind(this);
        this.remove=this.remove.bind(this);
        this.removeSelect=this.removeSelect.bind(this);
        this.likeSelect=this.likeSelect.bind(this);
        this.cancelLikeSelect=this.cancelLikeSelect.bind(this);
        this.showLikeList=this.showLikeList.bind(this);
    }
    add(item){
        let data=this.state.data;
        data.push({
          id: this.now,
          title: item.title,
          singer: item.singer,
          selected: false,
          like: false,
      });
        this.now++;
        this.resetDatalist(data);
    }
    /*全选功能*/
    isCheckAll(){
      let data=this.state.data;
        if(data.length===0){
            return false;
        }
        for(var i=0;i<data.length;i++){
            if(!data[i].selected){
                return false;
            }
        }
        return true;
    }
    setCheckAll(checked){
       let data=this.state.data.map((item)=>{
           item.selected=checked;
           return item;
       })
        this.setState({data});
    }
    setCheck(index,checked){
        //console.log("父元素接受到第index条歌曲被选中"+index);
      let data = this.state.data;
        data.forEach((val)=>{
            if(val.id === index){
                val.selected = checked;
            }
        });
        this.resetDatalist(data);
    }
    /*收藏*/
    setLike(index,checked){
        console.log("shouzang"+index);
        let data = this.state.data;
         data.forEach((val)=>{
            if(val.id === index){
                val.like = checked;
            }
        });
        this.resetDatalist(data);
    }
    /*从列表删除歌曲*/
    remove(index){
        console.log("父元素接受到第index条歌曲被选中"+index);
        let data = this.state.data.filter((val)=>val.id!==index);
        this.resetDatalist(data); /*变量必须跟属性名一致*/
     }
    /*删除选中歌曲*/
    removeSelect(){
        let data=this.state.data.filter((val)=> val.selected===false);
        this.resetDatalist(data);
    }

    /*重新数据列表*/
    resetDatalist(data){
        data.forEach((item,index)=>{
            item.id=index;
        })
        this.setState({data:data});
    }
    /*收藏选中歌曲*/
    likeSelect(){
        let data=this.state.data;
        data.forEach((item,index)=> {
            if (item.selected) {
                item.like = true;
            }
        })
        this.resetDatalist(data);
    }
    /*取消收藏选中歌曲*/
    cancelLikeSelect(){
        let data=this.state.data.map((item,index)=> {
            if ( item.selected ) {
                item.like = false;
            }
            return item;
        })
        this.resetDatalist(data);
    }
   /*查看收藏清单*/
    showLikeList(state){
        this.setState({
            listState: state
        });
    }
/*没有收藏歌曲时显示所有清单*/
shouldComponentUpdate(nextProps,nextState){
        if(!nextState.listState){
            let likeData = nextState.data.filter((val)=>val.like);
            if(!likeData.length){
                this.setState({
                    listState: true
                });
                return false;
            }
        }
        return true;
    }

    render(){
        let selectData = this.state.data.filter((val)=>val.selected);
        let likeData= this.state.data.filter((val)=>val.like);
         /*这段用组件生命周期替换了,因为在render里面不能更新props、state(such as: setState())
          if(likeData.length===0 && !this.state.listState){
              this.setState({listState:true});
          }*/
        return (<div id="musicApp">
                    <Header add={this.add.bind(this)}/>
                    <Main data={this.state.listState?this.state.data:likeData}
                          remove={this.remove}
                          isCheckAll = {this.isCheckAll()}
                          checkAll={this.setCheckAll}
                          setCheck={this.setCheck}
                          setLike={this.setLike}
                     />
                    <Footer
                        length={this.state.data.length}
                        lengthSelected={selectData.length}
                        lengthLike={likeData.length}
                        listState={this.state.listState}
                        removeSelect={this.removeSelect}
                        likeSelect={this.likeSelect}
                        cancelLikeSelect={this.cancelLikeSelect}
                        showLikeList={this.showLikeList}
                        />
                 </div>)
    }
}
ReactDOM.render (<App/>,document.getElementById( 'root' ));



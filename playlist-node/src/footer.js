/**
 * Created by Administrator on 2019/12/6.
 */
import React from "react";


export default class Footer extends React.Component {
    render () {
        let length=this.props.length;
        let lengthLike=this.props.lengthLike;
        let lengthSelected=this.props.lengthSelected;
        let listShow = this.props.listState;
        return (<footer>
            <div className="info">
                <span className="align-right" style={{display:lengthSelected===0? "none":"block"}}>当前选中{lengthSelected}首歌曲</span>
                <span className={length===0?"hide":""}>共{length}首歌曲</span>
            </div>
            <input type="button" value="删除选中歌曲" className={lengthSelected===0 ? "hide":""} onClick={()=>{this.props.removeSelect()}}/>
            <input type="button" value="收藏选中歌曲" className={lengthSelected===0 ? "hide":""} onClick={()=>{this.props.likeSelect()}}/>
            <input type="button" value="取消收藏选中歌曲" className={lengthSelected===0 ? "hide":""} onClick={()=>{this.props.cancelLikeSelect()}}/>
            <input type="button" value="查看收藏清单"  className={length&& lengthLike? "":"hide"} onClick={()=>{this.props.showLikeList(false)}} />
            <input type="button" value="查看所有清单" className={!listShow?"":"hide"} onClick={()=>{this.props.showLikeList(true)}}/>
        </footer>)
    }
}
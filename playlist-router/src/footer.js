/**
 * Created by Administrator on 2019/12/6.
 */
import React from "react";
import {Link} from "react-router-dom";
export default class Footer extends React.Component {
    render () {
        let length=this.props.length;
        let lengthSelected=this.props.selectLength;
        let pathname=this.props.pathname;
        //let lengthLike=this.props.lengthLike;
        console.log(pathname);
        return (<footer>
            <div className="info">
                <span className="align-right" style={{display:lengthSelected===0? "none":"block"}}>当前选中{lengthSelected}首歌曲</span>
                <span className={length===0?"hide":""}>共{length}首歌曲</span>
            </div>
            <input type="button" value="删除选中歌曲" className={lengthSelected===0 ? "hide":""}  onClick={()=>{this.props.removeSelect()}}/>
            <input type="button" value="收藏选中歌曲" className={lengthSelected===0 ? "hide":""}  onClick={()=>{this.props.likeSelect()}}/>
            <input type="button" value="取消收藏选中歌曲" className={lengthSelected===0 ? "hide":""}  onClick={()=>{this.props.cancelLikeSelect()}}/>
            {pathname==="/"? <Link to="/like"><input type="button"  value="显示收藏列表"/></Link>:""}
            {pathname==="/like" ? <Link to="/"><input type="button" value="显示所有清单"/></Link>:""}
        </footer>)
    }
}
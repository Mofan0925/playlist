/**
 * Created by Administrator on 2019/12/6.
 */
import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
class Footer extends React.Component {
    render () {
        console.log(this.props);
        let data=this.props.data;
        let length=data.length;
        let lengthSelected=data.filter((item)=>item.selected).length;
        let lengthLike = data.filter((item)=>item.like).length;
        let pathname=this.props.pathname;


        return (<footer>
            <div className="info">
                <span className="align-right" style={{display:lengthSelected===0? "none":"block"}}>当前选中{lengthSelected}首歌曲</span>
                <span className={length===0?"hide":""}>共{length}首歌曲</span>
            </div>
            <input type="button" value="删除选中歌曲" className={lengthSelected===0 ? "hide":""}  onClick={()=>{this.props.dispatch({type:'REMOVESELECT'})}}/>
            <input type="button" value="收藏选中歌曲" className={lengthSelected===0 ? "hide":""}
                   onClick={()=>{
                           this.props.dispatch({
                                type:'LIKE_SELECTED',
                           })
                           }}/>
            <input type="button" value="取消收藏选中歌曲" className={lengthSelected!==0 && lengthLike > 0 ? "":"hide"}
                   onClick={()=>{this.props.dispatch({
                          type:'CANCLE_LIKE_SELECTED',
                   })}}/>
            {(pathname === "/" && lengthLike > 0)? <Link to="/like"><input type="button"  value="显示收藏列表"/></Link>:""}
            {pathname==="/like" ? <Link to="/"><input type="button" value="显示所有清单"/></Link>:""}
        </footer>)
    }
}

export default connect((state)=>state)(Footer);
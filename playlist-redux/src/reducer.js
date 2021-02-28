import {combineReducers} from "redux";


let data = (data=[], action={})=>{
    switch (action.type) {
        case "ADD":
            return [ ...data, {
                id : Date.now () ,
                title : action.title ,
                singer : action.singer ,
                selected : false ,
                like : false
            } ]
        case "REMOVE":
            return data.filter ( ( item )=> item.id !== action.id );
        case "CHECK_ALL":
            return data.map((item)=>{
                item.selected = action.check;
                return Object.assign({},item);
            })
        case "CHECK":
            return data.map((item)=>{
                  if(item.id===action.id){
                     item.selected=action.checked;
                     return Object.assign({},item);
                  }
                 return item;
            })
        case "LIKE":
            return data.map((item)=>{
                if(item.id===action.id){
                    item.like = action.checked;
                    return Object.assign({},item);
                }
                return item;
            })
        case "REMOVESELECT":
            return data.filter((val)=>!val.selected);
        case "LIKE_SELECTED":
            return data.map((item)=>{
                if(item.selected){
                   item.like=true;
                }
                return Object.assign({},item);
            })
        case "CANCLE_LIKE_SELECTED":
            return data.map((item)=>{
                if(item.selected){
                    item.like=false;
                }
                return Object.assign({},item);
            })

        default:
            return data;
    }
}
let reducer= combineReducers({data});

export default reducer;
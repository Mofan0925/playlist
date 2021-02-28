import {combineReducers} from "redux";
import {createStore} from 'redux';

/*reducer是一个回调函数，包含两个对象参数，state和action*/
let data = ( data = [], action )=>{
    switch (action.type) {
        case "ADD":
            return [ ...data , {
                id : Date.now () ,
                title : action.title ,
                singer : action.singer ,
                selected : false ,
                like : false
            } ]
        case "REMOVE":
            return data.filter ( ( item )=> item.id !== action.id );

        default:
            return data;
    }
}

const counterReducer = (state = 0, action) => {
    switch (action.type) {
    case 'ADD':
    return state + 1
    case 'MINUS':
    return state - 1
    default:
    return state
    }
 }

/*合并两个reducer*/
let reducer= combineReducers({data,counterReducer});

/*创建一个store*/
let store=createStore(reducer);



export default store;
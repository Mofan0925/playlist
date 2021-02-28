import React from 'react';
import store from './store';
export default class ReduxPage extends React.Component {
    constructor () {
        super ( ...arguments );
        console.log('construstor of this:',this);
         this.state= {
            counter: store.getState().counterReducer
        }
        this.pp='pp';
        this.minus=this.minus.bind(this);
    }    
   add=()=>{
     store.dispatch({ type: "ADD" });
      console.log('箭头函数的this:',this);
      /*第二种方法 setState触发重新渲染页面  this.setState({
         counter: store.getState().counterReducer
       })*/
   }
   minus(){
      store.dispatch({ type: "MINUS" }); 
      console.log('原型函数的this:',this);
     /*第二种方法 setState触发重新渲染页面 
      // this.setState({
         counter: store.getState().counterReducer
      })*/
   }
   say(){
      console.log('pp',this.pp);
      return this.pp;
   }
 
     componentDidMount(){
      store.subscribe(() => {
           this.forceUpdate();  //强制刷新
        });
   }
   render(){
       return (
        <div>
          <h3>ReduxPage</h3>
          <p>当前计数器数是：<b style={{color:'red'}}>{store.getState().counterReducer}</b></p>
          <div className='counter'>
             <button onClick={this.add}>add</button>
             <button onClick={this.minus}>minus</button>
          </div>
        </div>
       )
   }
}

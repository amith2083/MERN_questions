import React, { useReducer } from 'react'
const initialState ={
    count:0
}

const Counter2 = () => {
    const Reducer =(state,action)=>{
        switch(action.type){
            case'increment':
            return  state.count < 10 ? { count: state.count + 1 } : state;
            case'decrement':
            return {count:state.count-1};
            default:
                throw new Error('unknown action')
        }
    }
    


    const[state,dispatch]= useReducer(Reducer,initialState)
  return (
    <div>
        <h1>count is {state.count}</h1>
        <button onClick={()=>dispatch({type:'increment'})} disabled={state.count===10} > start+</button>
        <button onClick={()=>dispatch({type:'decrement'})}>start-</button>
      
    </div>
  )
}

export default Counter2

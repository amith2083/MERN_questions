import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/Slice';

const State = () => {
 
    const dispatch = useDispatch();
    const {value} = useSelector((state)=>state?.counter)
    const handleIncrease =()=>{
     dispatch(increment())
    }
      const handleDecrease =()=>{
          dispatch(decrement())
    }
      const resetValue =()=>{
          dispatch(reset())
    }
  
    
       return (
    <div>
        <h1>count is {value}</h1>
        <button className=' border-2 border-gray-300 p-2' onClick={handleIncrease}>increase</button>
        <button className=' border-2 border-gray-300 p-2' onClick={resetValue}>reset</button>
        <button className=' border-2 border-gray-300 p-2' onClick={handleDecrease}>decrease</button>
      

  
    </div>
  )
}

export default State

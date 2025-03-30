import React, { useState } from 'react'
//higher order component
const UpdatedComponent = (WrappedComponent)=>{
    return()=>{
        const[count,setCount]=useState(0)
        const increment =()=>{
            setCount(count+1)
        }
        return <WrappedComponent count={count} increment={increment}/>
    }
}

export default UpdatedComponent

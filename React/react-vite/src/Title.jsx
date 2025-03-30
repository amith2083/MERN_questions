import React from 'react'

import UpdatedComponent from './Hoc'

const Title = ({count,increment}) => {
  return (
    <div>
        <h1>count is {count}</h1>
        <button onClick={increment}>+</button>
      
    </div>
  )
}

export const NewTitle=  UpdatedComponent(Title)

import React from 'react'
import { useState } from 'react'

const PureFun = () => {
    const [data,setData]=useState(0);
    function Change(){
        setData(data+1)
    }
  return (
    <div className='byPure'>
        <h1>Pure Component</h1>
        <p>When A component always rendor same output for same props are pure component</p>
        <h1>
        {data}
        </h1>     
   <button onMouseOver={Change}>Hover Me</button>

    </div>
  )
}

export default PureFun
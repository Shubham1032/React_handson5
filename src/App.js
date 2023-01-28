import React from 'react'
import CounterClick from './Component/CounterClick'
import PureFun from './Component/PureFun'
import './App.css'
const App = () => {
  return (
    <div style={{backgroundColor:'gray',height:'100vh'}}>
      <h2>Increase Counter Function by Pure component and Higher Order Component</h2>
    <div className='Parent'>
      <div className='byhoc'>
<CounterClick/>
</div>
<div className='byPure'>
  <PureFun/>
</div>

    </div></div>
  )
}

export default App
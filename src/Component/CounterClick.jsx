import React from 'react'
import HocComponent from './Hoc';
import '../App.css'
function CountClick(props) {
    const {Counter,UpdateCounter} = props;
  return (
    <div className='byHoc'>
        <h2>Hoc component</h2>
      <p>A higher-order component is a function that takes a component and returns a new component.

</p>
    <h1>{Counter}</h1>
    <button onClick={UpdateCounter} onMouseOver={UpdateCounter}>Click</button>
     
    </div>
  )
}

export default HocComponent(CountClick)
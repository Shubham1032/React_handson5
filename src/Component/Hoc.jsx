import React,{useState} from 'react'

const HocComponent=(WrappedComponent)=>{

function HocComponent() {
    
    const [Counter,setCounter]=useState(0);
    const UpdateCounter=()=>{
        setCounter(Counter+1)
    }
  return (
    <div>
        <WrappedComponent Counter={Counter} UpdateCounter={UpdateCounter}/>
    </div>
  )
}
return HocComponent;
}

export default HocComponent
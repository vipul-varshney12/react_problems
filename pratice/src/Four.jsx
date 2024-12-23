import React from 'react'

const Four = () => {
    const  items=['item1','Item2','Item3','Item4'];

  return (
   <ul>
    {items.map((item,index)=>{
        return <li key={index}>{item}</li>
        
    })}
   </ul>
  )
}

export default Four
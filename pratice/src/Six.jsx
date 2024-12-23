import React, { useEffect, useState } from 'react'

const Six = () => {
const [data,setData]=useState(null);

    useEffect(()=>{


        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response)=> response.json())
        .then((json)=> setData(json))
    },[])
  return (
    <div>
        {
            data?(
                <div>
                <h1> title:{data.title}</h1>
                </div>
            ):(
                <p>
                    Loading...
                </p>
            )
        }
    </div>
  )
}

export default Six
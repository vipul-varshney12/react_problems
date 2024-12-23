import React, { useState } from 'react'

const Five = () => {
    const  [isToggled,setIsToggled]=useState(false);
    const  handleToggle=()=>{
        setIsToggled(!isToggled);
    }

  return (
    <div>
        <label>
            <input type='checkbox' onChange={handleToggle}/>

        </label>
        <p>{isToggled ? "on":"off"}</p>
    </div>
  )
}

export default Five
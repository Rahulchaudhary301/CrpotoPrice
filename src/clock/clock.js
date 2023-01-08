import React, { useState } from "react";
import './clock.css'

const Clock = ()=>{
      const x=new Date().toLocaleTimeString()
      const D=new Date().toDateString()
    
    const [time, update] = useState(x)

       
        
       const up = ()=>{
            const d= new Date().toLocaleTimeString()
            update(d);
       }
       setInterval(up,1000)

    return(

        <>
            <h1 className="time">{time} &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <h > <a href="/"> RAHUL CHAUDHARY </a> </h>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {D}</h1>
            
        </>
    )
}

export default Clock
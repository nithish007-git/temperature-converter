import React, { useState } from 'react';
import './Temp.css'

const Temp = () => {
    const [temp,setTemp]=useState(15);
    const [colour,setcolor]=useState("cold");
    const increase =()=>{
        if(temp>=30) 
        {return;}
        if(temp>=15){
            setcolor('hot');
        }
        setTemp(temp+1);
    }
    const decrease =()=>{
        if(temp<=10) 
        {return;}
        setTemp(temp-1);
        if(temp<=15){
            setcolor('cold');
        }
    }

  return (
    <div className='outer-Box'>
        <div className={`temp-conter-${colour}`}>
            
        </div>
            <h3 className='Text-temp'>{temp}°C</h3>
        <button className='Increase' onClick={increase}> + </button>
        <button className='Decrease' onClick={decrease}> - </button>

        </div>
  )
}

export default Temp
import React, { useState } from 'react'
import { Button, Typography} from '@mui/material'
const Counter = () => {
    var [count,setCount] = useState(0);
    const incBtn = () =>  setCount(++count);
    const decBtn = () => {
        if(count>0){
            setCount(--count);
        }
    } 
  return (
    <div>
        <Typography variant='h3'>Counter Value: {count}</Typography>
        <Button variant='contained' color='success' onClick={incBtn}>+</Button>
        <Button variant='contained' color='error' onClick={decBtn}>-</Button>
    </div>
  )
}

export default Counter
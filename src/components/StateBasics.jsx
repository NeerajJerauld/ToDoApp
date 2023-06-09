import React, { useEffect, useState } from 'react'
import { TextField, Button, Typography } from '@mui/material'

const StateBasics = () => {
    let [fName,setFName] = useState()
    let [val,setValue] = useState()
    let [arr,setArr] = useState([])
    const changeName = () => {
        setFName (val);
    }
    const inputHandler = (e) =>{
        setValue(e.target.value)
    }
  return (
    <div style={{paddingTop: "40px"}}>
        <Typography variant='h3'>Welcome to {fName}</Typography>
        <br />
        <TextField label='Enter name here' variant='outlined' onChange={inputHandler}/>
        <br /><br />

    <Button variant='contained' color='error' onClick={changeName}>Change</Button>&nbsp;

    
</div>
  )
}

export default StateBasics
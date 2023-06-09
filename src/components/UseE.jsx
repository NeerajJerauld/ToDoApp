import React, { useEffect, useState } from 'react'
import { Button, Typography } from '@mui/material'
const UseE = () => {
    let [pageName,setPageName] = useState();
   const homeBtn = () => {
        setPageName ("Home")

    }
    const gallaryBtn = () => {
        setPageName ("Gallary")

    }
    const contactBtn = () => {
        setPageName ("Contact")

    }
    useEffect(()=>{homeBtn()},[])
  return (
    <div style={{paddingTop: "40px"}}>
        <Button variant='contained' color='primary' onClick={homeBtn}>Home</Button>&nbsp;
        <Button variant='contained' color='secondary' onClick={gallaryBtn}>Gallary</Button>&nbsp;
        <Button variant='contained' color='error' onClick={contactBtn}>Contact</Button>&nbsp;
        <Typography variant='h3'>Welcome to {pageName}</Typography>
    </div>
  )
}

export default UseE
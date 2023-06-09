import { Button, Card, CardActions, CardContent, Grid, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import ItemCard from './Card';
const ToDo = () => {
  let [value,setValue] = useState();
  let [arr,setArr] = useState([])

 

  
  // const isValidNumber = (value) => {
  //   return !isNaN(value) && value.trim() !== '';
  // };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const field1 = event.target.field1.value;
    const field2 = event.target.field2.value;
    const field3 = event.target.field3.value;
    // if (!isValidNumber(field2)) {
    //   alert('Please enter a valid number for Quantity.');
    //   return;
    // }
    const newObject = {
      field1,field2,field3,
    }
    setArr([...arr,newObject]);
    event.target.reset();
  }


  const handleEmptyArray = () => {
    setArr([]);
  };

  return (
    <div>
      <br /><br />
      <Typography variant="h3" component="h2">ToDo
</Typography>;
      <br />
      
      
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      
      <form  onSubmit={handleFormSubmit}>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item>
        <TextField name="field1" label="Item Name" />
        </Grid>
        <Grid item>
        <TextField name="field2" label="Quantity (numbers only)" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
        </Grid>
        <Grid item>
        <TextField name="field3" label="Description" />
        </Grid>
        <Grid item>
        <Button type="submit" variant="contained" color="primary">Add</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={handleEmptyArray}>Reset</Button>
        </Grid>
      </Grid>
      </form>
      
    </div>  
    <br /><br /><br />
    {/* <div style={{marginleft:'20px',backgroundcolor:'red'}}>
    <Table style={{backgroundcolor:'red'}}>
        <TableHead>
          <TableRow>
            <TableCell>Item Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((obj, index) => (
            <TableRow key={index}>
              <TableCell>{obj.field1}</TableCell>
              <TableCell>{obj.field2}</TableCell>
              <TableCell>{obj.field3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div> */}
    

    {arr.map((ob, index) => (
      <ItemCard itemName={ob.field1} quantity={ob.field2} description={ob.field3} />
          ))}
     
      {/* <ul> {arr.map((obj, index) => (
        <li key={index}>
        item: {obj.field1},quantity: {obj.field2}, desc: {obj.field3}</li>))}
      </ul> */}
    </div>
    
  )
}

export default ToDo;


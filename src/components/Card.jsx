import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const ItemCard = ({ itemName, quantity, description }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}} >
    <Card  sx={{ maxWidth: 345 }} spacing={2} style={{margin: '10px',flex: '0 0 45%', backgroundColor: '#87CEFA' }}>
      <CardContent>
        <Grid container spacing={2}>
          {/* First Row */}
      
          <Grid item xs={6}>
            <Typography variant="body1" style={{color: 'white', fontSize: 20, alignContent: 'baseline'}}>{itemName}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" style={{color:'white'}}>Qty: <span style={{color:'red'}}>{quantity}</span></Typography>
          </Grid>
          

          {/* Second Row */}
        
          <Grid item xs={12}>
          <hr></hr>
          <Typography variant="body2" style={{color: 'white', fontSize: 20}}>Description</Typography>
          <hr></hr>
            <Typography variant="body2" style={{color:'navy'}}>{description}</Typography>
          </Grid>
          
        </Grid>
      </CardContent>
    </Card>
    </div>
  );
};

export default ItemCard;
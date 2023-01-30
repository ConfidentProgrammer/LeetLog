import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './Card.css';
function CardBasic({title, link, type, toughness}) {
  // const theme = createTheme({
  //   typography: {
  //     fontFamily: [
  //       '-apple-system',
  //       'BlinkMacSystemFont',
  //       '"Segoe UI"',
  //       'Roboto',
  //       '"Helvetica Neue"',
  //       'Arial',
  //       'sans-serif',
  //       '"Apple Color Emoji"',
  //       '"Segoe UI Emoji"',
  //       '"Segoe UI Symbol"',
  //     ].join(','),
  //   },
  // });
  

  return (
    <div className='card-container'>
    <Card sx={{ maxWidth: 380, minWidth:380, minHeight:250, maxHeight:300}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {type}
        </Typography>
        <Typography variant="h4" component="div" sx={{fontFamily: "Roboto" }}>
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {toughness}
        </Typography>
        {/* <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small"><a target="_blank" href={link}>Learn More</a></Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default CardBasic
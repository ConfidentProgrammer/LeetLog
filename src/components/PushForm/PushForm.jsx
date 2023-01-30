import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useDispatch } from "react-redux"
import { isPushed } from '../../Redux/Actions/pushedAction';
import axios from 'axios';
function PushForm() {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [tough, setTough] = useState("");
  const [pattern, setPattern] = useState("");
  const [sol, setSol] = useState("");
  const [obj, setObj] = useState({});
  const [success, setSuccess] = useState('');
  const [loaded, setLoaded] = useState('idle');
  const handleTitle = (e) => {
    setTitle(e.target.value);
    //console.log(title);
  }
  const handleUrl = (e) => {
    setUrl(e.target.value);
   // console.log(title);
  }
  const handleTough = (e) => {
    setTough(e.target.value);
   // console.log(title);
  }
  const handlePattern = (e) => {
    setPattern(e.target.value);
   // console.log(title);
  }
  const handleSol = (e) => {
    setSol(e.target.value);
    //console.log(title);
  }

  const sendObject = (e) => {
      e.preventDefault();


    const question = {
      title: title,
      link: url,
      solution:sol,
      toughness:tough,
      type:pattern
    }


    console.log(question);

   // sending to the api
    axios.post('https://question-tracker.azurewebsites.net/api/question', [question])
    .then(function (response) {

      console.log(response);

      if(response.status === 200) {
        setSuccess('success');
        dispatch(isPushed());
      }else if(response.status != 200) {
        setSuccess('error');
      }
    })
    .catch(function (error) {
      console.log(error);
      setSuccess('error');
    });
      setTitle('')
      setSol('');
      setTough('')
      setUrl('')
      setPattern('')


  }
  return (
    <>
    <div style={{ width:'30%', margin:'0 auto', display:'flex', justifyContent:'center'}}> { success==='success' ? <Alert sx={{margin:2}} severity="success">This is a success alert — check it out!</Alert> : ""} </div>
    <div style={{ width:'30%', margin:'0 auto', display:'flex', justifyContent:'center'}}> { success==='error' ? <Alert sx={{margin:2}} severity="error">Something went wrong!</Alert> : ""} </div>
    <form>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '20ch' },
        width: '25ch',
        margin:'0 auto',
        borderRadius:'20px',
        padding:'20px',
       border:'3px solid #096fd5'}}
      noValidate
      autoComplete="off"
    >

      <TextField required
      sx={{ input: { color: 'white', background:'hsl(228, 28%, 20%)', } }} 
      InputLabelProps={{
        style: { color: 'hsl(228, 34%, 66%)' },
      }} 
      id="outlined-basic" 
      label="Title" 
      variant="outlined" value={title} onChange={handleTitle}/>

<TextField required
      sx={{ input: { color: 'white', background:'hsl(228, 28%, 20%)' } }} 
      InputLabelProps={{
        style: { color: 'hsl(228, 34%, 66%)' },
      }} 
      id="outlined-basic" 
      label="URL" 
      variant="outlined" 
      onChange={handleUrl} value={url}/>

<TextField required
      sx={{ input: { color: 'white', background:'hsl(228, 28%, 20%)' } }} 
      InputLabelProps={{
        style: { color: 'hsl(228, 34%, 66%)' },
      }} 
      id="outlined-basic" 
      label="Toughness" 
      variant="outlined" 
      onChange={handleTough} value={tough}/>

<TextField 
      sx={{ input: { color: 'white', background:'hsl(228, 28%, 20%)' } }} 
      InputLabelProps={{
        style: { color: 'hsl(228, 34%, 66%)' },
      }} 
      id="outlined-basic" 
      label="Pattern" 
      variant="outlined"
      onChange={handlePattern} value={pattern} required />

<TextField required
      sx={{ input: { color: 'white', background:'hsl(228, 28%, 20%)' } }} 
      InputLabelProps={{
        style: { color: 'hsl(228, 34%, 66%)' },
      }} 
      id="outlined-basic" 
      label="Solution" 
      variant="outlined" 
      onChange={handleSol} value={sol}/>

<Button type='submit' variant="contained" color="success" onClick={sendObject}>Post</Button>

    </Box>
    </form>
    </>
  )
}

export default PushForm
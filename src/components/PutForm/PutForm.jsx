import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { isPushed } from '../../Redux/Actions/pushedAction';
import { deleteStatus } from '../../Redux/Actions/pushedAction';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { useDispatch } from 'react-redux';
function PutForm({id, link, sol, title}) {
    const dispatch = useDispatch()
    const [solution, setSolution] = useState(sol);
    const [t, setT] = useState(title);
    const [url, setUrl] = useState(link);
    const [loaded, setLoaded] = useState('idle');
    
  
    const handleTitle = (e) => {
        setT(e.target.value);
    }
    const handleLink = (e) => {
        setUrl(e.target.value);
    }
    const handleSol = (e) => {
        setSolution(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoaded('loading')
        console.log(id)
        const res = await axios.put(`https://question-tracker.azurewebsites.net/api/question/${id}`, `title=${t}&link=${url}&solution=${solution}`)
        .then(res=> {
            if(res.status == 200) {
                console.log('updated Success')
                setLoaded('stop');
                dispatch(deleteStatus());
            }
        })
        .catch(error => {
             alert('error while updating');
             console.error('There was an error!', error);
         });
    }
  return (
    <>
    <div>
        <form>
    <TextField required
      sx={{ input: { color: 'white', background:'hsl(228, 28%, 20%)' }, marginTop:'2rem' }} 
      InputLabelProps={{
        style: { color: 'hsl(228, 34%, 66%)' },
      }} 
      id="outlined-basic" 
      label="Title" 
      variant="outlined" 
      onChange={handleTitle} value={t} fullWidth />
<br />
<TextField 
      sx={{ input: { color: 'white', background:'hsl(228, 28%, 20%)' } , marginTop:'2rem'}} 
      InputLabelProps={{
        style: { color: 'hsl(228, 34%, 66%)' },
      }} 
      id="outlined-basic" 
      label="url" 
      variant="outlined"
      onChange={handleLink} required value={url} fullWidth  />
<br />
<TextField required
      sx={{ input: { color: 'white', background:'hsl(228, 28%, 20%)' }, marginTop:'2rem' }} 
      InputLabelProps={{
        style: { color: 'hsl(228, 34%, 66%)' },
      }} 
      inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
      
      id="outlined-basic" 
      label="Solution" 
      variant="outlined" 
      onChange={handleSol} value={solution} fullWidth multiline  />
<br />
<Button sx={{marginTop:'1rem'}} type='submit' variant="contained" color="success" onClick={handleSubmit}>Update</Button>
    </form>
    {loaded === 'loading' ? <CircularProgress color="success" /> : ""}
    </div>
    </>
  )
}

export default PutForm
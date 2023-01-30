import React, { useState } from 'react'
import './SocialCard.css'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import { stepClasses } from '@mui/material';
import { deleteStatus } from '../../Redux/Actions/pushedAction';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import PutForm from '../PutForm/PutForm';
function SocialCard({icon, title, color, type , dark, toughness, link , id, sol}) {
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState('idle');
    const [showAnswer, setShowAnswer] = useState(false);
    const [edit, setEdit] = useState(false);
    const [t, setT] = useState(title);
 const [dark2, setDark2] = useState(dark)
 
    const userStyleDark = {
        color: 'hsl(228, 34%, 66%)'
    }
    const userStylelight = {
        color:"hsl(228, 12%, 44%)",
        fontWeight:"700"
    }
    const yearStyleDark = {
        color: 'white'
    }
    const yearStyleLight = {
        color :"hsl(230, 17%, 14%)"
    }
    const followStyleMedium = {
        color: '#ffa116'
    }
    const followStyleEasy = {
        color: '#caedcc'
    }
    const green = {
        color:"hsl(163, 72%, 41%)",
        fontWeight:"700"
    }
    const red = {
        color: 'hsl(356, 69%, 56%)',
        fontWeight:"700"
    }
    const backDark = {
        backgroundColor:"hsl(228, 28%, 20%)"
    }
    const backLight = {
        backgroundColor:"hsl(227, 47%, 96%)"
    }
    const handleTitleChange = (e) => {
        setT(e.target.value)
        console.log(e.target.value);
    }
    const  deleteCard =  () => {
        setLoaded('loading');
        console.log(id)
        // console.log(ids)
        const response = axios.delete(`https://question-tracker.azurewebsites.net/api/question/${id}`)
        .then(res => {
            console.log(res)
            if(res.status == 200) {
                console.log('success deleted')
                setLoaded('stop');
                dispatch(deleteStatus());
            }
        })
        .catch(error => {
           alert('error while deleting the card');
            console.error('There was an error!', error);
        });
    }
  return (
    <>
    <div className='card-container' style={dark ? backDark : backLight} >
         
         {/* <span className='side' style={{background:color}}></span> */}
         {loaded === 'loading' ? <CircularProgress color="success" /> : ""}
        <div className='title-tough-container'>
        <p className="year title-text" style={dark ? yearStyleDark : yearStyleLight} onClick={() => {setShowAnswer(!showAnswer)
        setEdit(!edit)}}>
            {/* <input style={{width:`${title.length}ch`}} onChange={handleTitleChange}
        className='year title-text input-title' type='text' value={id+t}></input>{id+t} */}
        {title} 
        </p>
        <p className="toughness" style={toughness === 'Medium' ? followStyleMedium : followStyleEasy}>{toughness}</p>
        <p className="tag">{type}</p> <br /><br />
{ showAnswer ? <span className="answer">
{sol}
</span> : ""}

 {edit ? <PutForm link={link} sol={sol}  title={title} id={id}/> : ""}
        </div>
        <div className="button-div">
        <a target="_blank" className='link' href={link}> <Button variant="contained"  color="success">Learn More</Button></a>
       <IconButton aria-label="delete" onClick={deleteCard} >
       <DeleteIcon sx={{ color: '#dc3545' }} />
     </IconButton>

    
        </div>
        
    </div>
  
    </>
  )
}

export default SocialCard
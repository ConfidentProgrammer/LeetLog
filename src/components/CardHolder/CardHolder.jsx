import React, { useState } from 'react'
import CardBasic from '../Card/Card'
import axios from 'axios';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { getData } from '../../Redux/Actions/getQuestionsAction';
import SocialCard from '../CardFinal/SocialCard';
import PushForm from '../PushForm/PushForm';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { isPushed } from '../../Redux/Actions/pushedAction';
import { BoxLoading } from 'react-loading';

function CardHolder() {
    const dispatch = useDispatch();
    //getting all the cards from the api
    
    const [loaded, setLoaded] = useState(false);
    let pushedStatus = useSelector(state => state.isPushed)
    let deleteStatis = useSelector(state => state.deleteCard)
    let questionsFromRedux = useSelector(state => state.getQuestions)
    let filteredQuestionsfromRedux = useSelector(state => state.GetFiltersReducer)
    const[filteredQuestions, setFilteredQuestion] = useState(useSelector(state => state.GetFiltersReducer));
    const [question, setQuestions] = useState(questionsFromRedux);


    useEffect(()=> {
        axios.get(`https://question-tracker.azurewebsites.net/api/question`)
        .then(res =>{
            const questions = res.data;
            //console.log(questions)
            setQuestions(questions)
            dispatch(getData(questions));
            setLoaded(true);
        })
    },[pushedStatus, deleteStatis])
    
    useEffect(()=> {
     if(loaded) {
      let filteredData = [];

      if(filteredQuestionsfromRedux.includes('Easy') || filteredQuestionsfromRedux.includes('Medium') || filteredQuestionsfromRedux.includes('Basic') ) {
        questionsFromRedux.map(allQ => {
          filteredQuestionsfromRedux.map(filteredQ => {
              if((allQ.type === filteredQ)) {
                if(filteredQuestionsfromRedux.includes(allQ.toughness)) {
                  filteredData.push(allQ)
                }
              }
          }) 
  
        })
      }else {
        questionsFromRedux.map(allQ => {
          filteredQuestionsfromRedux.map(filteredQ => {
              if((allQ.type === filteredQ)) {

                  filteredData.push(allQ)
                
              }
          }) 
  
        })
      }
    //  console.log(filteredData)
      if(filteredData.length !== 0) {
        setQuestions(filteredData)
      }else {
        setQuestions(questionsFromRedux)
      }
     }
        
    },[filteredQuestionsfromRedux])

  return (
    <>


        { loaded ?
            question.map(q=>(
                // <CardBasic type={q.type} title={q.title} link={q.link} toughness={q.toughness} />
                <SocialCard icon="./images/geek.png" background={'hsl(228, 28%, 20%)'} color="#27d350" dark={true} type={q.type} title={q.title} link={q.link} toughness={q.toughness} id={q.id}  sol={q.solution} />
            ))
         : <>    <div className="loading-container">
         Using Free Azure Server Please wait...  <CircularProgress color="success" />
         </div></>}

          
    </>
  )
}

export default CardHolder
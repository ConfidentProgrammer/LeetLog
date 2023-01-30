import React, { useState, useEffect } from 'react'
import './FilterCard.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteStatus } from '../../Redux/Actions/pushedAction';
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Tag from './Tag';
function FilterCard({dark}) {
    const dispatch = useDispatch();
    const backDark = {
        backgroundColor:"hsl(228, 28%, 20%)"
    }
    const backLight = {
        backgroundColor:"hsl(227, 47%, 96%)"
    }
    const followStyleMedium = {
        color: '#ffa116'
    }
    const followStyleEasy = {
        color: '#caedcc'
    }
    const followStylehard = {
        color: '#ff375f'
    }
    let questionsFromRedux = useSelector(state => state.getQuestions)
   
    const set = new Set();
    const set1 = new Set();
    let easy = 0;
    let med = 0;
    let hard = 0;

    let pieData = [{}];
  return (
    <>
    {questionsFromRedux.map(q=> {
        set.add(q.type)
        set1.add(q.toughness)

        if(q.toughness === 'Easy' || q.toughness === 'Basic') {
            easy++;
        }
        if(q.toughness === 'Medium') {
            med++;
        }
        if(q.toughness === 'Hard') {
            hard++;
        }

    })
    
    }{
        console.log(pieData)
    }
    <div className='filter-card-container card-container' style={dark ? backDark : backLight}>
    {Array.from(set).map(q=> <Tag text={q} />)}
    </div>
    <div className='filter-card-container card-container' style={dark ? backDark : backLight}>
    {Array.from(set1).map(q=> <Tag text={q} />)}
    </div>


    <div className='filter-card-container card-container track-container' style={dark ? backDark : backLight}>
        <div className="toughness-container"> <p className="toughness1" style={followStyleEasy}>Easy</p>
    <p className="toughness1 m-2" style={followStyleMedium}>Medium</p>
    <p className="toughness1 m-2" style={followStylehard}>Hard</p></div>
        <div className="metric">
       <p className="toughness1" style={followStyleEasy}>{easy}</p>
    <p className="toughness1 m-2" style={followStyleMedium}>{med}</p>
    <p className="toughness1 m-2" style={followStylehard}>{hard}</p>
        </div>

    </div>
    </>
  )
}

export default FilterCard
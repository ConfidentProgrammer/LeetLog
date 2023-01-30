import './App.css';
import CardBasic from './components/Card/Card';
import CardHolder from './components/CardHolder/CardHolder';
import Button from '@mui/material/Button';
import PushForm from './components/PushForm/PushForm';
import { useDebugValue, useState } from 'react';
import FilterCard from './components/FilterComponent/FilterCard';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const [showForm, setShowForm] = useState(false);
  const [btnText, setBtnText ] = useState('Post Question')
  let questionsFromRedux = useSelector(state => state.getQuestions)
  return (
    <div className="App">
      <h1 className='title'>LeetLog
      <div>
    <Button variant="contained" color="success" onClick={() => setShowForm(!showForm)}>{showForm ? "Close" : "Post Question"}</Button>
    </div> { showForm ? <PushForm /> : ""}</h1>
   
      <header className="App-header">
        
      <div className='cardholder-container'>
        <div className="filter-card-indi">
          {
            questionsFromRedux.length > 0 ? <FilterCard dark={true} /> : ""
          }
      
      </div>
      <div className='cardholder-indi-container'>
      <CardHolder />
      </div>
      </div>
      </header>
    </div>
  );
}

export default App;

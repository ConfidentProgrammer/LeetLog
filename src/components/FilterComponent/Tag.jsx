import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getTag, deleteTag} from '../../Redux/Actions/getQuestionsAction';
function Tag({text}) {
    const dispatch = useDispatch();
    const [on, setOn] = useState(false);
    const onStyle={
        background: '#2e7d32' ,
        color: '#caedcc'
    }
    const handleFilter = (e) => {
     //   console.log(e.target.innerText);
        setOn(!on);
        if(on === true) {
            dispatch(deleteTag(e.target.innerText))
        }else {
            dispatch(getTag(e.target.innerText))
        }
      
    }
  return (
    <div>
 
    <p style={on ? onStyle : {}}  className="tag filter-tag" onClick={handleFilter}>{text}</p> 

    </div>
  )
}

export default Tag
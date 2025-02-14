import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
 const [isValid,setIsValid]=useState(true)
  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };
  
  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false)
      return ;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color:!isValid ? 'red':'black'}} >Course Goal</label>
        <input style={{borderColor:!isValid?'red':'black',backgroundColor:!isValid?'red':'white'}} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button style={{color:!isValid?'red':'purple'}} type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

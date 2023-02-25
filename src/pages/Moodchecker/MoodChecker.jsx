import React from 'react';
import { Link } from 'react-router-dom';
import './MoodChecker.css';

function MoodChecker() {
  const handleHappyClick = () => {
    console.log("You are feeling happy!");
  };

  const handleNeutralClick = () => {
    console.log("You are feeling neutral.");
  };

  const handleSadClick = () => {
    console.log("You are feeling sad.");
  };

  return (
    <div className="mood-checker">
    <center> 
      <h1 className='hmain'>How are you feeling today?</h1>
      <Link to="/happy">
      <button className='btn' onClick={handleHappyClick}>Happy</button>
      </Link>
      <Link to="/neutral">
      <button className='btn' onClick={handleNeutralClick}>Neutral</button>
      </Link>
      <Link to="/sad">
      <button className='btn' onClick={handleSadClick}>Sad</button>
      </Link>
    </center>
    </div>
  );
}

export default MoodChecker;

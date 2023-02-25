import React from 'react';
import { Link } from 'react-router-dom';
import './LevelUp.css';

function Explore() {
  return (
    <div>
      <div className="hero1">
        <h1 className='headertxt'>Dare to challenge your mind and see what you're capable of</h1>
      </div>
        <Link to="/moodchecker">
           <div className="a1">
            <center><button className="btn">Take a deep breath and ask yourself, 'how am I feeling right now?</button></center>
            </div>
           </Link>
      </div>
  );
}

export default Explore;

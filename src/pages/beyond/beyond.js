import React from 'react';
import { Link } from 'react-router-dom';
import './Beyond.css';

function Explore() {
  return (
    // <div>
    //   <div className="hero">
    //     <h1 className='headertxt'></h1>
    //   </div>
      <div className='main'>
      <div className="main-content">
        <h2>Daily Challenges</h2>
        <p></p>
        <Link to="/levelup">
            <button className="btn">Explore</button>
           </Link>
      </div>
      <div className="main-content">
        <h2 className='h2main'>Day Planner</h2>
        <p></p>
        <Link to="/levelup">
            <button className="btn">Explore</button>
           </Link>
      </div>
    </div>
  );
}

export default Explore;

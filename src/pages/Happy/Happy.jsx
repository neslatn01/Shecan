import React from 'react';
import { Link } from 'react-router-dom';
import './Happy.css';

function Explore() {
  return (
    // <div>
    //   <div className="hero">
    //     <h1 className='headertxt'></h1>
    //   </div>
      <div className='main'>
      <div className="main-content">
        <h2>Daily Challenges</h2>
        <p>Power up your mind and unlock your potential!</p>
        <Link to="/levelup">
            <button className="btn">Explore</button>
           </Link>
      </div>
      <div className="main-content">
        <h2 className='h2main'>Day Planner</h2>
        <p>Give every day the chance to become the most beautiful day of your life.</p>
        <Link to="/levelup">
            <button className="btn">Explore</button>
           </Link>
      </div>
    </div>
  );
}

export default Explore;

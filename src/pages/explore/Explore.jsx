import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';

function Explore() {
  return (
    <div>
      <div className="hero">
        <h1 className='headertxt'>If you want to change the world, start by changing YOURSELF</h1>
      </div>
      <div className='main'>
      <div className="main-content">
        <h2>Level UP</h2>
        <p>Power up your mind and unlock your potential!</p>
        <Link to="/levelup">
            <button className="btn">Explore</button>
           </Link>
      </div>
      <div className="main-content">
        <h2 className='h2main'>Beyond Horizons</h2>
        <p>Learning is a journey, not a destination</p>
        <Link to="/levelup">
            <button className="btn">Explore</button>
           </Link>
      </div>
    </div>
    </div>
  );
}

export default Explore;

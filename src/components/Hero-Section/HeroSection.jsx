import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import gif from '../../assests/images/vector.gif';
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Why<br /> compare <br /> When you have no another YOU
              </h2>
              <p className="mb-5">
                "It's time to leave behind the old and  embrace the new<br />  
                Let's begin our journey of transformation."<br /> 
              </p>
            </div>
            <Link to="/explore">
            <button className="btn">Explore</button>
           </Link> 
          </Col>

          <Col lg="6" md="6">
          <div className="gif">
           <img src={gif} alt="My Gif" width="700"/>
         </div> 
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

import React from "react";
import Card from "./shared/Card";
import { useNavigate, Link, NavLink } from 'react-router-dom'


const About = () => {
    const navigate = useNavigate()

    const goToAnother = () => {
        navigate('/')
    } 
    
  return (
    <Card>
      <p>Here is the about page...</p>
      <NavLink activeclassname="active" to="/Post" className="active">
        Send to post page
      </NavLink>
      <button onClick={goToAnother}>Click to redirect</button>
    </Card>
  );
};

export default About;

import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
const About = () => {
    return (
        <section className="about" style={{ backgroundColor:'#D8FFFB'}}>
            <h1 className="d-flex justify-content-center"> <span style={{marginTop:'30px'}}>About</span> </h1>
            <div className="container">
                <div className="Card" style={{marginTop:'30px'}}>
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <h3>Skills</h3>
                                    <h5><FontAwesomeIcon style={{color:'#5052d9'}} icon={faHandPointRight}/> JavaScript(ES6)</h5>
                                    <h5><FontAwesomeIcon style={{color:'#5052d9'}} icon={faHandPointRight}/> React.js</h5>
                                    <h5><FontAwesomeIcon style={{color:'#5052d9'}} icon={faHandPointRight}/> Node.js</h5>
                                    <h5><FontAwesomeIcon style={{color:'#5052d9'}} icon={faHandPointRight}/> HTML/CSS</h5>
                                    <h5><FontAwesomeIcon style={{color:'#5052d9'}} icon={faHandPointRight}/> Bootstrap</h5>
                                    <h5><FontAwesomeIcon style={{color:'#5052d9'}} icon={faHandPointRight}/> Material Ui</h5>
                                    <h5><FontAwesomeIcon style={{color:'#5052d9'}} icon={faHandPointRight}/> Mongodb</h5>
                                    <h5><FontAwesomeIcon style={{color:'#5052d9'}} icon={faHandPointRight}/> Firebase</h5>
                                    <h5><FontAwesomeIcon style={{color:'#5052d9'}} icon={faHandPointRight}/> Heroku</h5>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h3>Summary</h3>
                                    <p>I am a front-end web developer. I have experience with building websites and web applications. I specialize in JavaScript ES6 and have experience working with React. I also have experience working with the express.js framework.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
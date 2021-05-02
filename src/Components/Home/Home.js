import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import image from '../image/khk.png';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
const Home = () => {
    return (
       
       <div>
            <section style={{backgroundColor:'#8AE5DB'}}>
           <div className="container">
            <div className="row"  >
                <div className="col-md-6">
                    <div style={{marginTop:'200px',color:'#2f3542'}} >
                    <h2>HI I AM</h2>
                    <h1>KAMRUL HASAN</h1>
                   <a href="https://drive.google.com/uc?export=download&id=1VIFgc801T5AWl0FkLwUg5embs3rLzRqQ"> <button type="button" class="btn btn-outline-danger" style={{marginTop:'30px'}} > DOWNLOAD RESUME</button></a>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={image} style={{width:'50%',marginTop:'100px'}} />
                </div>
            </div>
        </div>
        </section>
        
        <Projects/>
        <About/>
        <Contact/>
       </div>
    );
};

export default Home;
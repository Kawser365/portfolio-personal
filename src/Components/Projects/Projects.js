import React from 'react';
import './Project.css';
import CarRepair from '../image/CarRepairing.png';
import FoodApp from '../image/foodapp.png';
import RideShare from '../image/rideshare.png';
import FootballLeague from '../image/footballLeague.png';
import Ecommerce from '../image/ecommerce.png';
import Landingpage from '../image/landingpage.png';
const Projects = () => {
    return (
        <section className="projects" style={{backgroundColor:''}}>
            <div className="d-flex justify-content-center">
                <h1 style={{marginTop:'50px'}}>MY PROJECTS</h1>
            </div>
            <div className="container" style={{marginTop:'20px'}}>
                <div className="row">
               <div className="col-md-4 col-sm-12">
               <div class="card">
                <img class="card-img-top" src={CarRepair} alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title">Car repair website</h4>
                    <p class="card-text">Use Mongodb, firebase, react, node</p>
                    <button type="button" class="btn btn-outline-dark">View</button>
                </div>
                </div>
               </div>
               <div className="col-md-4 col-sm-12">
               <div class="card" >
                <img class="card-img-top" src={FoodApp} alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title">Food Application</h4>
                    <p class="card-text">Use Mongodb, firebase, react, node</p>
                    <button type="button" class="btn btn-outline-dark">View</button>
                </div>
                </div>
               </div>
               <div className="col-md-4 col-sm-12">
               <div class="card" >
                <img class="card-img-top" src={RideShare} alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title">Ride Sharing App</h4>
                    <p class="card-text">Use Mongodb, firebase, react, node</p>
                    <button type="button" class="btn btn-outline-dark">View</button>
                </div>
                </div>
               </div>
                </div>
            </div>
           <div className="container">
               <div className="row">
               <div className="container" style={{marginTop:'40px'}}>
                <div className="row">
                <div className="col-md-4 col-sm-12" >
               <div class="card">
                <img class="card-img-top" src={FootballLeague} alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title">All Football League</h4>
                    <p class="card-text">Use Mongodb, firebase, react, node</p>
                    <button type="button" class="btn btn-outline-dark">View</button>
                </div>
                </div>
               </div>
               <div className="col-md-4 col-sm-12">
               <div class="card" >
                <img class="card-img-top" src={Ecommerce} alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title">E-commerce website</h4>
                    <p class="card-text">Use Mongodb, firebase, react, node</p>
                    <button type="button" class="btn btn-outline-dark">View</button>
                </div>
                </div>
               </div>
               <div className="col-md-4 col-sm-12">
               <div class="card" >
                <img class="card-img-top" src={Landingpage} alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title">Responsive Templates</h4>
                    <p class="card-text">Use Mongodb, firebase, react, node</p>
                    <button type="button" class="btn btn-outline-dark">View</button>
                </div>
                </div>
               </div>
                </div>
            </div>
               </div>
           </div>
        </section>
    );
};

export default Projects;
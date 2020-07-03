import React from 'react';
import '../assets/scss/pages/_home.scss'

const Home = () => {
    return (
        <div className="home-cover">
            <div className="logo"></div>
            <div className="overlay"></div>
            <div className="container-fluid box-home">
                <div className="row">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-xs-10">
                        <div className="">
                            <span className="main-heading">Join over 50 millions people sharing recipes everyday</span><br/>
                            <span className="sub-heading">Never run out of ideas again. Try new foods, ingredients, cooking style, and more</span>
                        </div>
                        <br/><br/>
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-8 butleft" ><button className="green-button">Join Scratch</button></div>

                            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12"></div>
                            
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-8 butright"><button className="white-button">Learn More</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

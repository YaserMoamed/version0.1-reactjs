import React from 'react';
import {Link} from 'react-router-dom'


const Signup = () => {
    return (
        <div className="signup-cover">
            <div className="overlay-signup"></div>
            <div className="signup-box">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5 col-sm-12 col-xs-10 left-col">
                        <div className="left-signup">
                            <img src={require('../assets/img/logo.PNG')} alt="logo" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7 col-sm-12 col-xs-10">
                        <div className="signup-input">
                            <div className="part1">
                                <span className="main">Start from Scratch</span><br/>
                                <span className="sub">Create account to continue.</span>
                            </div>
                            
                            <form className="part2">
                                <div className="input1">
                                    <label>Full Name</label><br/>
                                    <input type="password" placeholder="" />
                                </div>
                                <div className="input2">
                                    <label>Email address</label><br/>
                                    <input type="email" placeholder="" />
                                </div>
                                <div className="input3">
                                    <label>Password</label><br/>
                                    <input type="password" placeholder="" />
                                </div>
                                <input type="submit" className="green-button" value="Sign Up"/>
                            </form>
                            <div className="part3">
                                <span>Already have an account?</span><br/>
                                <Link to="/login">Login Here</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;

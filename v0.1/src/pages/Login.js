import React from 'react';
import '../assets/scss/pages/_login.scss'


const Login = () => {
    return (
        <div className="login-cover">
            <div className="overlay-login"></div>
            <div className="login-box">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5 col-sm-12 col-xs-10 left-col">
                        <div className="left-login">
                            <img src={require('../assets/img/logo.PNG')} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7 col-sm-12 col-xs-10">
                        <div className="login-input">
                            <div className="part1">
                                <span className="main">Welcome Back!</span><br/>
                                <span className="sub">Please login to continue.</span>
                            </div>
                            
                            <form className="part2">
                                <div className="input1">
                                    <label>Email address</label><br/>
                                    <input type="email" placeholder="user@email.com" />
                                </div>
                                <div className="input2">
                                    <label>Password</label><br/>
                                    <input type="password" placeholder="password" />
                                </div>
                                <input type="submit" className="green-button" value="Login"/>
                            </form>
                            <div className="part3">
                                <span>New in Scratch?</span><br/>
                                <a>Create Account Here</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

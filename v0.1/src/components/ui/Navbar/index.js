import React from 'react';
import './style.scss'

const Navbar = () => {
    return (
        <div className="header-bar">
            <div className="brand">
                <img src={require('../../../assets/img/logo.PNG')} alt="brand"/>
            </div>
            <div className="search-box">
                <input className="show-large" type="text" placeholder="Search Recipe, Profile, or Ingredients"/>
            </div>
            <div className="right-content">
                <img className="show-icon" src={require('../../../assets/img/search2.png')} alt="mail"/>
                <div className="notification"><img src={require('../../../assets/img/dish.PNG')} alt="dish"/></div>
                <div className="message">
                    <img src={require('../../../assets/img/mail.PNG')} alt="mail"/>
                </div>
                <div className="user"><img src={require('../../../assets/img/user.jpg')} alt="user"/></div>
                
            </div>
            
        </div>
    );
}

export default Navbar;

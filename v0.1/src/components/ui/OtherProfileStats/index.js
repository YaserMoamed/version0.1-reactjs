import React from 'react';
import './style.scss'
const index = () => {
    return (
        <div className="otherProfileStats-card">
                <div className="card-upper">
                    <div className="userImage">
                        <img src={require('../../../assets/img/user.jpg')} alt="user"/>
                    </div>
                    <div className="userInfo">
                        <p className="name">Laquita Elliott</p>
                        <p className="title">Food Crafter</p>
                        <span>584 followers </span> <span className="dot">•</span><span className="likes">23k likes</span>
                    </div>
                </div>
                <div className=""><hr/></div>
                <div className="follow">
                    <button className="green-button">Follow</button>
                </div>
            
        </div>
    );
}

export default index;

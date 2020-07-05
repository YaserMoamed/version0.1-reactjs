import React from 'react';
import './style.scss'
const index = () => {
    return (
        <div className="card">
                <div className="card-upper">
                    <div className="userImage">
                        <img src={require('../../../assets/img/user.jpg')} alt="user"/>
                    </div>
                    <div className="userInfo">
                        <p className="name">Nick Evans</p>
                        <p className="title">Potato Master</p>
                        <span>584 followers </span> <span className="dot">•</span><span className="likes">23k likes</span>
                    </div>
                </div>
                <div className=""><hr/></div>
            <div className="row stats">
                <div className="col-4">
                    <p className="count">20</p>
                    <p className="field">Recipes</p>
                </div>
                <div className="col-4">
                    <p className="count">75</p>
                    <p className="field">Saved</p>
                </div>
                <div className="col-4">
                    <p className="count">248</p>
                    <p className="field">Following</p>
                </div>
            </div>
            
        </div>
    );
}

export default index;

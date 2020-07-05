import React from 'react';
import './style.scss'

const FollowSuggestion = () => {
    return (
        <div className="follow-suggestion">
            <div className="heading">
                <p>People you might want to follow</p>
                <a>See all Suggestion</a>
            </div>
            <div className="cards-fs">
                <div className="card-fs">
                    <div className="bg-image">
                        <img src={require('../../../assets/img/postImage.jpg')} alt="background"/>
                        <div  className="userImage"><img src={require('../../../assets/img/user.jpg')} alt="user"/></div>
                    </div>
                    <div className="body">
                        <p className="name">Jennifer Lawred</p>
                        <div className="stats">
                            <div>
                                <p className="count">289</p>
                                <p className="field">recipes</p>
                            </div>
                            <div>
                                <p className="count">8k</p>
                                <p className="field">followers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-fs">
                    <div className="bg-image">
                        <img src={require('../../../assets/img/postImage.jpg')} alt="background"/>
                        <div  className="userImage"><img src={require('../../../assets/img/user.jpg')} alt="user"/></div>
                    </div>
                    <div className="body">
                        <p className="name">Naomí Yepes</p>
                        <div className="stats">
                            <div>
                                <p className="count">289</p>
                                <p className="field">recipes</p>
                            </div>
                            <div>
                                <p className="count">8k</p>
                                <p className="field">followers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-fs">
                    <div className="bg-image">
                        <img src={require('../../../assets/img/postImage.jpg')} alt="background"/>
                        <div  className="userImage"><img src={require('../../../assets/img/user.jpg')} alt="user"/></div>
                    </div>
                    <div className="body">
                        <p className="name">Nieek Bove</p>
                        <div className="stats">
                            <div>
                                <p className="count">289</p>
                                <p className="field">recipes</p>
                            </div>
                            <div>
                                <p className="count">8k</p>
                                <p className="field">followers</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            
        </div>
    );
}

export default FollowSuggestion;

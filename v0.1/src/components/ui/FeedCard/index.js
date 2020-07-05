import React from 'react';
import './style.scss'
const FeedCard = () => {
    
    const [showSave, setShowSave] = React.useState(false)
    const openSave = () => setShowSave(true)
    const closeSave = () => setShowSave(false)
    return (
        <div className="feed-card">
            {showSave && 
                <div className="saveTo">
                    <div className="box">
                        <div className="head">
                            <p>Save to</p>
                            <button onClick={closeSave}><span className="cross1"></span><span className="cross2"></span></button>
                        </div>
                        <button className="options">Western</button>
                        <button className="options">Quick Lunch</button>
                        <button className="options">Vegies</button>
                        <a className="link">+ Add New Cookbook</a>
                    </div>
                </div>
            }
            <div className="card-img">
                <div className="card-header">
                    <img src={require('../../../assets/img/user.jpg')} alt="user"/>
                    <div className="creatorInfo">
                        <p className="name">Tamaki Ryushi</p>
                        <p className="time">2h ago</p>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="post-title">
                    <p>Tofu Salad Ginger Garlic</p>
                    <span> ♡ </span>
                </div>
                <div className="content">
                    <p>I thought this salad was exceptionally delicious and healthy. I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the ...</p>
                </div>
            </div>
            <div className="card-footer">
                <div className="stats">
                    <span>38 Likes</span><span className="dot">•</span><span>8 Comments</span>
                </div>
                <button className="save-button" onClick={openSave}><span>+</span>Save</button>
            </div>


        </div>
    );
}

export default FeedCard;

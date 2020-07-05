import React from 'react';
import './style.scss'
const LiveVideoFeed = () => {
    return (
        <div className="live-video-feed">
            <div className="heading">Live cooking by scratch</div>
            <div className="vid">
                <video src={require('../../../assets/video/vid.mp4')} type="video/mp4" loop controls/>
            </div>
        </div>
    );
}

export default LiveVideoFeed;

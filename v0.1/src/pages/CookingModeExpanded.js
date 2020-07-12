import React from 'react';

const CookingModeExpanded = () => {
    return (
        <div className="cookingModeExpanded">
            <div className="head-options">
                <button className="close"><span className="left"></span><span className="right"></span><span className="text">Back to Recipe</span></button>
                <div>
                    <p>Cooking Mode</p>
                    <span><img src={require('../assets/img/timer.png')}/>00:12</span>
                </div>
            </div>
            <div className="black-area">
                <p>Oven-Baked White Wine Goulash</p>
            </div>
            <div className="video-content">
                <video src={require('../assets/video/vid.mp4')} type="video/mp4" controls />
            </div>
            <div className="black-area-2">
                <p>Lightly grease or spray the waffle iron with non-stick cooking spray. 
                    Pour some batter onto the preheated waffle iron, close the top,
                     and cook until golden brown and crisp on both sides. 
                    Waffles are usually cooked with steam subsides. 
                    Transfer waffles to a serving plate, and keep warm.</p>
            </div>
        </div>
    );
}

export default CookingModeExpanded;

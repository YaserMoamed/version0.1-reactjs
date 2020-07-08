import './style.scss'

import React from 'react';

const RecipeCard = () => {
    return (
        <div className="recipe-card">
            <div className="food-image">
                <img src={require('../../../assets/img/food.jpg')}/>
            </div>
            <div className="body">
                <div className="name">
                    <p>Cooked Coconut Mussels</p>
                </div>
                <div className="card-footer">
                    <div className="stats">
                        <span>± 5 mins</span><span className="dot">•</span><span>4 ingredients</span>
                    </div>
                    <button className="save-button"><span>▷</span>Cook</button>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;

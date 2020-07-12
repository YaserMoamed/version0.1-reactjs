import React from 'react';
import './style.scss'
const index = (props) => {
    return (
        <div className="search-page-recipe-card">
            <div className="card-img">
                <img src={require('../../../assets/img/dishImage.jpg')} alt="dish" />
            </div>
            <p>{props.name}</p>
        </div>
    );
}

export default index;

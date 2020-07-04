import React from 'react';
import './style.scss'

const index = () => {
    return (
        <div className="mostActive">
            <div className="heading">Most Active Today</div>
            <div className="allusers">
                <img className="user" src={require('../../../assets/img/user.jpg') } alt="user"/>
                <img className="user" src={require('../../../assets/img/user.jpg') } alt="user"/>
                <img className="user" src={require('../../../assets/img/user.jpg') } alt="user"/>
                <img className="user" src={require('../../../assets/img/user.jpg') } alt="user"/>
                <img className="user" src={require('../../../assets/img/user.jpg') } alt="user"/>
            </div>
            
        </div>
    );
}

export default index;

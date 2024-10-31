import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, description }) => {
    return (
        <div className="profile-card">
            <h2 className="profile-name">{name}</h2>
            <p className="profile-description">{description}</p>
        </div>
    );
};

export default ProfileCard;

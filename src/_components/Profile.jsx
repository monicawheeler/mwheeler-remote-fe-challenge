import React from 'react';
import '../styles/components/media.css';

const Profile = () => {
    return (
        <div className="media">
            {/* Code Challenge note: the following TODO is a flag to show how I would make a TODO to handle a profile image, if provided. */}
            {/* TODO: if no profile image, display placeholder image */}
            <div className="media__image media__image--placeholder"></div>
            {/* else, display image with alt text being the profile's name*/}
            {/* <img className="media__image" src="http://placehold.it/36" alt="{user.name}" /> */}
            <div className="media__content">
                <p className="t-body-medium">Julie Howard</p>
                <p className="t-caption-small">Admin</p>
            </div>
        </div>
    )
}

export default Profile;
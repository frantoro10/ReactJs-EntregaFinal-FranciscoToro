import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RenderStars = (rating) => {
    const stars = [];
    const starsColor = "#e6e205";
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <FontAwesomeIcon    
                key={i}
                icon={i <= rating ? faStar : ['far', 'star']}
                style={{color: starsColor}}
            />
        );
    }
    return stars;

}

export default RenderStars 
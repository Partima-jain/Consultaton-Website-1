import React from 'react';
import './Marketplace.css';
import image1 from '../../assets/Img1.png';
import image2 from '../../assets/Img2.png';
import image3 from '../../assets/Img3.png';

const SlidingImages = () => {
    return (
        <div className='column-container'>
            <div className='box'>
                <img src={image1} alt="Image 1" />
                <div className='text'>INVESTOR RELATIONS</div>
            </div>
            <div className='box'>
                <img src={image2} alt="Image 2" />
                <div className='text'>VARUN RAI KOCHHAR FOUNDATION</div>
            </div>
            <div className='box'>
                <img src={image3} alt="Image 3" />
                <div className='text'>FUNDING STARTUPS</div>
            </div>
        </div>
    );
}

export default SlidingImages;

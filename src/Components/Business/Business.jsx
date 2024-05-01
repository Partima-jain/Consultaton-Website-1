import React from 'react';
import Slider from 'react-slick';
import './Business.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/Img1.png';
import image2 from '../../assets/Img2.png';
import image3 from '../../assets/Img3.png';
import image4 from '../../assets/Img4.png';
import image5 from '../../assets/Img5.png';

const SlidingImages = () => {
    const settings = {
        dots: true,
        infinite: true, // Set to true for continuous loop
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <div className='heads'>
            <h2>TOP BUSINESS OPPORTUNITIES</h2>
            <div className='images'>
                <Slider {...settings}>
                    <div>
                        <img src={image1} alt="Image 1" />
                        <p>INVESTOR RELATIONS</p>
                    </div>
                    <div>
                        <img src={image2} alt="Image 2" />
                        <p>VARUN RAI KOCHHAR FOUNDATION</p>
                    </div>
                    <div>
                        <img src={image3} alt="Image 3" />
                        <p>FUNDING STARTUPS</p>
                    </div>
                    <div>
                        <img src={image4} alt="Image 4" />
                        <p>BUSINESS GENERATION PARTNERSHIPS</p>
                    </div>
                    <div>
                        <img src={image5} alt="Image 5" />
                        <p>MERGERS & ACQUISITIONS</p>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default SlidingImages;

import React from 'react';
import './Club.css'; // Assuming you have a CSS file named VideoPage.css
import video1 from '../../assets/Video1.mp4';
import video2 from '../../assets/video2.mp4';
import video6 from '../../assets/video6.mp4';
import video3 from '../../assets/video3.mp4';
import video4 from '../../assets/video4.mp4';
import Right2 from '../../assets/Right2.png';
import imageright from '../../assets/image-right.png';
import JOB12 from '../../assets/JOB12.png';
import Right1 from '../../assets/Right1.png';
import job2 from '../../assets/job2.png';
import job3 from '../../assets/job3.png';
import Right3 from '../../assets/Right3.png';


const Club = () => {
    return (
        <div className='clubbox'>
            <div className="events-heading">
                    <hr className="line" />
                    <h1 className="sub-title">Club</h1>
                    <hr className="line" />
                </div>
            <div className="video-page">
            <div className="video-container">
                    <iframe
                         title="Video"
                         width="250px"
                         height="450px"
                         src={`${video3}?autoplay=1&mute=1&loop=1`} // Add loop attribute to play video in infinite loop
                         frameborder="0" // Changed to 0 to remove border
                         allow="autoplay; encrypted-media; picture-in-picture"
                         allowfullscreen
                    ></iframe>
                    <div className="overlay"></div>

                </div >
                <div className="video-container">
                    <iframe
                        title="Video"
                        width="160px"
                        height="400px"
                        src={`${video1}?autoplay=1&mute=1&controls=0`} // Add parameters for autoplay, mute, and remove controls
                        frameborder="0" // Changed to 0 to remove border
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <div className="overlay"></div>
                </div>

                <div className="text-container">
                    <h2 className='head'>LUXURY BUSINESS NETWORK</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut leo quis
                        massa sollicitudin luctus.
                    </p>
                </div>
                <div className="video-container">
                    <iframe
                        title="Video"
                        width="180px"
                        height="400px"
                        controls="false"
                        src={`${video4}?autoplay=1&mute=1`} // Add parameters for autoplay, mute, and remove controls
                        frameborder="0" // Changed to 0 to remove border
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <div className="overlay"></div>
                </div>
            </div>
            <div className="events-heading">
                    <hr className="line" />
                    <h1 className="sub-title">Club</h1>
                    <hr className="line" />
                </div>
            <div className="video-page">
            <div className="video-container">
                    <iframe
                        title="Video"
                        width="180px"
                        height="400px"
                        src={`${video3}?autoplay=1&mute=1&controls=0`} // Add parameters for autoplay, mute, and remove controls
                        frameborder="0" // Changed to 0 to remove border
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            <div className="video-container">
                    <iframe
                        title="Video"
                        width="230px"
                        height="400px"
                        src={`${video1}?autoplay=1&mute=1&controls=0`} // Add parameters for autoplay, mute, and remove controls
                        frameborder="0" // Changed to 0 to remove border
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
                <div className="text-container">
                    <h2 className='head'>GLOBAL BUSINESS NETWORK </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut leo quis
                        massa sollicitudin luctus. Nullam quis sapien sed est gravida mattis. Duis
                        nec tincidunt quam. Nullam vel aliquet dolor. 
                    </p>
                </div>
                <div className="video-container">
                    <iframe
                        title="Video"
                        width="180px"
                        height="400px"
                        src={`${video4}?autoplay=1&mute=1&controls=0`} // Add parameters for autoplay, mute, and remove controls
                        frameborder="0" // Changed to 0 to remove border
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div className="events-heading">
                    <hr className="line" />
                    <h1 className="sub-title">Club</h1>
                    <hr className="line" />
                </div>
            <div className="video-page">
            <div className="video-container">
                    <iframe
                        title="Video"
                        width="180px"
                        height="400px"
                        src={`${video1}?autoplay=1&mute=1&controls=0`} // Add parameters for autoplay, mute, and remove controls
                        frameborder="0" // Changed to 0 to remove border
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            <div className="video-container">
                    <iframe
                        title="Video"
                        width="230px"
                        height="400px"
                        src={`${video6}?autoplay=1&mute=1&controls=0`} // Add parameters for autoplay, mute, and remove controls
                        frameborder="0" // Changed to 0 to remove border
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
                <div className="text-container">
                    <h2 className='head'>EMPOWERING  BUSINESS   NETWORK</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut leo quis
                        massa sollicitudin luctus. Nullam quis sapien sed est gravida mattis. Duis
                        nec tincidunt quam. Nullam vel aliquet dolor. 
                    </p>
                </div>
                <div className="video-container">
                    <iframe
                        title="Video"
                        width="180px"
                        height="400px"
                        src={`${video1}?autoplay=1&mute=1&controls=0`} // Add parameters for autoplay, mute, and remove controls
                        frameborder="0" // Changed to 0 to remove border
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Club;

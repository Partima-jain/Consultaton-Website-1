import React from 'react';
import './Events.css'; // Assuming you have a CSS file named Events.css
import imageleft from '../../assets/image-left.png';
import imageright from '../../assets/image-right.png';
import work1 from '../../assets/work1.png';
import work2 from '../../assets/work2.png';
import work3 from '../../assets/work3.png';
import work4 from '../../assets/work4.png';
import work5 from '../../assets/Work5.png';
import work6 from '../../assets/work6.png';
import '@fortawesome/fontawesome-free/css/all.css';

const Events = () => {
    return (
        <div id="portfolio">
            <div className="about-section">
                <div className="events-heading">
                    <hr className="line" />
                    <h1 className="sub-title">Events</h1>
                    <hr className="line" />
                </div>
                <div className="container">
                    <div className="image-container">
                        {/* Left Image */}
                        <div className="column">
                            <img src={imageleft} alt="Left Image" className="left-image" style={{ marginTop: '50px', width: '70%' }} />
                        </div>
                        {/* Event Containers */}
                        <div className="services-container">
                            <div className="services-list">
                                {/* First Event Container */}
                                <div className="work">
                                    <h3>WORKSHOPS</h3>
                                    <a href="https://www.ibaconsultingworldwide.com/index"><img src={work1} alt="Work 1" href="https://www.ibaconsultingworldwide.com/index" /></a>
                                </div>
                                {/* Second Event Container */}
                                <div className="work">
                                    <h3>CONFERENCES</h3>
                                    <a href="https://www.ibaconsultingworldwide.com/index"><img src={work2} alt="Work 1" href="https://www.ibaconsultingworldwide.com/index" /></a>
                                    
                                </div>
                            </div>
                        </div>
                        {/* Right Photo */}
                        <div className="column">
                            <img src={imageright} alt="Right Image" className="right-image" style={{ marginTop: '40px', width: '78%' }} />
                        </div>
                    </div>
                </div>
                <div className="events-heading">
                    <hr className="line" />
                    <h1 className="sub-title">Events</h1>
                    <hr className="line" />
                </div>
                <div className="container">
                    <div className="image-container">
                        {/* Left Image */}
                        <div className="column">
                            <img src={imageleft} alt="Left Image" className="left-image" style={{ marginTop: '50px', width: '70%' }} />
                        </div>
                        {/* Event Containers */}
                        <div className="services-container">
                            <div className="services-list">
                                {/* First Event Container */}
                                <div className="work">
                                    <h3>FORUMS</h3>
                                    <a href="https://www.ibaconsultingworldwide.com/index"><img src={work3} alt="Work 1" href="https://www.ibaconsultingworldwide.com/index" /></a>
                                    
                                </div>
                                {/* Second Event Container */}
                                <div className="work">
                                    <h3>MUSIC CONCERTS</h3>
                                    <a href="https://www.ibaconsultingworldwide.com/index"><img src={work4} alt="Work 1" href="https://www.ibaconsultingworldwide.com/index" /></a>
                                    
                                </div>
                            </div>
                        </div>
                        {/* Right Photo */}
                        <div className="column">
                            <img src={imageright} alt="Right Image" className="right-image" style={{ marginTop: '40px', width: '78%' }} />
                        </div>
                    </div>
                </div>
                <div className="events-heading">
                    <hr className="line" />
                    <h1 className="sub-title">Events</h1>
                    <hr className="line" />
                </div>
                <div className="container">
                    <div className="image-container">
                        {/* Left Image */}
                        <div className="column">
                            <img src={imageleft} alt="Left Image" className="left-image" style={{ marginTop: '50px', width: '70%' }} />
                        </div>
                        {/* Event Containers */}
                        <div className="services-container">
                            <div className="services-list">
                                {/* First Event Container */}
                                <div className="work">
                                    <h3>AUCTIONS & ART FAIRS</h3>
                                    <a href="https://www.ibaconsultingworldwide.com/index"><img src={work5} alt="Work 1" href="https://www.ibaconsultingworldwide.com/index" /></a>
                                    
                                </div>
                                {/* Second Event Container */}
                                <div className="work">
                                    <h3>ENTERTAINMENT & SPONSORSHIPS</h3>
                                    <a href="https://www.ibaconsultingworldwide.com/index"><img src={work6} alt="Work 1" href="https://www.ibaconsultingworldwide.com/index" /></a>
                                </div>
                            </div>
                        </div>
                        {/* Right Photo */}
                        <div className="column">
                            <img src={imageright} alt="Right Image" className="right-image" style={{ marginTop: '40px', width: '78%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;

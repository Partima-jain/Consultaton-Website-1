import React from 'react';
import './Sercices.css';
import imageleft from '../../assets/image-left.png';
import imageright from '../../assets/image-right.png';

const Services = () => {
    return (
        <div className="events-container">
            {/* First Column */}
            <div className="about-section">
                <div className="events-heading">
                    <hr className="line" />
                    <h1 className="sub-title">Our Services</h1>
                    <hr className="line" />
                </div>
                <div className="container">
                    <div className="image-container">
                        {/* Left Image */}
                        <div className="column">
                            <img src={imageleft} alt="Left Image" className="left-image" style={{ marginTop: '40px', width: '70%' }} />
                            <img src={imageleft} alt="Left Image" className="left-image" style={{ marginTop: '15px', width: '70%' }} />
                        </div>
                        {/* Event Containers */}
                        <div className="services-list">
                            {/* First Event Container */}
                            <div>
                                <i className="fa-solid fa-code"></i>
                                <h2>GLOBAL SEARCH COMPANY</h2>
                                <p>RETAINED SEARCH PARTNERS
                                    EXCLUSIVE SENIOR HIRING PARTNERS
                                    RPO PARTNERS
                                    CAMPUS HIRING PARTNERS
                                    INTERNSHIP PROGRAMS
                                    ASSESSMENT & REPORTS
                                </p>
                                <a href="https://www.ibaglobalsearch.com/lander">Learn more</a>
                                <a href="https://www.ibaglobalsearch.com/register" className="register-btn">Register Now</a>
                            </div>
                            {/* Second Event Container */}
                            <div>
                                <i className="fa-solid fa-crop"></i>
                                <h2>CORPORATE BUSINESS ADVISORY & CONSUTING </h2>
                                <p>CORPORATE GOVERNANCE ADVISORY
                                    CORPORATE STRATEGY CONSULTING</p>
                                <a href="https://www.ibaconsultingworldwide.com">Learn more</a>
                                <a href="https://www.ibaglobalsearch.com/register" className="register-btn">Register Now</a>
                            </div>
                        </div>
                        {/* Right Photo */}
                        <div className="column">
                            <img src={imageright} alt="Right Image" className="right-image" style={{ marginTop: '40px', width: '78%' }} />
                            <img src={imageright} alt="Right Image" className="right-image" style={{ marginTop: '15px', width: '78%' }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Second Column */}
            <div className="about-section">
                <div className="container">
                    <div className="image-container">
                        {/* Left Image */}
                        <div className="column">
                            <img src={imageleft} alt="Left Image" className="left-image" style={{ marginTop: '50px', width: '70%' }} />
                            <img src={imageleft} alt="Left Image" className="left-image" style={{ marginTop: '20px', width: '70%' }} />
                        </div>
                        {/* Event Containers */}
                        <div className="services-container">
                            <div className="services-list">
                                {/* First Event Container */}
                                <div>
                                    <i className="fa-solid fa-code"></i>
                                    <h2>PVARUN RAI KOCHHAR ACADEMY</h2>
                                    <p>LEADERSHIP SUCCESSION COACHING
                                        IMPACT LEADERSHIP  TRAINING
                                        TRAINERS ACADEMY
                                        IMPACT SALES TRAINING
                                        FINISHING SCHOOL
                                        MUSIC, ART & DANCE ACADEMY		</p>
                                    <a href="https://www.ibatrainingworldwide.com/lander">Learn more</a>
                                    <a href="https://www.ibaglobalsearch.com/register" className="register-btn">Register Now</a>
                                </div>
                                {/* Second Event Container */}
                                <div>
                                    <i className="fa-solid fa-crop"></i>
                                    <h2>PRK Foundations</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                                    <a href="https://www.ibatrainingworldwide.com/lander">Learn more</a>
                                    <a href="https://www.ibaglobalsearch.com/register" className="register-btn">Register Now</a>
                                </div>
                            </div>
                        </div>
                        {/* Right Photo */}
                        <div className="column">
                            <img src={imageright} alt="Right Image" className="right-image" style={{ marginTop: '40px', width: '78%' }} />
                            <img src={imageright} alt="Right Image" className="right-image" style={{ marginTop: '15px', width: '78%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;

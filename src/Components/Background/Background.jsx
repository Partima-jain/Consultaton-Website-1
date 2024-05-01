/*import React from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './Background.css';
import video1 from '../../assets/Video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import video4 from '../../assets/video4.mp4';
import video5 from '../../assets/video5.mp4';
import video6 from '../../assets/video6.mp4';
import video7 from '../../assets/video7.mp4';
import "bootstrap/dist/css/bootstrap.css";

const Background = () => {
  const videoProperties = [
    {
      id: 1,
      title: "Club",
      src: video1
    },
    {
      id: 2,
      title: "ENTERTAINMENT",
      src: video2
    },
    {
      id: 3,
      title: "TECHNOLOGY",
      src: video3
    },
    {
      id: 4,
      title: "GLOBAL MARKETPLACE",
      src: video4
    },
    {
      id: 5,
      title: "LUXURY BUSINESS TRADING ",
      src: video5
    },
    {
      id: 6,
      title: "LUXURY HOSPITALITY, TRAVEL & HOLIDAYS",
      src: video6
    },
    {
      id: 7,
      title: "HEALTHCARE",
      src: video7
    },
  ];

  return (
    <div className="App">
      <Carousel>
        {videoProperties.map(videoObj => (
          <Carousel.Item key={videoObj.id}>
            <ReactPlayer
              url={videoObj.src}
              pip={true}
              controls={true}
              playing={true}
              muted={true} // Add this line
              width="100%"
              height="100%"
            />
            <Carousel.Caption>
              <h3>{videoObj.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Background;
*/

import React, { useState, useEffect } from 'react'; // Add imports

import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './Background.css';
import video1 from '../../assets/Video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import video4 from '../../assets/video4.mp4';
import video5 from '../../assets/video5.mp4';
import video6 from '../../assets/video6.mp4';
import video7 from '../../assets/video7.mp4';
import "bootstrap/dist/css/bootstrap.css";

const Background = () => {
  const videoProperties = [
    {
      id: 1,
      title: "Club",
      src: video1
    },
    {
      id: 2,
      title: "EVENTS & ENTERTAINMENT",
      src: video2
    },
    {
      id: 3,
      title: "TECHNOLOGY",
      src: video3
    },
    {
      id: 4,
      title: "GLOBAL MARKETPLACE",
      src: video4
    },
    {
      id: 5,
      title: "LUXURY BUSINESS TRADING ",
      src: video5
    },
    {
      id: 6,
      title: "LUXURY TRAVEL & HOLIDAYS",
      src: video6
    },
    {
      id: 7,
      title: "HEALTHCARE",
      src: video7
    },
    {
      id: 8,
      title: "REAL ESTATE MAKET PLACE",
      src: video7
    },
    {
      id: 7,
      title: "TOP BUSINESS OPPURTUNITIES",
      src: video7
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videoProperties.length);
    }, 5000); // Change video every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [videoProperties.length]);

  const handleVideoEnd = () => {
    setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videoProperties.length);
  };

  return (
    <div className="App">
      <Carousel>
        {videoProperties.map(videoObj => (
          <Carousel.Item key={videoObj.id}>
            <ReactPlayer
              url={videoObj.src}
              pip={true}
              controls={false}
              playing={true}
              muted={true} // Add this line
              width="100%"
              height="50%"
            />

          <Carousel.Caption style={{ position: "absolute", top: "300px", marginLeft: "50px", width: "100%", textAlign: "left" }}>
            <h1 style={{ fontSize: "90px" , wordWrap: "break-word"  }}>{videoObj.title}</h1>
          </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Background;

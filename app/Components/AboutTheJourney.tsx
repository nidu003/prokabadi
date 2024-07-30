import React from 'react';
import Image from 'next/image';

const AboutTheJourney = () => {
  return (
    <div className="about-the-journey-container">
      <div className="image-wrapper">
        <div className="image-container">
          <Image
            src="/background.png"
            alt="About The Journey"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="header">
          <h1>ABOUT</h1>
          <h2>THE <br/> JOURNEY</h2>
        </div>
        <div className="image-container2">
          <Image
            src="/hero.png"
            alt="Additional"
            width={603}
            height={734.7}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutTheJourney;

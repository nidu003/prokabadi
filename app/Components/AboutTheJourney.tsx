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
        <Image
        src="/About.png" // Update with the correct path to your image
        alt="About the Journey"
        width={584} // Set your desired width
        height={140} // Set your desired height
         />
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

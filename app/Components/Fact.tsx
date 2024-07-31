import React from 'react';
import Image from 'next/image';

const Fact = () => {
  return (
    <>
      <div className="heading-containerf">
        <h1>THOUGH OUT THE CARRIER ⎯⎯⎯</h1>
        <h2>FACT</h2>
      </div>
      <div className="paragraph-containerf">
        <p>
          Integer eget fringilla nibh, vitae tincidunt mi. Sed risus ligula, congue eget iaculis eu, maximus et nisl. In fringilla mauris
          in dui feugiat, vitae faucibus neque volutpat. Sed ultricies dui vel nunc euismod posuere. Curabitur consectetur erat
          eros, sed aliquam tortor vestibulum ac. Proin in sollicitudin libero. Integer lectus risus, accumsan interdum lorem id,
          ullamcorper dictum massa. Integer id nisi egestas tortor fermentum rhoncus. Ut rutrum rutrum sapien, eget ornare leo
          congue sed.
        </p>
      </div>
      <div className="lorem-text-container">
        <div className="lorem-text-item-container1">
          <div className="lorem-text-item1">LOREM TEXT</div>
        </div>
        <div className="lorem-text-item-container">
          <div className="lorem-text-item">LOREM TEXT</div>
        </div>
        <div className="lorem-text-item-container">
          <div className="lorem-text-item">LOREM TEXT</div>
        </div>
        <div className="lorem-text-item-container">
          <div className="lorem-text-item">LOREM TEXT</div>
        </div>
      </div>
      <div className="fact-image-container">
        <Image
          src="/facts.png" // Path to your image
          alt="Description of image"
          width={732} // Desired width
          height={500} // Desired height
        />
      </div>
      <div className="paragraph-containerf2">
        <p>
        Integer eget fringilla nibh, vitae tincidunt mi. Sed risus
        ligula, congue eget iaculis eu, maximus et nisl. In 
        fringilla mauris in dui feugiat, vitae faucibus neque 
        volutpat. Sed ultricies dui vel nunc euismod posuere. 
        Curabitur consectetur erat eros, sed aliquam tortor 
        vestibulum ac.Proin in sollicitudin 
        </p>
      </div>
    </>
  );
};

export default Fact;

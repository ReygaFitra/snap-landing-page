import React from 'react';
import heroMobile from '../Assets/images/image-hero-mobile.png';
import heroDesktop from '../Assets/images/image-hero-desktop.png';
import TextContents from './TextContents';

const Hero = () => {
  const textContents = [{ title: 'Make Remote Work', content: 'Get your team in sync. No matter your location. streamline the processes. Create team rituals. and Watch productivity soar' }];

  return (
    <div>
      <div className="md:hidden">
        <img src={heroMobile} />
      </div>
      <div className="hidden md:flex">
        <img src={heroDesktop} />
      </div>
      <div className="w-full h-auto text-center py-10 px-1">
        {textContents.map((textContent) => (
          <TextContents title={textContent.title} content={textContent.content} />
        ))}
        <button className="px-4 py-2 bg-black text-white rounded-xl my-6">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;

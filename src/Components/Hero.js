import React from 'react';
import heroMobile from '../Assets/images/image-hero-mobile.png';
import heroDesktop from '../Assets/images/image-hero-desktop.png';
import TextContents from './TextContents';
import SvgAudioPhile from './SvgAudioPhile';
import SvgMeet from './SvgMeet';
import SvgMaker from './SvgMaker';

const Hero = () => {
  const textContents = [{ title: 'Make Remote Work', content: 'Get your team in sync. No matter your location. streamline the processes. Create team rituals. and Watch productivity soar' }];

  return (
    <div className="box-border">
      <div className="md:hidden">
        <img src={heroMobile} />
      </div>

      <div className="text-center md:text-start md:py-0 md:flex md:w-[100%] md:h-[100vh] md:px-5 box-border">
        <div className="md:w-[100%] md:py-32 ">
          {textContents.map((textContent) => (
            <TextContents title={textContent.title} content={textContent.content} />
          ))}
          <button className="px-4 py-2 bg-black text-white rounded-xl my-4 md:mx-10 md:px-6 md:py-3 shadow-lg hover:shadow-2xl hover:duration-200 hover:font-semibold hover:-translate-y-1 ease-out">Learn More</button>
          <div className="flex justify-evenly gap-4  md:p-5 md:mt-10">
            <SvgAudioPhile />
            <SvgAudioPhile />
            <SvgMeet />
            <SvgMaker />
          </div>
        </div>
        <div className="hidden md:flex p-16 w-[100%] h-[100%] justify-center box-border">
          <img src={heroDesktop} className="object-cover hover:scale-95 duration-200" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';
import heroMobile from '../Assets/images/image-hero-mobile.png';
import heroDesktop from '../Assets/images/image-hero-desktop.png';
import TextContents from './TextContents';
import SvgAudioPhile from './SvgAudioPhile';
import SvgMeet from './SvgMeet';
import SvgMaker from './SvgMaker';
import HeroBtn from './HeroBtn';

const Hero = () => {
  const textContents = [{ title: 'Make Remote Work', content: 'Get your team in sync. No matter your location. streamline the processes. Create team rituals. and Watch productivity soar' }];

  return (
    <main className="container max-w-[100%] mx-auto box-border">
      <div className="md:hidden">
        <img src={heroMobile} />
      </div>

      <div className="text-center md:text-start md:py-0 md:flex md:w-[90%] md:h-screen mx-auto md:px-5 box-border">
        <div className="md:w-screen md:h-auto md:my-44 md:py-7 box-border">
          {textContents.map((textContent) => (
            <TextContents title={textContent.title} content={textContent.content} />
          ))}

          <div className="md:py-5">
            <HeroBtn />
          </div>

          <div className="flex justify-evenly gap-4  md:p-5">
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
    </main>
  );
};

export default Hero;

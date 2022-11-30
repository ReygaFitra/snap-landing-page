import React from 'react';
import { RiMenuFill } from 'react-icons/ri';
import AuthBtn from './AuthBtn';
import AuthBtn2 from './AuthBtn2';
import HumbergerMenu from './HumbergerMenu';
import NavBtn from './NavBtn';
import NavBtn2 from './NavBtn';
import SvgLogo from './SvgLogo';

const Navbar = () => {
  const buttons = [{ features: 'Features' }];
  const buttons2 = [{ company: 'Company' }];

  // const buttons2 = [{ title2: 'Company' }];

  return (
    <div className="container max-w-[100%] flex justify-between md:justify-evenly lg:justify-between md:px-8 md:py-2 items-center md:fixed">
      {/* left */}
      <div className="relative p-4 items-center flex md:w-auto md:h-3">
        <SvgLogo className="object-cover cursor-pointer" />
        <ul className="hidden md:flex space-x-4 pl-10">
          {buttons.map((button) => (
            <NavBtn features={button.features} />
          ))}

          {buttons2.map((button2) => (
            <NavBtn company={button2.company} />
          ))}
          <div>
            <a href="#" className="items-center font-semibold drop-shadow-sm hover:text-black duration-200 text-[#B2B2B2]">
              Careers
            </a>
          </div>
          <div>
            <a href="#" className="items-center font-semibold drop-shadow-sm hover:text-black duration-200 text-[#B2B2B2]">
              About
            </a>
          </div>
        </ul>
      </div>

      {/* rigth */}
      <div className="md:hidden p-2">
        {/* <button>
          <RiMenuFill className="w-7 h-7" />
        </button> */}
        <HumbergerMenu />
      </div>
      <div className="hidden md:flex space-x-4 font-semibold drop-shadow-sm">
        <>
          <AuthBtn />
        </>
        <>
          <AuthBtn2 />
        </>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { RiMenuFill } from 'react-icons/ri';
import AuthBtn from './AuthBtn';
import AuthBtn2 from './AuthBtn2';
import HumbergerMenu from './HumbergerMenu';
import NavBtn from './NavBtn';
import NavBtn2 from './NavBtn2';
import SvgLogo from './SvgLogo';

const Navbar = () => {
  const buttons = [{ title: 'Features', arrow: true }];

  const buttons2 = [{ title2: 'Company', arrow2: true }];

  return (
    <div className="container max-w-[100%] flex justify-between md:justify-evenly lg:justify-between md:px-8 md:py-2 items-center md:fixed">
      {/* left */}
      <div className="relative p-4 items-center flex md:w-auto md:h-3">
        <SvgLogo className="object-cover cursor-pointer" />
        <ul className="hidden md:flex space-x-4 pl-10">
          {buttons.map((button) => (
            <NavBtn title={button.title} arrow={button.arrow} />
          ))}

          {buttons2.map((button2) => (
            <NavBtn2 title2={button2.title2} arrow2={button2.arrow2} />
          ))}
          <div>
            <a href="#" className="font-semibold drop-shadow-sm hover:text-black duration-200 text-[#B2B2B2]">
              Careers
            </a>
          </div>
          <div>
            <a href="#" className="font-semibold drop-shadow-sm hover:text-black duration-200 text-[#B2B2B2]">
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

import React from 'react';
import { RiMenuFill } from 'react-icons/ri';
import NavBtn from './NavBtn';
import SvgLogo from './SvgLogo';

const Navbar = () => {
  const buttons = [
    { title: 'Features', arrow: true },
    { title: 'Company', arrow: true },
    { title: 'Careers', arrow: false },
    { title: 'About', arrow: false },
  ];
  return (
    <div className="w-100vw flex justify-between md:justify-evenly lg:justify-between md:px-8 md:py-2 items-center">
      {/* left */}
      <div className="relative p-4 items-center flex md:w-auto md:h-3">
        <SvgLogo className="object-cover cursor-pointer" />
        <ul className="hidden md:flex space-x-4 pl-10">
          {buttons.map((button) => (
            <NavBtn title={button.title} arrow={button.arrow} />
          ))}
        </ul>
      </div>

      {/* rigth */}
      <div className="md:hidden p-2">
        <RiMenuFill className="w-7 h-7" />
      </div>
      <div className="hidden md:flex space-x-4 text-[#B2B2B2] font-semibold drop-shadow-sm">
        <button className="py-2 px-3 hover:text-lg hover:text-black hover:font-bold duration-200">Log in</button>
        <button className="py-2 px-3 rounded-xl border-2 border-black hover:bg-black hover:text-white duration-200 ease-in">Register</button>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const NavBtn = ({ title, arrow }) => {
  return (
    <div className="flex items-center group cursor-pointer">
      <p>{title}</p>
      <MdOutlineKeyboardArrowDown className="group-hover:translate-y-[0.18rem] duration-100 ease-out" />
    </div>
  );
};

export default NavBtn;
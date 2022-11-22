// import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Menu } from '@headlessui/react';
import { Fragment } from 'react';

const NavBtn = ({ title, arrow }) => {
  // const [isActive, setIsActive] = useState(false);
  const links = [
    { href: '/todo-list', label: 'Todo List' },
    { href: '/calender', label: 'Calender' },
    { href: '/reminders', label: 'Reminders' },
    { href: '/planing', label: 'Planing' },
  ];
  return (
    <div className="flex items-center group cursor-pointer font-bold drop-shadow-sm ">
      {/* <div onClick={(e) => setIsActive(!isActive)}>{title}</div> */}
      {/* <div>{title}</div> */}
      <div>
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center hover:text-black duration-200 text-[#B2B2B2]">
            {title}
            <MdOutlineKeyboardArrowDown className="group-hover:translate-y-[0.18rem] duration-100 ease-out" />
          </Menu.Button>
          <Menu.Items className="absolute top-full shadow-xl bg-white w-56">
            {links.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <Menu.Item key={link.href} as={Fragment} className="py-3 px-6 flex hover:bg-black hover:text-white">
                {({ active }) => (
                  <a href={link.href} className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}>
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>

      {/* <div>
        {isActive && (
          <div className="w-full h-auto p-10 m-auto bg-blue-200 absolute">
            <div>
              <p>testing dropdown</p>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default NavBtn;

// import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Menu, Transition } from '@headlessui/react';
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
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute top-full w-60 bg-white shadow-lg flex flex-col">
              {links.map((link) => (
                <Menu.Item key={link.href} as={Fragment} className="p-2 border-b-2 hover:bg-black hover:text-white">
                  {({ active }) => (
                    <a href={link.href} className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}>
                      {link.label}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default NavBtn;

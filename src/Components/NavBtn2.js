import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const NavBtn2 = ({ title2, arrow2 }) => {
  const links = [
    { href: '/history', label: 'History' },
    { href: '/our-team', label: 'Our Team' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <div className="flex items-center group cursor-pointer font-bold drop-shadow-sm ">
      <div>
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center hover:text-black duration-200 text-[#B2B2B2]">
            {title2}
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
            <Menu.Items className="absolute top-full -right-0 w-36 bg-white shadow-2xl rounded flex flex-col">
              {links.map((link) => (
                <Menu.Item key={link.href} as={Fragment} className="p-2 hover:bg-black hover:text-white rounded">
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

export default NavBtn2;

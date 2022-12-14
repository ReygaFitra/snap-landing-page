import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Menu, Transition } from '@headlessui/react';
import SvgTodo from './SvgTodo';
import SvgCalender from './SvgCalender';
import SvgReminders from './SvgReminders';
import SvgPlan from './SvgPlan';

const NavBtn = ({ features, company }) => {
  const links = [
    { href: '/todo-list', logo: <SvgTodo />, label: 'Todo List' },
    { href: '/calender', logo: <SvgCalender />, label: 'Calender' },
    { href: '/reminders', logo: <SvgReminders />, label: 'Reminders' },
    { href: '/planing', logo: <SvgPlan />, label: 'Planing' },
  ];

  const links2 = [
    { href2: '/history', label2: 'History' },
    { href2: '/our-team', label2: 'Our Team' },
    { href2: '/blog', label2: 'Blog' },
  ];

  return (
    <div className="flex items-center group cursor-pointer font-semibold drop-shadow-sm ">
      <div>
        <Menu>
          <Menu.Button className="flex items-center hover:text-black duration-200 text-[#B2B2B2]">
            {features}
            {/* <MdOutlineKeyboardArrowDown className="group-hover:translate-y-[0.18rem] group-hover:rotate-180 duration-100 ease-out" /> */}
          </Menu.Button>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items key={features} className="absolute top-full -right-0 w-40 bg-white shadow-2xl rounded flex flex-col">
              {links.map((link) => (
                <Menu.Item key={link.href} className="p-2 hover:bg-black hover:text-white rounded flex items-center justify-start gap-2">
                  {({ active }) => (
                    <a href={link.href} className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}>
                      <li>{link.logo}</li>
                      <li>{link.label}</li>
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>

        <Menu>
          <Menu.Button className="flex items-center hover:text-black duration-200 text-[#B2B2B2]">
            {company}
            {/* <MdOutlineKeyboardArrowDown className="group-hover:translate-y-[0.18rem] group-hover:rotate-180 duration-100 ease-out" /> */}
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items key={company} className="absolute top-full -right-0 w-40 bg-white shadow-2xl rounded flex flex-col">
              {links2.map((link2) => (
                <Menu.Item key={link2.href2} className="p-2 hover:bg-black hover:text-white rounded flex items-center justify-start gap-2">
                  {({ active }) => (
                    <a href={link2.href2} className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}>
                      <li>{link2.label2}</li>
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

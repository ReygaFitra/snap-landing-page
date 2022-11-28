import React from 'react';
import { useState, Fragment } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import SvgHumburgerMenu from './SvgHumburgerMenu';
import { Disclosure } from '@headlessui/react';
import SvgTodo from './SvgTodo';
import SvgCalender from './SvgCalender';
import SvgReminders from './SvgReminders';
import SvgPlan from './SvgPlan';
import AuthBtn from './AuthBtn';
import AuthBtn2 from './AuthBtn2';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const HumbergerMenu = () => {
  let [isOpen, setIsOpen] = useState(false);

  let navTitle = {
    features: 'Features',
    company: 'Company',
  };

  let links = [
    { href: '/todo-list', logo: <SvgTodo />, label: 'Todo List' },
    { href: '/calender', logo: <SvgCalender />, label: 'Calender' },
    { href: '/reminders', logo: <SvgReminders />, label: 'Reminders' },
    { href: '/planing', logo: <SvgPlan />, label: 'Planing' },
  ];

  const links2 = [
    { href: '/history', label: 'History' },
    { href: '/our-team', label: 'Our Team' },
    { href: '/blog', label: 'Blog' },
  ];

  let linkList = links.map((link) => (
    <a href={link.href} className="flex list-none py-1 items-center gap-2 font-semibold drop-shadow-sm hover:text-black duration-200 text-[#B2B2B2]">
      <li>{link.logo}</li>
      <li>{link.label}</li>
    </a>
  ));

  let linkList2 = links2.map((link2) => (
    <a href={link2.href} className="flex list-none py-1 items-center gap-2 font-semibold drop-shadow-sm hover:text-black duration-200 text-[#B2B2B2]">
      <li>{link2.logo}</li>
      <li>{link2.label}</li>
    </a>
  ));

  return (
    <div className="flex">
      <button onClick={() => setIsOpen(true)}>
        <SvgHumburgerMenu />
      </button>
      <Transition show={isOpen} enter="transition" enterFrom="opacity-0 duration-300" enterTo="opacity-100 duration-300" leave="transition" leaveFrom="opacity-100 duration-300" leaveTo="opacity-0 duration-300" as={Fragment}>
        <Dialog as="div" open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-end">
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Panel className="min-w-[60%] max-w-[60%] h-screen p-8 rounded bg-white shadow-lg z-10">
            {/* Disclosure Start */}
            <Disclosure>
              {({ open }) => (
                <div>
                  <Disclosure.Button className="py-2 flex group items-center gap-1 font-semibold">
                    {navTitle.features}
                    <MdOutlineKeyboardArrowDown className="group-hover:translate-y-[0.18rem] group-hover:rotate-180 duration-100 ease-out" />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500">{linkList}</Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <div>
                  <Disclosure.Button className="py-2 flex group items-center gap-1 font-semibold">
                    {navTitle.company}
                    <MdOutlineKeyboardArrowDown className="group-hover:translate-y-[0.18rem] group-hover:rotate-180 duration-100 ease-out" />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500">{linkList2}</Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            <div className="font-semibold">
              <a href="#">Careers</a>
            </div>
            <div className="font-semibold">
              <a href="#">About</a>
            </div>
            <>
              <AuthBtn />
            </>
            <>
              <AuthBtn2 />
            </>
            {/* Disclosure End */}
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </div>
  );
};

export default HumbergerMenu;

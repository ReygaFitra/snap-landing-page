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

const HumbergerMenu = () => {
  let [isOpen, setIsOpen] = useState(false);

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
                  <Disclosure.Button className="py-2">Features</Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500"></Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <div>
                  <Disclosure.Button className="py-2">Company</Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500"></Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            <div>
              <a href="#">Careers</a>
            </div>
            <div>
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

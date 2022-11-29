import React from 'react';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Tab } from '@headlessui/react';

const AuthBtn2 = () => {
  let [isOpen, setIsOpen] = React.useState(false);

  let title = {
    login: 'Log in',
    regis: 'Register',
  };

  return (
    <div className="flex">
      <button onClick={() => setIsOpen(true)} className="py-2 px-3 text-black rounded-xl border-2 w-full font-semibold border-black hover:bg-black hover:text-white duration-200 ease-in">
        {title.regis}
      </button>
      <Transition show={isOpen} enter="transition" enterFrom="opacity-0 duration-300" enterTo="opacity-100 duration-300" leave="transition" leaveFrom="opacity-100 duration-300" leaveTo="opacity-0 duration-300" as={Fragment}>
        <Dialog as="div" open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center">
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Panel className="min-w-[90%] max-w-[90%] md:min-w-[45%] md:max-w-[45%] max-h-[100%] p-14 rounded z-10">
            {/* Tab start */}
            <Tab.Group defaultIndex={1}>
              <Tab.List className="space-x-1 flex justify-center py-1 px-1 rounded-xl bg-white">
                <div>
                  <Tab className={({ selected }) => `${selected ? 'bg-yellow-500 text-black font-semibold' : 'bg-yellow-50 text-yellow-500 font-semibold'} py-2 px-6 md:px-24 rounded-l-xl`}>
                    <button>Log in</button>
                  </Tab>
                  <Tab className={({ selected }) => `${selected ? 'bg-yellow-500 text-black font-semibold' : 'bg-yellow-50 text-yellow-500 font-semibold'} py-2 px-6 md:px-24 rounded-r-xl`}>
                    <button>Register</button>
                  </Tab>
                </div>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel className="w-full rounded-xl mt-2 flex justify-center">
                  <form method="post" className="bg-white shadow-lg p-5 rounded-xl min-w-full">
                    <label id="email">Email :</label>
                    <input type="text" id="email" for="email" className="w-full px-2 py-1 rounded ring-2 ring-yellow-500" placeholder="Email"></input>
                    <br />
                    <label id="password">Password :</label>
                    <input type="password" id="password" for="password" className="w-full px-2 py-1 rounded ring-2 ring-yellow-500" placeholder="Password"></input>
                    <div className="font-bold text-yellow-500 text-sm py-2">
                      <a href="#" className="hover:text-black duration-100">
                        Forgot Password?
                      </a>
                    </div>
                    <br />
                    <button onClick={() => setIsOpen(false)} className="bg-red-200 text-red-400 font-semibold py-2 px-3 rounded mr-1 hover:bg-red-100 duration-100">
                      Close
                    </button>
                    <button onClick={() => setIsOpen(false)} className="bg-emerald-200 text-emerald-400 font-semibold py-2 px-3 rounded inline-flex ml-1 hover:bg-emerald-100 duration-100">
                      Confirm
                    </button>
                  </form>
                </Tab.Panel>
                <Tab.Panel className="w-full rounded-xl mt-2 flex justify-center">
                  <form method="post" className="bg-white shadow-lg p-5 rounded-xl min-w-full">
                    <label id="name">Full Name :</label>
                    <input type="text" id="name" for="name" className="w-full px-2 py-1 rounded ring-2 ring-yellow-500" placeholder="Full Name"></input>
                    <br />
                    <label id="email">Email :</label>
                    <input type="text" id="email" for="email" className="w-full px-2 py-1 rounded ring-2 ring-yellow-500" placeholder="Email"></input>
                    <br />
                    <label id="password">Password :</label>
                    <input type="password" id="password" for="password" className="w-full px-2 py-1 rounded ring-2 ring-yellow-500" placeholder="Password"></input>
                    <br />
                    <label id="cnfpassword">Confirm Password :</label>
                    <input type="password" id="cnfpassword" for="cnfpassword" className="w-full px-2 py-1 rounded ring-2 ring-yellow-500" placeholder="Confirm Password"></input>
                    <br />
                    <br />
                    <button onClick={() => setIsOpen(false)} className="bg-red-200 text-red-400 font-semibold py-2 px-3 rounded mr-1 hover:bg-red-100 duration-100">
                      Close
                    </button>
                    <button onClick={() => setIsOpen(false)} className="bg-emerald-200 text-emerald-400 font-semibold py-2 px-3 rounded inline-flex ml-1 hover:bg-emerald-100 duration-100">
                      Confirm
                    </button>
                  </form>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
            {/* Tab End */}
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AuthBtn2;

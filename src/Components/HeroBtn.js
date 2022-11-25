import React from 'react';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const HeroBtn = () => {
  let [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex">
      <button onClick={() => setIsOpen(true)} className="bg-black text-white rounded-xl py-3 px-7 inline-flex hover:-translate-y-1 duration-100 md:ml-10 mx-auto mb-2">
        Clcik Me!
      </button>
      <Transition show={isOpen} enter="transition" enterFrom="opacity-0 duration-300" enterTo="opacity-100 duration-300" leave="transition" leaveFrom="opacity-100 duration-300" leaveTo="opacity-0 duration-300" as={Fragment}>
        <Dialog as="div" open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center">
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Panel className="min-w-[80%] max-w-[80%] md:min-w-[40%] max-w-[65%] p-8 rounded bg-white shadow-lg z-10">
            <Dialog.Title className="font-bold text-xl py-3">In Development!!!</Dialog.Title>
            <Dialog.Description className="font-semibold text-slate-400 py-2">Coming Soon...</Dialog.Description>
            <button onClick={() => setIsOpen(false)} className="bg-red-200 text-red-400 font-semibold py-2 px-3 rounded mr-1 hover:bg-red-100 duration-100">
              Cancel
            </button>
            <button onClick={() => setIsOpen(false)} className="bg-emerald-200 text-emerald-400 font-semibold py-2 px-3 rounded inline-flex ml-1 hover:bg-emerald-100 duration-100">
              Confirm
            </button>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </div>
  );
};

export default HeroBtn;

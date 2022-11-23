import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

const HeroBtn = () => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="bg-black text-white rounded-xl py-3 px-7 inline-flex my-3 md:ml-10">Learn More</button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="inset-0 fixed bg-[rgba(0,0,0,0.35)]" />
        <div className="flex justify-center">
          <AlertDialog.Content className="top-40 right-5 md:right-16 m-auto w-[90vw] max-w[500px] max-h-[85vh] fixed h-auto bg-white shadow-xl p-5 flex flex-wrap flex-col justify-center items-center rounded">
            <AlertDialog.Title className="font-bold text-xl py-3">In Development!</AlertDialog.Title>
            <AlertDialog.Description className="font-semibold text-slate-400 py-2">Coming Soon...</AlertDialog.Description>
            <div className="flex gap-4 m-5">
              <AlertDialog.Cancel>
                <button className="bg-red-400 text-white py-3 px-7 rounded inline-flex">Cancel</button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <button className="bg-emerald-500 text-white py-3 px-7 rounded inline-flex">Confirm</button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </div>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default HeroBtn;

import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { useTransition, animated, config } from 'react-spring';

const HeroBtn = () => {
  const [open, setOpen] = React.useState(false);
  const transition = useTransition(open, {
    from: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 10 },
    config: config.stiff,
  });

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Trigger asChild>
        <button className="bg-black text-white rounded-xl py-3 px-7 inline-flex my-3 md:ml-10 hover:-translate-y-1 duration-100">Learn More</button>
      </AlertDialog.Trigger>
      {transition((styles, item) =>
        item ? (
          <AlertDialog.Portal>
            <AlertDialog.Overlay className="inset-0 fixed bg-[rgba(0,0,0,0.35)]" forceMount />
            <animated.div
              style={{
                opacity: styles.opacity,
              }}
            />
            <div className="flex justify-center">
              <AlertDialog.Content className="top-40 right-5 md:right-16 m-auto w-[90vw] max-w[500px] max-h-[85vh] fixed h-auto bg-white shadow-xl p-5 flex flex-wrap flex-col justify-center items-center rounded" forceMount asChild>
                <animated.div style={styles}>
                  <AlertDialog.Title className="font-bold text-xl py-3">In Development!</AlertDialog.Title>
                  <AlertDialog.Description className="font-semibold text-slate-400 py-2">Coming Soon...</AlertDialog.Description>
                  <div className="flex gap-4 m-5">
                    <AlertDialog.Cancel>
                      <button className="bg-red-200 hover:bg-red-300 text-red-500 duration-100 font-semibold py-2 px-7 rounded inline-flex">Cancel</button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                      <button className="bg-emerald-200 hover:bg-emerald-300 font-semibold text-emerald-500 duration-100 py-2 px-7 rounded inline-flex">Confirm</button>
                    </AlertDialog.Action>
                  </div>
                </animated.div>
              </AlertDialog.Content>
            </div>
          </AlertDialog.Portal>
        ) : null
      )}
    </AlertDialog.Root>
  );
};

export default HeroBtn;

import React from 'react';

const TextContents = ({ title, content }) => {
  return (
    <div className="px-10 py-1 md:text-start">
      <div className="text-3xl font-bold md:text-6xl ">{title}</div>
      <p className="text-lg font-semibold my-5 md:text-xl text-[#B2B2B2]">{content}</p>
    </div>
  );
};

export default TextContents;

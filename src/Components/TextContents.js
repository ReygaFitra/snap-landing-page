import React from 'react';

const TextContents = ({ title, content }) => {
  return (
    <div className="px-10 py-2 md:text-start">
      <h1 className="text-3xl font-bold md:text-7xl ">{title}</h1>
      <p className="text-lg font-semibold my-5 md:text-xl">{content}</p>
    </div>
  );
};

export default TextContents;

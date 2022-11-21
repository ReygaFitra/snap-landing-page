import React from 'react';

const TextContents = ({ title, content }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-semibold my-6">{content}</p>
    </div>
  );
};

export default TextContents;

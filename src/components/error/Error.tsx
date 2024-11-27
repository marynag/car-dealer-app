import React from 'react';

type ErrorProps = {
  text: string;
};

export const Error = ({ text }: ErrorProps) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-10">
      <strong className="font-bold">Error!</strong>{' '}
      <span className="block sm:inline">{text}</span>
    </div>
  );
};

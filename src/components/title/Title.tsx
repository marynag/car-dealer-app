import React from 'react';

type Props = {
  text: string;
};

export const Title = ({ text }: Props) => {
  return (
    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl px-10 text-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500">
        {text}
      </span>
    </h1>
  );
};

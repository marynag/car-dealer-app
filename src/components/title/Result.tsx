import React from 'react';
import { Title } from './Title';
import { Error } from '../error/Error';

type IResultProps = {
  data: any[];
  success: boolean;
};

export const Result = ({ data, success }: IResultProps) => {
  return (
    <div className="w-full">
      <Title text="Result" />
      {success ? (
        <div className="flex gap-6 flex-wrap px-12 py-10 justify-center">
          {data.map((item, index) => (
            <p
              key={index}
              className="border border-grey-400 rounded-xl p-4 hover:bg-gray-100"
            >
              {item.Model_Name}
            </p>
          ))}
        </div>
      ) : (
        <Error text="The error occurred while loading data" />
      )}
    </div>
  );
};

'use client';
import { VehicleMake } from '@/src/app/actions';
import React, { useState } from 'react';
import { getYearsFromToCurrent } from './utils';
import { Title } from '../title/Title';
import { Button } from '../button/Button';
import { Dropdown, Option } from '../dropdown/Dropdown';
import { Error } from '../error/Error';

type Props = {
  options: VehicleMake[];
  isLoaded: boolean;
};

export const Filter = ({ options, isLoaded }: Props) => {
  const [vehicleMakes, setVehicleMakes] = useState<string>();
  const [year, setYear] = useState<string>();

  const formattedOptions: Option[] = options.map((option) => {
    return {
      label: option?.MakeName,
      value: option?.MakeId,
    };
  });

  const years: Option[] = getYearsFromToCurrent();

  return (
    <div className="flex flex-col gap-12">
      <Title text="Find your vehicle" />

      <div className="flex md:flex-row gap-8 flex-col w-full md:p-10">
        {isLoaded && options.length ? (
          <Dropdown
            label="Vehicle Makes"
            options={formattedOptions}
            onChange={(val) => setVehicleMakes(val)}
          />
        ) : (
          <Error text="The error occurred while loading data" />
        )}
        <Dropdown
          label="Model Year"
          options={years}
          onChange={(val) => setYear(val)}
        />
      </div>
      <Button vehicleMakes={vehicleMakes} year={year} />
    </div>
  );
};

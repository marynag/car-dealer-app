'use client';
import { VehicleMake } from '@/src/app/actions';
import React, { useState } from 'react';
import { Select, Option } from '@material-tailwind/react';
import { getYearsFromToCurrent } from './utils';
import { Title } from '../title/Title';
import { Button } from '../button/Button';
import { Dropdown } from '../dropdown/Dropdown';

type Props = {
  options: VehicleMake[];
  isLoaded: boolean;
};

export const Filter = ({ options, isLoaded }: Props) => {
  const [vehicleMakes, setVehicleMakes] = useState<string>();
  const [year, setYear] = useState<string>();

  const formattedOptions = options.map((option) => option?.MakeName);

  const years = getYearsFromToCurrent();

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
          <p className="text-red-800">
            The error occurred while loading options
          </p>
        )}
        <Dropdown
          label="Model Years"
          options={years.map(String)}
          onChange={(val) => setYear(val)}
        />
      </div>
      <Button vehicleMakes={vehicleMakes} year={year} />
    </div>
  );
};

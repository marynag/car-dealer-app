"use client";
import { VehicleMake } from "@/src/app/actions";
import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import { getYearsFromToCurrent } from "./utils";

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

      <div className="flex md:flex-row gap-8 flex-col w-full md:p-10">
        {isLoaded && options.length ? (
          <Select
            size="md"
            label="Select Vehicle Makes"
            onChange={(val) => setVehicleMakes(val)}
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            {formattedOptions.map((option) => (
              <Option key={option}>{option}</Option>
            ))}
          </Select>
        ) : (
          <p className="text-red-800">
            The error occurred while loading options
          </p>
        )}
        <Select
          size="lg"
          label="Select Model Years"
          onChange={(val) => setYear(val)}
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
        >
          {years.map((option) => (
            <Option key={option}>{option}</Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

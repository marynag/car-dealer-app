import { START_YEARS } from "@/src/constants/constants";

export const getYearsFromToCurrent = (): number[] => {
  const currentYear = new Date().getFullYear();
  const years: number[] = [];
  for (let year = START_YEARS; year <= currentYear; year++) {
    years.push(year);
  }
  return years;
};

import { START_YEARS } from '@/src/constants/constants';
import { Option } from '@/src/components/dropdown/Dropdown';

export const getYearsFromToCurrent = (): Option[] => {
  const currentYear = new Date().getFullYear();
  const years: Option[] = [];
  for (let year = START_YEARS; year <= currentYear; year++) {
    years.push({
      label: `${year}`,
      value: year,
    });
  }
  return years;
};

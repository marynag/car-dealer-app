import Link from 'next/link';

type ButtonProps = {
  vehicleMakes?: string;
  year?: string;
};

export const Button = ({ vehicleMakes, year }: ButtonProps) => {
  const disabled = !vehicleMakes || !year;

  return (
    <Link
      type="submit"
      className={`text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 col-span-2  ${
        disabled ? 'opacity-50' : 'cursor-pointer'
      }`}
      href={disabled ? '#' : `/result/${vehicleMakes}/${year}`}
    >
      Next
    </Link>
  );
};

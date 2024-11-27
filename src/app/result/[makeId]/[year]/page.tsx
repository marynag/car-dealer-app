import { getVehicles } from '@/src/app/actions';
import { Result } from '@/src/components/title/Result';

interface IPageProps {
  params: IParams;
}

interface IParams {
  makeId: number;
  year: number;
}

const Page = async ({ params }: IPageProps) => {
  const { makeId, year } = params;

  const { data, success } = await getVehicles(makeId, year);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex w-full flex-col row-start-2 items-center ">
        <Result data={data ?? []} success={success} />
      </div>
    </div>
  );
};

export default Page;

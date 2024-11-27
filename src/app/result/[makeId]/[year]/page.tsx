import { getVehicleMakes, getVehicles } from '@/src/app/actions';
import { getYearsFromToCurrent } from '@/src/components/filter/utils';
import { Loading } from '@/src/components/loading/Loading';
import { Result } from '@/src/components/result/Result';

import { Suspense } from 'react';
interface PageProps {
  params: IParams;
}

type IParams = Promise<{ makeId: string; year: string }>;
const Page = async ({ params }: PageProps) => {
  const { makeId, year } = await params;

  const { data, success } = await getVehicles(Number(makeId), Number(year));

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex w-full flex-col row-start-2 items-center ">
        <Suspense fallback={<Loading />}>
          <Result data={data ?? []} success={success} />
        </Suspense>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const { data } = await getVehicleMakes();

  const years = getYearsFromToCurrent();

  const params = data.flatMap((make: { MakeId: number }) =>
    years.map((year) => ({
      makeId: make.MakeId.toString(),
      year: year.toString(),
    }))
  );

  return params;
}

export default Page;

import { Suspense } from 'react';
import { Filter } from '../components/filter/Filter';
import { getVehicleMakes } from './actions';
import { Loading } from '../components/loading/Loading';

export default async function Home() {
  const { data, success } = await getVehicleMakes();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-full flex-col row-start-2 items-center ">
        <Suspense fallback={<Loading />}>
          <Filter options={data ?? []} isLoaded={success} />
        </Suspense>
      </main>
    </div>
  );
}

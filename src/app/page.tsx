import type { NextPage } from 'next';
import SwapTokenComponent from './components/swap-token';
import Navbar from './components/navbar';
import AssetsListTable from './components/assets-list-table';

const Main: NextPage = async () => {
  return (
    <div className="relative flex w-full flex-col items-end justify-start overflow-x-hidden bg-black px-5 pb-52 pt-2 leading-[normal] tracking-[normal] sm:px-10 md:px-32">
      <div className="absolute left-[0px] right-[0px] top-[0px] !m-[0] h-[839px] w-full">
        <img
          className="absolute bottom-[0px] left-[-80px] top-[0px] h-full max-h-full w-[1600px] object-cover"
          alt=""
          src="/bg@2x.png"
        />
      </div>
      <Navbar />
      <main className="flex max-w-full flex-col items-end justify-start gap-[50px] self-stretch mq750:gap-[25px]">
        <section className="box-border flex w-full max-w-full flex-row items-start justify-center px-5 py-14 text-center font-roboto text-6xl text-white">
          <div className="flex w-[777px] max-w-full flex-col items-start justify-start gap-[30px]">
            <h1 className="font-inherit relative z-[1] m-0 self-stretch font-normal leading-[75.6px] tracking-[0.68px] text-inherit mq750:text-[54px] mq750:leading-[60px] mq450:text-[41px] mq450:leading-[45px]">
              Easy send and Request Crypto.
            </h1>
            <div className="box-border flex max-w-full flex-row items-start justify-center self-stretch px-5 py-0 text-xl">
              <div className="relative z-[1] inline-block w-[550px] max-w-full shrink-0 leading-[27.3px] mq450:text-base mq450:leading-[22px]">
                Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone
                in between.
              </div>
            </div>
          </div>
        </section>
        <section className="z-[1] flex w-full max-w-full flex-col items-center gap-y-20 text-left font-roboto text-xl text-zinc-50">
          <AssetsListTable />
          <SwapTokenComponent />
        </section>
      </main>
    </div>
  );
};

export default Main;

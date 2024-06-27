'use client';

import type { NextPage } from 'next';
import TokenSelect from './token-select';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export type ComponentType = {
  className?: string;
};

const SwapTokenComponent: NextPage<ComponentType> = ({ className = '' }) => {
  const [swap_token, setSwapToken] = useState(false);

  const [fromToken, setFromToken] = useState({
    image: '/phcurrencybtcbold.svg',
    name: 'BTC',
    balance: '24,240',
  });

  const [toToken, setToToken] = useState({
    image: '/mingcutebnbline.svg',
    name: 'BNB',
    balance: '63,790',
  });

  return (
    <div
      className={`box-border flex w-full max-w-full flex-col items-start justify-start overflow-hidden rounded-3xs border-[1px] border-solid border-darkslategray-100 bg-gray-300 p-10 text-left font-roboto text-xl text-zinc-50 [backdrop-filter:blur(30px)] ${className}`}>
      <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-0 pb-5 pt-0">
        <div className="flex max-w-full flex-1 flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="box-border flex w-[137px] flex-col items-start justify-start px-0 pb-0 pt-[4.5px]">
            <div className="relative self-stretch overflow-hidden text-ellipsis whitespace-nowrap font-semibold mq450:text-base">
              SWAP TOKENS
            </div>
          </div>
          <img
            className="relative h-8 w-8 shrink-0 overflow-hidden"
            loading="lazy"
            alt=""
            src="/letsiconssettingaltfill.svg"
          />
        </div>
      </div>
      <div className="text-31xl flex max-w-full flex-row items-start justify-start gap-[3px] self-stretch pb-5 mq1225:flex-wrap">
        <div className="box-border flex min-w-[357px] max-w-full flex-1 flex-row items-start justify-between gap-[20px] rounded-bl-lg rounded-br-none rounded-tl-lg rounded-tr-none bg-gray-200 px-[50px] py-5 mq750:min-w-full mq450:box-border mq450:flex-wrap mq450:pl-5 mq450:pr-5">
          <div className="flex w-[100px] flex-col items-start justify-start gap-[4px]">
            <input
              min={0}
              type="number"
              placeholder="0.00"
              className="mq750:text-21xl mq450:text-11xl relative appearance-none self-stretch overflow-hidden text-ellipsis whitespace-nowrap bg-transparent font-semibold outline-none"
            />
            <div className="relative inline-block w-9 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium text-dimgray">
              $0.00
            </div>
          </div>
          <TokenSelect
            selectedToken={fromToken}
            onSelectToken={(token) => {
              setFromToken(token);
            }}
          />
        </div>
        <div className="relative box-border flex min-w-[357px] max-w-full flex-1 flex-row items-start justify-between gap-[20px] rounded-bl-none rounded-br-lg rounded-tl-none rounded-tr-lg bg-gray-200 px-[50px] py-5 mq750:min-w-full mq450:box-border mq450:flex-wrap mq450:pl-5 mq450:pr-5">
          <div className="flex w-[100px] flex-col items-start justify-start gap-[4px]">
            <input
              min={0}
              type="number"
              placeholder="0.00"
              className="mq750:text-21xl mq450:text-11xl relative appearance-none self-stretch overflow-hidden text-ellipsis whitespace-nowrap bg-transparent font-semibold outline-none"
            />

            <div className="relative inline-block w-9 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium text-dimgray">
              $0.00
            </div>
          </div>
          <TokenSelect
            selectedToken={toToken}
            onSelectToken={(token) => {
              setToToken(token);
            }}
          />

          <img
            onClick={() => {
              const temp = fromToken;
              setFromToken(toToken);
              setToToken(temp);
              setSwapToken((prev) => !prev);
            }}
            className={clsx(
              'absolute z-[1] !m-[0] size-[40px] shrink-0 cursor-pointer overflow-hidden rounded-6xl transition-all duration-500 ease-in-out md:hidden md:size-[50px]',
              swap_token ? 'rotate-180' : 'rotate-0',
              'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2',
            )}
            loading="lazy"
            alt=""
            src="/frame-36.svg"
          />
          <img
            onClick={() => {
              const temp = fromToken;
              setFromToken(toToken);
              setToToken(temp);
              setSwapToken((prev) => !prev);
            }}
            className={clsx(
              'absolute z-[1] !m-[0] hidden size-[40px] shrink-0 cursor-pointer overflow-hidden rounded-6xl transition-all duration-500 ease-in-out md:flex md:size-[50px]',
              swap_token ? 'rotate-180' : 'rotate-0',
              'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
            )}
            loading="lazy"
            alt=""
            src="/frame-36.svg"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[20px] self-stretch text-sm">
        <div className="flex flex-row items-start justify-center self-stretch px-5 py-0">
          <button className="flex cursor-pointer flex-row items-start justify-start whitespace-nowrap rounded-bl-none rounded-br-lg rounded-tl-lg rounded-tr-none bg-blueviolet px-[70px] py-4 [backdrop-filter:blur(4px)] [border:none] hover:bg-darkorchid-100 mq450:box-border mq450:pl-5 mq450:pr-5">
            <div className="relative inline-block min-w-[110px] text-left font-roboto text-base font-medium text-white">
              SWOP TOKENS
            </div>
          </button>
        </div>
        <div className="flex flex-row items-start justify-between gap-[20px] self-stretch mq450:flex-wrap mq450:justify-center">
          <div className="flex w-[133px] flex-col items-start justify-start gap-[4px]">
            <div className="relative self-stretch whitespace-nowrap">
              1 {fromToken.name} = 32.4039 {toToken.name}
            </div>
            <div className="relative inline-block w-[83px] overflow-hidden text-ellipsis whitespace-nowrap text-royalblue">
              Free exchage
            </div>
          </div>
          <div className="box-border flex w-[85px] flex-col items-start justify-start px-0 pb-0 pt-2.5 text-dimgray">
            <div className="relative self-stretch overflow-hidden text-ellipsis whitespace-nowrap">Updates in 4s</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapTokenComponent;

'use client';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import clsx from 'clsx';
import type { NextPage } from 'next';

export type TokenSelectType = {
  className?: string;
  selectedToken: {
    name: string;
    balance: string;
    image: string;
  };
  onSelectToken: (token: { name: string; balance: string; image: string }) => void;
};

const tokens = [
  {
    name: 'BTC',
    balance: '24,240',
    image: '/phcurrencybtcbold.svg',
  },
  {
    name: 'BNB',
    balance: '63,790',
    image: '/mingcutebnbline.svg',
  },
];

const TokenSelect: NextPage<TokenSelectType> = ({ className = '', selectedToken, onSelectToken }) => {
  return (
    <div
      className={clsx(
        'relative flex w-[122px] flex-col items-start justify-start gap-2 text-left font-roboto text-xl text-gray-100',
        className,
      )}>
      <Menu>
        <MenuButton className="flex flex-row items-center justify-center gap-[8px] self-stretch bg-black px-3 py-2">
          <img
            className="relative h-8 min-h-[32px] w-8 shrink-0 overflow-hidden"
            loading="lazy"
            alt=""
            src={selectedToken.image}
          />
          <div className="flex flex-1 flex-row items-center justify-start gap-[4px]">
            <div className="relative flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-medium mq450:text-base">
              {selectedToken.name}
            </div>
            <img
              className="relative h-8 w-4 shrink-0 overflow-hidden"
              loading="lazy"
              alt=""
              src="/weuiarrowoutlined.svg"
            />
          </div>
        </MenuButton>
        <MenuItems className="z-50" anchor="bottom">
          {tokens.map((token, index) => (
            <MenuItem key={index}>
              <div
                onClick={() => {
                  onSelectToken(token);
                }}
                className="flex min-w-40 flex-row items-center justify-start gap-[8px] self-stretch bg-black px-3 py-2">
                <img
                  className="relative size-6 min-h-[32px] shrink-0 overflow-hidden"
                  loading="lazy"
                  alt=""
                  src={token.image}
                />
                <div className="flex flex-1 flex-row items-center justify-start gap-[4px]">
                  <div className="relative flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-medium text-white mq450:text-base">
                    {token.name}
                  </div>
                </div>
              </div>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>

      <div className="flex w-[101px] flex-row items-start justify-start gap-[4px] text-sm text-zinc-50">
        <div className="relative flex-1 overflow-hidden text-ellipsis whitespace-nowrap">Balance:</div>
        <div className="relative inline-block w-[43px] overflow-hidden text-ellipsis whitespace-nowrap text-royalblue">
          {selectedToken.balance}
        </div>
      </div>
    </div>
  );
};

export default TokenSelect;

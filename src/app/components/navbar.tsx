import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="z-20 flex w-full flex-row items-center justify-between gap-5">
      <nav className="flex w-full items-center justify-between px-0 pb-0 pt-2.5">
        <Link href="/" className="logo relative">
          <img className="z-[1] h-8 shrink-0 md:h-12" loading="lazy" alt="" src="/logo-image.svg" />
        </Link>

        <div className="m-0 hidden w-full flex-row items-center justify-center gap-5 self-stretch text-left font-roboto text-sm text-white md:flex">
          <Link
            href="/"
            className="relative z-[1] inline-block min-w-[53px] font-medium text-[inherit] [text-decoration:none]">
            Exchage
          </Link>
          <Link
            href="/"
            className="relative z-[1] inline-block min-w-[112px] whitespace-nowrap font-medium text-[inherit] [text-decoration:none]">
            Last Transactions
          </Link>
          <Link
            href="/"
            className="relative z-[1] inline-block min-w-[78px] whitespace-nowrap font-medium text-[inherit] [text-decoration:none]">
            Invite Friend
          </Link>
          <Link
            href="/"
            className="relative z-[1] inline-block min-w-[81px] font-medium text-[inherit] [text-decoration:none]">
            Notifications
          </Link>
        </div>
        <div className="hidden flex-row items-start justify-start gap-[16px] md:flex">
          <button className="z-[1] box-border flex w-16 cursor-pointer flex-row items-start justify-start rounded-bl-none rounded-br-lg rounded-tl-lg rounded-tr-none border-[1px] border-solid border-blueviolet bg-[transparent] px-[9px] py-2 [backdrop-filter:blur(4px)] hover:box-border hover:border-[1px] hover:border-solid hover:border-darkorchid-100 hover:bg-darkorchid-200">
            <a className="relative inline-block min-w-[44px] whitespace-nowrap text-left font-roboto text-sm font-medium text-white [text-decoration:none]">
              LOG IN
            </a>
          </button>
          <button className="z-[1] flex cursor-pointer flex-row items-start justify-start whitespace-nowrap rounded-bl-none rounded-br-lg rounded-tl-lg rounded-tr-none bg-blueviolet p-2.5 [backdrop-filter:blur(4px)] [border:none] hover:bg-darkorchid-100">
            <a className="relative inline-block min-w-[54px] text-left font-roboto text-sm font-medium text-white [text-decoration:none]">
              SIGN UP
            </a>
          </button>
        </div>

        <div className="text-white md:hidden">
          <svg
            className="h-6 w-6 text-white"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

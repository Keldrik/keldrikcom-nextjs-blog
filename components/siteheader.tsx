import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import SiteLogo from './sitelogo';

const Siteheader: React.FunctionComponent = () => {
  const [menushow, setMenushow] = useState<boolean>(false);
  const menuclasses = menushow
    ? 'h-full float-right focus:outline-none transform rotate-90 transition duration-300 md:hidden'
    : 'h-full float-right focus:outline-none transform transition duration-300 md:hidden';
  return (
    <header className="pb-2">
      <div className="flex justify-between items-end">
        <SiteLogo />
        <nav className="">
          <ul className="hidden md:flex justify-between h-full pb-2 text-xl">
            <li className="inline-block self-end transition duration-300">
              <Link href="/">
                <a className="font-medium">BLOG</a>
              </Link>
            </li>
            <li className="inline-block self-end ml-16 transition duration-300">
              <Link href="/thomas-wiegold">
                <a className="font-medium">ABOUT</a>
              </Link>
            </li>
          </ul>
          <button
            className={menuclasses}
            onClick={() => setMenushow(!menushow)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-900 hover:text-gray-500 transition duration-300 ease-in-out h-8"
              viewBox="0 0 24 24"
            >
              <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </nav>
      </div>
      <nav className={menushow ? 'border-gray-600 p-4 md:hidden' : 'hidden'}>
        <ul className="text-xl">
          <li className="border-t border-gray-700 py-2">
            <Link href="/">
              <a className="font-medium" onClick={() => setMenushow(false)}>
                BLOG
              </a>
            </Link>
          </li>
          <li className="border-t border-b border-gray-700 pt-2 pb-2">
            <Link href="/thomas-wiegold">
              <a className="font-medium" onClick={() => setMenushow(false)}>
                ABOUT
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Siteheader;

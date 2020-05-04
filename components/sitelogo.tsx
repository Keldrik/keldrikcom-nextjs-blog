import React from 'react';
import Link from 'next/link';

const SiteLogo: React.FunctionComponent = () => {
  return (
    <div className="flex-shrink pb-1">
      <Link href="/">
        <a>
          <div className="flex items-center">
            <div className="w-10 h-6 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 464 336.01"
                className="fill-current transition duration-300"
              >
                <path
                  d="M200,360a16,16,0,0,1,16,16h80a16,16,0,0,1,16-16H456V96a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V360ZM64,112A16,16,0,0,1,80,96H432a16,16,0,0,1,16,16V336a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16Z"
                  transform="translate(-23.99 -87.99)"
                />
                <path
                  d="M432,112H80V336H432ZM184,192h96v16H184Zm0,24h80v16H184Zm-40,72a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V256a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8Zm0-104a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8ZM264,288H184V272h80v16Zm64-24H184V248H328v16Zm0-80H184V168H328v16Zm0-24H184V144H328v16Z"
                  transform="translate(-23.99 -87.99)"
                />
                <path
                  d="M112,160h16v16H112Z"
                  transform="translate(-23.99 -87.99)"
                />
                <path
                  d="M312,376a16,16,0,0,1-16,16H216a16,16,0,0,1-16-16h0L24,376v24a24,24,0,0,0,24,24H464a24,24,0,0,0,24-24V376H312ZM88,408H40V392H88v16Zm384,0H424V392h48Z"
                  transform="translate(-23.99 -87.99)"
                />
                <path
                  d="M112,264h16v16H112Z"
                  transform="translate(-23.99 -87.99)"
                />
              </svg>
            </div>
            <h2 className="uppercase text-3xl transition duration-300">
              Keldrik
            </h2>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default SiteLogo;

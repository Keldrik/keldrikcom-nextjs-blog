import React from 'react';
import Link from 'next/link';

const SiteLogo: React.FunctionComponent = () => {
  return (
    <div className="flex-shrink pb-1">
      <Link href="/">
        <a>
          <img
            src="/img/logo.png"
            className="w-48 h-auto hover:opacity-50 transform hover:scale-95 transition duration-500"
          />
        </a>
      </Link>
    </div>
  );
};

export default SiteLogo;

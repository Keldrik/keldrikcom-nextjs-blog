import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SiteLogo: React.FunctionComponent = () => {
  return (
    <div className="flex-shrink">
      <Link href="/">
        <a>
          <Image
            src="/img/logo.png"
            alt="Keldrik Website Logo"
            width={175}
            height={24}
            className="hover:opacity-50 transform hover:scale-95 transition duration-500"
          />
        </a>
      </Link>
    </div>
  );
};

export default SiteLogo;

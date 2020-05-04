import React from 'react';
import SocialIcons from './socialicons';
import Link from 'next/link';

const Sitefooter: React.FunctionComponent = () => {
  return (
    <footer className="pt-4 pb-5">
      <div className="flex justify-around pb-2 text-sm">
        <div className="uppercase">
          <span className="px-2">
            <Link href="/kontakt">
              <a className="font-medium">Kontakt</a>
            </Link>
          </span>
          -
          <span className="px-2">
            <Link href="/impressum">
              <a className="font-medium">Impressum</a>
            </Link>
          </span>
          -
          <span className="px-2">
            <Link href="/datenschutz">
              <a className="font-medium">Datenschutz</a>
            </Link>
          </span>
        </div>
      </div>
      <SocialIcons />
    </footer>
  );
};

export default Sitefooter;

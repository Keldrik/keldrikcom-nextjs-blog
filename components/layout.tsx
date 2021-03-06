import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Siteheader from './siteheader';
import Sitefooter from './sitefooter';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container md:w-4/5 lg:w-8/12 xl:w-7/12 m-auto pt-6 px-6 pb-4">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Siteheader />
      <main className="py-4">{children}</main>
      <Sitefooter />
    </div>
  );
}

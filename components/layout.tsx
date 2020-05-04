import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Siteheader from './siteheader';
import Sitefooter from './sitefooter';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container md:w-4/5 lg:w-8/12 xl:w-7/12 m-auto px-6 py-2">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <Siteheader />
      <main className="py-4">{children}</main>
      <Sitefooter />
    </div>
  );
}

import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/layout';
import Head from 'next/head';

const Impressum: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>
          Impressum - Keldrik.com - Programmieren mit Javascript, Node.js, React
          usw...
        </title>
        <meta
          name="description"
          content="Wer bin ich, wo bin ich, und wie kannst du mich kontaktieren?"
        />
        <meta name="robots" content="noindex" />
        <link href="https://www.keldrik.com/impressum" rel="canonical" />
      </Head>
      <div className="pt-6 pb-16">
        <h1 className="text-3xl uppercase">Impressum</h1>
        <p className="text-lg pt-4">
          <strong>Thomas Wiegold</strong>
          <br />
          Sydney, Australia
        </p>
        <p className="pt-2">E-Mail: mail@keldrik.com</p>
        <p>Verantwortliche/r i.S.d. § 55 Abs. 2 RStV: Thomas Wiegold</p>
      </div>
    </Layout>
  );
};

export default Impressum;

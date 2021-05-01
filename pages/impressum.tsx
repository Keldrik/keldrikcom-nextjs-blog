import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/layout';
import { NextSeo } from 'next-seo';

const Impressum: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Impressum - Keldrik.com - Programmieren mit Javascript, Node.js,
            React usw..."
        description="Wer bin ich, wo bin ich, und wie kannst du mich kontaktieren?"
        canonical="https://www.keldrik.com/impressum"
        noindex={true}
      />
      <Layout>
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
    </>
  );
};

export default Impressum;

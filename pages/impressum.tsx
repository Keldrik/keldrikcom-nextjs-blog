import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/layout';

const Impressum: NextPage = () => {
  return (
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
  );
};

export default Impressum;

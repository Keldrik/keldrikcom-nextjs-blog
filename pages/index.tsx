import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import { getSortedPosts, post } from '../lib/posts';
import { GetStaticProps, NextPage } from 'next';
import Postlist from '../components/postlist';

export interface IndexProps {
  allPosts: post[];
}

const Index: NextPage<IndexProps> = ({ allPosts }) => {
  return (
    <Layout>
      <Head>
        <title>
          Keldriks Blog - Programmieren mit Javascript, Node.js, React usw...
        </title>
        <meta
          name="description"
          content="Keldrik kommentiert in seinem Blog aktuelle News, gibt Tipps zur Programmierung mit Javascript, TypeScript, React und Node.js und berichtet über seine eigenen Projekte."
        />
      </Head>
      <section>
        <Postlist postList={allPosts} />
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getSortedPosts();
  return {
    props: {
      allPosts,
    },
  };
};

export default Index;

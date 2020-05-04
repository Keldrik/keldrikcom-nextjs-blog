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

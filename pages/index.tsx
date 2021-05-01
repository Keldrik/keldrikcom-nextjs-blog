import React from 'react';
import Layout from '../components/layout';
import { getSortedPosts, post } from '../lib/posts';
import { GetStaticProps, NextPage } from 'next';
import Postlist from '../components/postlist';
import { NextSeo } from 'next-seo';

export interface IndexProps {
  allPosts: post[];
}

const Index: NextPage<IndexProps> = ({ allPosts }) => {
  return (
    <>
      <NextSeo
        title="Keldriks Blog - Programmieren mit Javascript, Node.js, React usw..."
        description="Keldrik kommentiert in seinem Blog aktuelle News, gibt Tipps zur Programmierung mit Javascript, TypeScript, React und Node.js und berichtet über seine eigenen Projekte."
        canonical="https://www.keldrik.com"
      />
      <Layout>
        <section>
          <Postlist postList={allPosts} />
        </section>
      </Layout>
    </>
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

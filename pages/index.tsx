import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPosts, post } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';
import Postlist from '../components/postlist';

export default function Home({ allPosts }: { allPosts: post[] }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>Blog</h2>
        <Postlist postList={allPosts} />
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allPosts = await getSortedPosts();
  return {
    props: {
      allPosts,
    },
  };
};

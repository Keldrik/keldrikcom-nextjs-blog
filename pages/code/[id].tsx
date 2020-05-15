import React, { useEffect } from 'react';
import Prism from 'prismjs';
import Layout from '../../components/layout';
import { getAllPostIds, getPost, post } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Comments from '../../components/comments';

export interface PostProps {
  post: post;
}

const Post: NextPage<PostProps> = ({ post }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Layout>
      <Head>
        <title>
          {post.title} - Keldrik.com - Programmieren mit Javascript, Node.js,
          React usw...
        </title>
      </Head>
      <article itemScope itemType="http://schema.org/Article">
        <meta itemProp="author" content="Thomas Wiegold" />
        <header>
          <h1
            itemProp="name headline"
            className="text-center text-2xl md:text-3xl"
          >
            {post.title}
          </h1>
          <div className="text-center text-lg pb-4">
            <Date dateString={post.date} />
          </div>
        </header>
        <div
          itemProp="articleBody"
          className="postcontent"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      <Comments id={post.id} title={post.title} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params.id as string);
  return {
    props: {
      post,
    },
  };
};

export default Post;

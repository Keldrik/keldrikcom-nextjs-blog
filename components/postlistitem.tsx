import React from 'react';
import Link from 'next/link';
import Date from './date';
import { post } from '../lib/posts';

export interface PostlistitemProps {
  p: post;
}

const Postlistitem: React.FunctionComponent<PostlistitemProps> = ({ p }) => {
  const content = (
    <div
      itemProp="articleBody"
      dangerouslySetInnerHTML={{ __html: p.excerpt }}
    ></div>
  );
  return (
    <article itemScope itemType="http://schema.org/Article" className="pb-8">
      <meta itemProp="author" content="Thomas Wiegold" />
      <header>
        <div className="text-gray-700">
          <Date dateString={p.date} />
        </div>
        <Link href="/code/[id]" as={`/code/${p.id}`}>
          <a>
            <h2 itemProp="name headline" className="text-xl pt-1 pb-2">
              {p.title}
            </h2>
          </a>
        </Link>
      </header>
      {content}
      <Link href="/code/[id]" as={`/code/${p.id}`}>
        <a className="text-gray-700 font-medium">weiterlesen ...</a>
      </Link>
    </article>
  );
};

export default Postlistitem;

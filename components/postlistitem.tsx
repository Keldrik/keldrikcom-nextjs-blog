import React from 'react';
import Link from 'next/link';
import Date from './date';
import { post } from '../lib/posts';

export interface PostlistitemProps {
  p: post;
}

const Postlistitem: React.FunctionComponent<PostlistitemProps> = ({ p }) => {
  const content = <div dangerouslySetInnerHTML={{ __html: p.excerpt }}></div>;
  return (
    <div className="pb-8">
      <div className="text-gray-600">
        <Date dateString={p.date} />
      </div>
      <Link href="/code/[id]" as={`/code/${p.id}`}>
        <a>
          <h2 className="text-xl pt-1 pb-2">{p.title}</h2>
        </a>
      </Link>
      {content}
      <Link href="/code/[id]" as={`/code/${p.id}`}>
        <a className="text-gray-600 font-medium">weiterlesen ...</a>
      </Link>
    </div>
  );
};

export default Postlistitem;

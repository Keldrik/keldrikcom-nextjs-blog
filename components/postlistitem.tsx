import Link from 'next/link';
import Date from './date';
import { post } from '../lib/posts';

export interface PostlistitemProps {
  p: post;
}

const Postlistitem: React.FunctionComponent<PostlistitemProps> = ({ p }) => {
  return (
    <div>
      <Link href="/posts/[id]" as={`/posts/${p.id}`}>
        <a>
          <h2>{p.title}</h2>
        </a>
      </Link>
      <small>
        <Date dateString={p.date} />
      </small>
      <p dangerouslySetInnerHTML={{ __html: p.excerpt }}></p>
      <Link href="/posts/[id]" as={`/posts/${p.id}`}>
        <a>Weiterlesen...</a>
      </Link>
    </div>
  );
};

export default Postlistitem;

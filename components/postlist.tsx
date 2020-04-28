import Link from 'next/link';
import Date from './date';
import { post } from '../lib/posts';
import Postlistitem from './postlistitem';

export interface PostlistProps {
  postList: post[];
}

const Postlist: React.FunctionComponent<PostlistProps> = ({ postList }) => {
  return (
    <div>
      <ul>
        {postList.map((p) => (
          <li key={p.id}>
            <Postlistitem p={p} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Postlist;

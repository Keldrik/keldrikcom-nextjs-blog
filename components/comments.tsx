import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

export interface CommentsProps {
  id: string;
  title: string;
}

const Comments: React.FunctionComponent<CommentsProps> = ({ id, title }) => {
  return (
    <div className="py-8">
      <DiscussionEmbed
        shortname="keldrik"
        config={{
          url: `https://www.keldrik.com/code/${id}`,
          identifier: id,
          title: title,
        }}
      />
    </div>
  );
};

export default Comments;

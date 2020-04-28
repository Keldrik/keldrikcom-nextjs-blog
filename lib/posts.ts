import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

export interface post {
  id: string;
  date: string;
  title: string;
  categories: string[];
  tags: string[];
  excerpt: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

const readPostData = async (
  fileName: string,
  getContent: boolean
): Promise<post> => {
  const id = fileName.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = await fs.promises.readFile(fullPath, 'utf8');
  const matterResult = matter(fileContents, { excerpt: true });
  const rawData = {
    id,
    ...(matterResult.data as {
      date: string;
      title: string;
      categories: string;
      tags: string;
    }),
  };
  const processedExcerpt = await remark()
    .use(html)
    .process(matterResult.excerpt);
  const excerptHtml = processedExcerpt.toString();
  let contentHtml = '';
  if (getContent) {
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    contentHtml = processedContent.toString().replace('<hr>', '');
  }
  return {
    ...rawData,
    categories: rawData.categories?.trim().split(',') ?? [],
    tags: rawData.tags?.trim().split(',') ?? [],
    excerpt: excerptHtml,
    content: contentHtml,
  };
};

export async function getSortedPosts() {
  const fileNames = await fs.promises.readdir(postsDirectory);
  const postsPromise = [];
  fileNames.map((fileName) => postsPromise.push(readPostData(fileName, false)));
  const allPosts = await Promise.all(postsPromise);
  return allPosts.sort((x, y) =>
    x.date > y.date ? -1 : x.date < y.date ? 1 : 0
  );
}

export async function getAllPostIds() {
  const fileNames = await fs.promises.readdir(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPost(id: string) {
  return await readPostData(`${id}.md`, true);
}

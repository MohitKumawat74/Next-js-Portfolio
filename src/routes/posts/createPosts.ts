// src/routes/posts/data.ts
export type createPost = { id: string; title: string; content: string };

const posts: createPost[] = [
  { id: '1', title: 'First Post', content: 'Hello world!' },
  { id: '2', title: 'Second Post', content: 'Another blog post here.' }
];

export function getPosts(): createPost[] {
  return posts;
}

export function createPost(data: Omit<createPost, 'id'>): createPost {
  const newPost: createPost = { id: Date.now().toString(), ...data };
  posts.push(newPost);
  return newPost;
}
// src/routes/posts/createPosts.ts
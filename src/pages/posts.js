import { useEffect, useState } from 'react'
import { Post } from '../components/Post'
import * as postService from '../services/posts'
import styles from './posts.css'

export default function() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const posts = await postService.query({ page: 1, limit: 5 });

      setPosts(posts);
    }

    fetchData();
  }, []);

  return (
    <div className={styles.normal}>
      <h1>Page posts</h1>
      <div>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

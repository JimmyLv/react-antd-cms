import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Post } from '../components/Post';
import { getLoading, getPosts } from '../models/post';
import styles from './posts.css';

export default function() {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch({ type: 'post/query' });
  }, []);

  return (
    <div className={styles.normal}>
      <h1>Page posts</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

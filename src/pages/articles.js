import * as postService from '../services/posts';
import styles from './articles.css';
import { useEffect, useState } from 'react';
import { Article } from '../components/Article';

export default function() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const posts = await postService.query();
      setArticles(posts);
    }

    fetchData();
  }, []);
  return (
    <div className={styles.normal}>
      <h1>Page articles</h1>
      <div>
        {articles.map(post => (
          <Article key={post.id} article={post} />
        ))}
      </div>
    </div>
  );
}

import { Card } from 'antd';
import { useEffect, useState } from 'react';
import * as userService from '../services/users';

export function Article({ article }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    async function fetchData() {
      const user = await userService.query(article.userId);
      setUser(user);
    }

    fetchData();
  }, [article.userId]);
  return (
    <Card title={<h2>{article.title}</h2>} extra={user.username}>
      <p>{article.body}</p>
    </Card>
  );
}

import { Card } from 'antd';
import { useEffect, useState } from 'react';
import * as userService from '../services/users';

export function Post({ post }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    async function fetchData() {
      const user = await userService.query(post.userId);
      setUser(user);
    }

    fetchData();
  }, [post]);

  return (
    <Card title={<h2>{post.title}</h2>} extra={<div>{user.username}</div>}>
      <p>{post.body}</p>
    </Card>
  );
}

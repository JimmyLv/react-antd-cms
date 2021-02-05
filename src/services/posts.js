export function query({ page = '1', limit = '10' } = {}) {
  return fetch(`/api/posts?_page=${page}&_limit=${limit}`).then(res => res.json());
}
export function remove(id) {
  return fetch(`/api/posts/${id}`, { method: 'DELETE' }).then(res => res.json());
}

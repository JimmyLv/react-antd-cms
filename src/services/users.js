export function query(id) {
  return fetch(`/api/users/${id}`).then(res => res.json());
}

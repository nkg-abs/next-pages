'use client'
 
import useSWR from 'swr';
 
const fetcher = (url) => fetch(url).then((r) => r.json());
 
export default function Todos() {
  const res = useSWR(
    `https://jsonplaceholder.typicode.com/comments`,
    fetcher
  );
  const { data, error } = res;

  console.log(data, 'data')

  if (error) return 'Failed to load'
  if (!data) return 'Loading...'
 
  return (
    <ul>
      { data.map(({ email, id }) => <li key={id}>{ email }</li>)}
    </ul>
  )
}
